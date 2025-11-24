package com.healthecho.patient_profile_service.dtos;

import lombok.Data;

@Data
public class PatientResponse {
    private String ID;
    private String fullName;
    private String lastName;
    private Double age;
}
