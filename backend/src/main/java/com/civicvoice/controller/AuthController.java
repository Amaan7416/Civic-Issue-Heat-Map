package com.civicvoice.controller;

import com.civicvoice.dto.AuthResponse;
import com.civicvoice.dto.LoginRequest;
import com.civicvoice.security.JwtService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @Value("${admin.username:admin}")
    private String adminUsername;

    @Value("${admin.password:demo}")
    private String adminPassword;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        if (request.getUsername().equals(adminUsername) && 
            request.getPassword().equals(adminPassword)) {
            
            String token = jwtService.generateToken(adminUsername);
            return ResponseEntity.ok(new AuthResponse(token, adminUsername, jwtService.getExpiration()));
        }
        
        return ResponseEntity.status(401)
            .body(Map.of("error", "Invalid credentials"));
    }

    @PostMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body(Map.of("valid", false));
        }
        
        String token = authHeader.substring(7);
        if (jwtService.validateToken(token)) {
            return ResponseEntity.ok(Map.of("valid", true));
        }
        
        return ResponseEntity.status(401).body(Map.of("valid", false));
    }
}