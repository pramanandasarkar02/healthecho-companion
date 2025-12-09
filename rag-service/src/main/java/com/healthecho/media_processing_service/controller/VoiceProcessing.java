package com.healthecho.media_processing_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;

import org.vosk.Model;
import org.vosk.Recognizer;
import org.vosk.LibVosk;

@RestController
public class VoiceProcessing {

    private final Model model;

    private final String TEXT_DIR = "uploads/text";
    private final String AUDIO_PATH = "uploads/media/voice.webm";
    private final String WAV_PATH = "uploads/media/voice.wav";

    public VoiceProcessing() throws IOException {
        // Load Vosk Model (change path based on your setup)
//        LibVosk.setLogLevel(-1); // Suppress logs (optional)
        this.model = new Model("models/vosk-model-small-en-us-0.15");
    }

    @PostMapping("/process-voice")
    public ResponseEntity<String> processAudio() {
        try {
            // 1️⃣ Convert WEBM → WAV
            convertWebmToWav(AUDIO_PATH, WAV_PATH);

            // 2️⃣ Transcribe WAV file
            String text = transcribeAudio(WAV_PATH);

            // 3️⃣ Save TEXT file
            File dir = new File(TEXT_DIR);
            if (!dir.exists()) dir.mkdirs();

            FileWriter myWriter = new FileWriter(TEXT_DIR + "/output.txt");
            myWriter.write(text);
            myWriter.close();

            return ResponseEntity.ok(text);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        } finally {
            // Clean up model resources when done (optional, but recommended)
            // model.close(); // Uncomment if you want to close after each request
        }
    }

    // ============================================================
    // ========= Audio Conversion + Transcription Utils ===========
    // ============================================================

    // Convert WEBM to WAV using ffmpeg
    private void convertWebmToWav(String webmPath, String wavPath) throws Exception {
        ProcessBuilder pb = new ProcessBuilder(
                "ffmpeg", "-y",
                "-i", webmPath,
                "-ar", "16000", "-ac", "1",
                "-acodec", "pcm_s16le",
                wavPath
        );
        pb.redirectErrorStream(true);
        Process p = pb.start();

        // Consume output to prevent process hanging
        BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }

        int exitCode = p.waitFor();
        if (exitCode != 0) {
            throw new Exception("FFmpeg conversion failed with exit code: " + exitCode);
        }
    }

    private String transcribeAudio(String wavPath) throws Exception {
        try (InputStream ais = new FileInputStream(wavPath);
             Recognizer recognizer = new Recognizer(model, 16000)) {

            byte[] buffer = new byte[4096];
            int bytesRead;

            while ((bytesRead = ais.read(buffer)) != -1) {
                if (recognizer.acceptWaveForm(buffer, bytesRead)) {
                    System.out.println(recognizer.getResult());
                }
            }

            return recognizer.getFinalResult();
        }
    }
}