package com.healthecho.patient_profile_service.service;

import com.healthecho.patient_profile_service.dtos.PatientResponse;
import com.healthecho.patient_profile_service.models.Patient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class PatientService {

    public List<PatientResponse> getAllPatients() {
        return new LinkedList<>(){};
    }


}
