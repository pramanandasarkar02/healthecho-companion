package com.healthecho.patient_profile_service.dtos;

import lombok.Data;

@Data
public class PatientDTO {
    private String firstName;
    private String lastName;
    private String location;
}
