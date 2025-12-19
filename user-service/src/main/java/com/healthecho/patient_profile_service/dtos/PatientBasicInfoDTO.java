package com.healthecho.patient_profile_service.dtos;


import lombok.Data;

import java.util.Date;

@Data
public class PatientBasicInfoDTO {
    private Date age;
    private Double weight;
    private Double pulseRate;
    private String bloodGroup;
    private String rhFactor;
}
