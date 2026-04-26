package com.civicvoice.controller;

import com.civicvoice.model.CivicIssue;
import com.civicvoice.service.CivicIssueService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class CivicIssueController {
    
    @Autowired
    private CivicIssueService service;
    
    @PostMapping
    public ResponseEntity<CivicIssue> createIssue(@Valid @RequestBody CivicIssue issue) {
        CivicIssue created = service.createIssue(issue);
        return ResponseEntity.ok(created);
    }
    
    @GetMapping
    public ResponseEntity<List<CivicIssue>> getAllIssues() {
        return ResponseEntity.ok(service.getAllIssues());
    }
    
    @GetMapping("/paginated")
    public ResponseEntity<Page<CivicIssue>> getPaginatedIssues(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "id") String sortBy) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sortBy).descending());
        return ResponseEntity.ok(service.getAllIssuesPaginated(pageRequest));
    }
    
    @GetMapping("/filter")
    public ResponseEntity<List<CivicIssue>> getFilteredIssues(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String area) {
        return ResponseEntity.ok(service.getFilteredIssues(category, status, city, area));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<CivicIssue> updateStatus(
            @PathVariable Long id, 
            @RequestBody Map<String, String> payload) {
        String status = payload.get("status");
        return ResponseEntity.ok(service.updateStatus(id, status));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<CivicIssue> getIssue(@PathVariable Long id) {
        return ResponseEntity.ok(service.getIssueById(id));
    }
    
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Long>> getStats() {
        return ResponseEntity.ok(service.getStats());
    }
}
