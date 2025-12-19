package com.healthecho.patient_profile_service.dtos;

import com.healthecho.patient_profile_service.models.MedicalInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientPublicResponseDTO {
    private String ID;
    private String firstName;
    private String LastName;
    private String location;
    private MedicalInfo basicMedicalInfo;
}
