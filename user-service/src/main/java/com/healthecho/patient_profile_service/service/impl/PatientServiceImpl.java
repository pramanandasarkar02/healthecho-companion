package com.healthecho.patient_profile_service.service.impl;

import com.healthecho.patient_profile_service.dtos.PatientDTO;
import com.healthecho.patient_profile_service.dtos.PatientResponseDTO;
import com.healthecho.patient_profile_service.models.Patient;
import com.healthecho.patient_profile_service.repository.PatientRepository;
import com.healthecho.patient_profile_service.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
    private final PatientRepository patientRepository;
    @Override
    public List<PatientResponseDTO> getAllPatients() {
        return patientRepository.findAll().stream().map(this::convertToPatientDTO).collect(Collectors.toList());
    }

    @Override
    public Optional<PatientResponseDTO> getPatientById(String patientId) {
        return patientRepository.findById(patientId).map(this::convertToPatientDTO);
    }

    @Override
    public PatientResponseDTO createPatient(PatientDTO patientCreateDTO) {
        Patient patient = convertToPatient(patientCreateDTO);
        Patient createdPatient = patientRepository.save(patient);
        return convertToPatientDTO(createdPatient);

    }

    @Override
    public PatientResponseDTO updatePatientInfo(String patientId, PatientDTO patientDTO) {
        Patient patient = patientRepository.findById(patientId).orElseThrow();
        patient.setFirstName(patientDTO.getFirstName());
        patient.setLastName(patientDTO.getLastName());
        patient.setAge(patientDTO.getAge());

        Patient updatedPatient = patientRepository.save(patient);
        return this.convertToPatientDTO(updatedPatient);

    }


//    not implemented yet
    @Override
    public PatientResponseDTO disablePatient(String patientId) {
        Patient patient = patientRepository.findById(patientId).orElseThrow();

        Patient updatedPatient = patientRepository.save(patient);
        return this.convertToPatientDTO(updatedPatient);
    }


    private Patient convertToPatient(PatientDTO patientDTO){
        Patient newPatient = new Patient();
        newPatient.setFirstName(patientDTO.getFirstName());
        newPatient.setLastName(patientDTO.getLastName());
        newPatient.setAge(patientDTO.getAge());
        return newPatient;
    }

    private PatientResponseDTO convertToPatientDTO(Patient patient){
        return new PatientResponseDTO(patient.getID(), patient.getFirstName(), patient.getLastName(), patient.getAge());
    }
}
