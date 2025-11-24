package com.healthecho.patient_profile_service.repository;

import com.healthecho.patient_profile_service.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PatientRepository extends JpaRepository<Patient, String> {
}
