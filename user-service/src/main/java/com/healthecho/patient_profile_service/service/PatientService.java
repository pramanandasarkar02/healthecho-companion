package com.healthecho.patient_profile_service.service;

import com.healthecho.patient_profile_service.dtos.PatientDTO;
import com.healthecho.patient_profile_service.dtos.PatientResponseDTO;
import com.healthecho.patient_profile_service.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface PatientService {
    public List<PatientResponseDTO> getAllPatients();
    public Optional<PatientResponseDTO> getPatientById(String patientId);
    public PatientResponseDTO createPatient(PatientDTO patientCreateDTO);
    public PatientResponseDTO updatePatientInfo(String patientId, PatientDTO patientDTO);
    public PatientResponseDTO disablePatient(String patientId);
}
