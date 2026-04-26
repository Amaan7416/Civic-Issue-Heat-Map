package com.civicvoice.service;

import com.civicvoice.config.DepartmentConfig;
import com.civicvoice.model.CivicIssue;
import com.civicvoice.repository.CivicIssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class CivicIssueService {
    
    @Autowired
    private CivicIssueRepository repository;
    
    @Autowired
    private DepartmentConfig departmentConfig;
    
    public CivicIssue createIssue(CivicIssue issue) {
        String dept = departmentConfig.getDepartment(issue.getCategory());
        issue.setDepartment(dept);
        issue.setCity(normalize(issue.getCity()));
        issue.setArea(trim(issue.getArea()));
        issue.setAddress(trim(issue.getAddress()));
        issue.setDescription(trim(issue.getDescription()));
        issue.setReporterName(trim(issue.getReporterName()));
        issue.setReporterPhone(trim(issue.getReporterPhone()));
        issue.setReporterEmail(trim(issue.getReporterEmail()));
        return repository.save(issue);
    }
    
    public List<CivicIssue> getAllIssues() {
        return repository.findAll();
    }
    
    public Page<CivicIssue> getAllIssuesPaginated(Pageable pageable) {
        return repository.findAll(pageable);
    }
    
    public CivicIssue getIssueById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Issue not found with id: " + id));
    }
    
    public CivicIssue updateStatus(Long id, String status) {
        CivicIssue issue = getIssueById(id);
        issue.setStatus(validateStatus(status));
        return repository.save(issue);
    }
    
    public List<CivicIssue> getIssuesByCategory(String category) {
        return repository.findByCategory(category);
    }
    
    public List<CivicIssue> getIssuesByStatus(String status) {
        return repository.findByStatus(status);
    }
    
    public List<CivicIssue> getFilteredIssues(String category, String status, String city, String area) {
        return repository.findAll().stream()
            .filter(issue -> matches(issue.getCategory(), category))
            .filter(issue -> matches(issue.getStatus(), status))
            .filter(issue -> matches(issue.getCity(), city))
            .filter(issue -> contains(issue.getArea(), area) || contains(issue.getAddress(), area))
            .toList();
    }

    private String validateStatus(String status) {
        String normalizedStatus = normalize(status);
        return switch (normalizedStatus) {
            case "pending", "in_progress", "resolved" -> normalizedStatus;
            default -> throw new IllegalArgumentException("Invalid status: " + status);
        };
    }

    private boolean matches(String actual, String expected) {
        if (expected == null || expected.isBlank() || "all".equalsIgnoreCase(expected)) {
            return true;
        }
        return normalize(actual).equals(normalize(expected));
    }

    private boolean contains(String actual, String expected) {
        if (expected == null || expected.isBlank() || "all".equalsIgnoreCase(expected)) {
            return true;
        }
        if (actual == null) {
            return false;
        }
        return actual.toLowerCase(Locale.ROOT).contains(expected.trim().toLowerCase(Locale.ROOT));
    }

    private String normalize(String value) {
        return value == null ? "" : value.trim().toLowerCase(Locale.ROOT);
    }

    private String trim(String value) {
        return value == null ? null : value.trim();
    }

    public Map<String, Long> getStats() {
        return Map.of(
            "total", repository.countAllIssues(),
            "pending", repository.countPending(),
            "inProgress", repository.countInProgress(),
            "resolved", repository.countResolved()
        );
    }
}
