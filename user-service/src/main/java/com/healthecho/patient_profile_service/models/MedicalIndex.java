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
public class MedicalIndex {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String ID;

    private String key;
    private String value;
    private String standardValue;

    private Date issueDate;
}
