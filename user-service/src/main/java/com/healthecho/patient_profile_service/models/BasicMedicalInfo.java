package com.healthecho.patient_profile_service.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class BasicMedicalInfo implements MedicalInfo{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String ID;

    private Date age;
    private Double weight;
    private Double pulseRate;
    private String bloodGroup;
    private String rhFactor;
}
