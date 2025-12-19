package com.healthecho.patient_profile_service.dtos;

import com.healthecho.patient_profile_service.models.MedicalIndex;
import lombok.Data;

@Data
public class PatientDynamicInfoDTO {
    private MedicalIndex[] specialIndexList;
}
