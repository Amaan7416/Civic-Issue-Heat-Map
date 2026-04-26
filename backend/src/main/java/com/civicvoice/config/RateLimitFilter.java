package com.civicvoice.config;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class RateLimitFilter implements Filter {

    private static final int MAX_REQUESTS_PER_MINUTE = 10;
    private static final long TIME_WINDOW_MS = 60_000;

    private final Map<String, LoginAttempt> loginAttempts = new ConcurrentHashMap<>();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        if (isLoginAttempt(httpRequest)) {
            String clientIp = getClientIp(httpRequest);
            if (isRateLimited(clientIp)) {
                httpResponse.setStatus(429);
                httpResponse.setContentType("application/json");
                httpResponse.getWriter().write("{\"error\":\"Too many login attempts. Please try again later.\"}");
                return;
            }
        }

        chain.doFilter(request, response);
    }

    private boolean isLoginAttempt(HttpServletRequest request) {
        return request.getRequestURI().endsWith("/login") && request.getMethod().equals("POST");
    }

    private String getClientIp(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (xForwardedFor != null && !xForwardedFor.isBlank()) {
            return xForwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    private boolean isRateLimited(String clientIp) {
        long now = System.currentTimeMillis();
        LoginAttempt attempt = loginAttempts.computeIfAbsent(clientIp, k -> new LoginAttempt());

        if (now - attempt.windowStart > TIME_WINDOW_MS) {
            attempt.count.set(1);
            attempt.windowStart = now;
            return false;
        }

        return attempt.count.incrementAndGet() > MAX_REQUESTS_PER_MINUTE;
    }

    private static class LoginAttempt {
        final AtomicInteger count = new AtomicInteger(1);
        long windowStart = System.currentTimeMillis();
    }
}