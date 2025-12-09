package com.healthecho.patient_activity_service.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ActivityController {
    private static final String MEDIA_DIR = "uploads/media/";

    @PostMapping("/upload")
    public ResponseEntity<String> uploadMedia(@RequestParam("file")MultipartFile file) {
        try {
            File dir = new File(MEDIA_DIR);
            if (!dir.exists()){
                dir.mkdirs();
            }
            Path filePath = Path.of(MEDIA_DIR + file.getOriginalFilename());
            Files.write(filePath, file.getBytes());

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
        return ResponseEntity.ok("Success: " + file.getOriginalFilename() + " uploaded.");
    }
}
