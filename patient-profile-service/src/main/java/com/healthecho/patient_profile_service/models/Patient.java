package com.healthecho.patient_profile_service.models;

import lombok.Data;

@Data
public class Patient {
    private String ID;
    private String fullName;
    private String lastName;
    private Double age;

}
