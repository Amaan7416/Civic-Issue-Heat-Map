package com.civicvoice.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "civic_issues")
@Data
public class CivicIssue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    @NotBlank(message = "Complaint ID is required")
    private String complaintId;
    
    @Column(nullable = false)
    @NotBlank(message = "Category is required")
    private String category;
    
    @NotBlank(message = "City is required")
    private String city;

    @NotBlank(message = "Area is required")
    private String area;
    
    @Column(nullable = false)
    @NotNull(message = "Latitude is required")
    private Double latitude;
    
    @Column(nullable = false)
    @NotNull(message = "Longitude is required")
    private Double longitude;
    
    @NotBlank(message = "Address is required")
    private String address;
    
    @Column(length = 1000)
    private String description;
    
    @NotBlank(message = "Reporter name is required")
    private String reporterName;
    @NotBlank(message = "Reporter phone is required")
    private String reporterPhone;
    private String reporterEmail;
    
    @Column(nullable = false)
    private String status = "pending";
    
    private LocalDate date;
    
    private String department;
    
    @Column(length = 2000000)
    private String photoUrl;
    
    @PrePersist
    public void prePersist() {
        if (date == null) {
            date = LocalDate.now();
        }
        if (complaintId == null) {
            complaintId = "CV-" + System.currentTimeMillis();
        }
    }
}
