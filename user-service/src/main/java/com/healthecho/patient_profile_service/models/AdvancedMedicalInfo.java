package com.healthecho.patient_profile_service.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class AdvancedMedicalInfo implements MedicalInfo{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String ID;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "current_diseases_id")
    private MedicalIndex currentDiseases;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "diabetes_id")
    private MedicalIndex diabetes;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "hypertension_id")
    private MedicalIndex Hypertension;
}
