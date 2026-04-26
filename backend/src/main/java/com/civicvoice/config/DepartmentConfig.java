package com.civicvoice.config;

import org.springframework.stereotype.Component;
import java.util.HashMap;
import java.util.Map;

@Component
public class DepartmentConfig {

    private static final Map<String, String> DEPARTMENT_ROUTING = new HashMap<>();

    static {
        DEPARTMENT_ROUTING.put("pothole", "Public Works Department (PWD)");
        DEPARTMENT_ROUTING.put("garbage", "Municipal Corporation");
        DEPARTMENT_ROUTING.put("streetlight", "Electricity Department");
        DEPARTMENT_ROUTING.put("water_leak", "Water Supply Board");
        DEPARTMENT_ROUTING.put("sewer", "Water Supply Board");
        DEPARTMENT_ROUTING.put("road_damage", "Public Works Department (PWD)");
        DEPARTMENT_ROUTING.put("drainage", "Municipal Corporation");
        DEPARTMENT_ROUTING.put("tree", "Parks & Gardens Department");
    }

    public String getDepartment(String category) {
        return DEPARTMENT_ROUTING.getOrDefault(category, "General");
    }

    public Map<String, String> getAllDepartments() {
        return DEPARTMENT_ROUTING;
    }
}