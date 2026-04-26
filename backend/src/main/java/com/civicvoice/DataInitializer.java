package com.civicvoice;

import com.civicvoice.config.DepartmentConfig;
import com.civicvoice.model.CivicIssue;
import com.civicvoice.repository.CivicIssueRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Configuration
public class DataInitializer {
    
    @Bean
    CommandLineRunner initDatabase(CivicIssueRepository repository, DepartmentConfig departmentConfig) {
        return args -> {
            if (repository.count() == 0) {
                List<CivicIssue> sampleIssues = Arrays.asList(
                    createIssue("CV-ABC123", "pothole", "delhi", "Connaught Place", 28.6139, 77.2090, "Near Connaught Place, New Delhi", "Large pothole on main road", "Rajesh Kumar", "9876543210", "pending", departmentConfig),
                    createIssue("CV-DEF456", "garbage", "mumbai", "Dharavi", 19.0760, 72.8777, "90 Feet Road, Dharavi, Mumbai", "Garbage pile not collected", "Priya Sharma", "9876543211", "in_progress", departmentConfig),
                    createIssue("CV-GHI789", "streetlight", "bangalore", "MG Road", 12.9716, 77.5946, "MG Road, Bengaluru", "Streetlight not working", "Suresh Reddy", "9876543212", "resolved", departmentConfig),
                    createIssue("CV-JKL012", "water_leak", "chennai", "T Nagar", 13.0827, 80.2707, "T Nagar Main Road, Chennai", "Water leakage from pipeline", "Anitha Venkatesh", "9876543213", "pending", departmentConfig),
                    createIssue("CV-MNO345", "sewer", "hyderabad", "Charminar", 17.3850, 78.4867, "Near Charminar, Hyderabad", "Sewer overflow", "Mohd. Ibrahim", "9876543214", "in_progress", departmentConfig),
                    createIssue("CV-PQR678", "road_damage", "kolkata", "Park Street", 22.5726, 88.3639, "Park Street crossing, Kolkata", "Road surface damaged", "Sanjay Das", "9876543215", "pending", departmentConfig),
                    createIssue("CV-STU901", "garbage", "delhi", "Saket", 28.65, 77.23, "Saket market road, New Delhi", "Construction waste dumped", "Amit Singh", "9876543216", "pending", departmentConfig),
                    createIssue("CV-VWX234", "streetlight", "mumbai", "Bandra West", 19.1, 72.9, "Bandra West linking road, Mumbai", "Multiple streetlights not working", "Rahul Mehta", "9876543217", "resolved", departmentConfig),
                    createIssue("CV-YZA567", "pothole", "bangalore", "Whitefield", 12.95, 77.62, "Whitefield ITPL road, Bengaluru", "Pothole near IT park", "Kavya Nair", "9876543218", "in_progress", departmentConfig),
                    createIssue("CV-BCD890", "drainage", "chennai", "Anna Nagar", 13.05, 80.28, "Anna Nagar West, Chennai", "Drainage blocked", "Vijay Kumar", "9876543219", "pending", departmentConfig)
                );
                repository.saveAll(sampleIssues);
                System.out.println(">>> Sample data initialized: " + sampleIssues.size() + " issues");
            }
        };
    }
    
    private CivicIssue createIssue(String id, String category, String city, String area, double lat, double lng, 
            String address, String desc, String name, String phone, String status, DepartmentConfig departmentConfig) {
        CivicIssue issue = new CivicIssue();
        issue.setComplaintId(id);
        issue.setCategory(category);
        issue.setCity(city);
        issue.setArea(area);
        issue.setLatitude(lat);
        issue.setLongitude(lng);
        issue.setAddress(address);
        issue.setDescription(desc);
        issue.setReporterName(name);
        issue.setReporterPhone(phone);
        issue.setStatus(status);
        issue.setDate(LocalDate.now());
        issue.setDepartment(departmentConfig.getDepartment(category));
        
        return issue;
    }
}
