package com.healthecho.patient_profile_service.controllers;

import com.healthecho.patient_profile_service.dtos.PatientDTO;
import com.healthecho.patient_profile_service.dtos.PatientResponseDTO;
import com.healthecho.patient_profile_service.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/patient")
public class PatientController {

    private final PatientService patientService;

    @GetMapping
    public ResponseEntity<List<PatientResponseDTO>> getAllPatients() {
        return ResponseEntity.ok(patientService.getAllPatients());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PatientResponseDTO> getPatientById(@PathVariable String id){
        Optional<PatientResponseDTO> patientResponseDTO = patientService.getPatientById(id);
        return patientResponseDTO.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @PostMapping
    public PatientResponseDTO createPatient(@RequestBody PatientDTO patientCreate){
        return patientService.createPatient(patientCreate);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PatientResponseDTO> updatePatientInfo(@PathVariable String id, @RequestBody  PatientDTO patientDTO){
        try{
            PatientResponseDTO patientResponseDTO = patientService.updatePatientInfo(id, patientDTO);
            return ResponseEntity.ok(patientResponseDTO);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/disable/{id}")
    public ResponseEntity<PatientResponseDTO> disablePatient(@PathVariable String id) {
        try{
            PatientResponseDTO patientResponseDTO = patientService.disablePatient(id);
            return ResponseEntity.ok(patientResponseDTO);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}