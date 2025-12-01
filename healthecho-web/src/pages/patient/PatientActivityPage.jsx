import React, { useState } from "react";

const PatientActivityPage = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      let chunks = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioBlob(blob);
        setIsRecording(false);

        // stop microphone
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setIsRecording(true);
      setMediaRecorder(recorder);
    } catch (err) {
      console.error("Mic error:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) mediaRecorder.stop();
  };

  const uploadAudio = async () => {
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append("file", audioBlob, "voice.webm");

    await fetch("http://localhost:8081/upload", {
      method: "POST",
      body: formData,
    });

    alert("Uploaded!");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, fontFamily: "sans-serif" }}>
      <h2>Patient Activity - Record Voice</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
        <button
          onClick={startRecording}
          disabled={isRecording}
          style={{
            padding: "10px 15px",
            background: isRecording ? "#bbb" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: isRecording ? "not-allowed" : "pointer",
          }}
        >
          Start Recording
        </button>

        <button
          onClick={stopRecording}
          disabled={!isRecording}
          style={{
            padding: "10px 15px",
            background: !isRecording ? "#bbb" : "#f44336",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: !isRecording ? "not-allowed" : "pointer",
          }}
        >
          Stop Recording
        </button>

        <button
          onClick={uploadAudio}
          disabled={!audioBlob}
          style={{
            padding: "10px 15px",
            background: audioBlob ? "#2196F3" : "#bbb",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: audioBlob ? "pointer" : "not-allowed",
          }}
        >
          Upload Audio
        </button>

        {isRecording && <p style={{ color: "red" }}>Recording... 🔴</p>}

        {audioBlob && (
          <div style={{ marginTop: 15 }}>
            <p>Preview:</p>
            <audio controls src={URL.createObjectURL(audioBlob)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientActivityPage;
