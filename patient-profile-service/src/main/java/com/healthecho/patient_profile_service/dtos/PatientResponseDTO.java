package com.healthecho.patient_profile_service.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientResponseDTO {
    private String ID;
    private String firstName;
    private String lastName;
    private Double age;

}
