package com.example.FarmaStock.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
public class SecurityConfig {

    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {
        return new JdbcUserDetailsManager(dataSource);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET, "/api/clients/**").hasAnyRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.GET, "/api/medicamentos/**").hasAnyRole("FARMACEUTICO", "CLIENTE")
                        .requestMatchers(HttpMethod.POST, "/api/medicamentos/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.PUT, "/api/medicamentos/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.DELETE, "/api/medicamentos/**").hasRole("FARMACEUTICO")
                        .anyRequest().authenticated())
                .httpBasic(Customizer.withDefaults())
                .csrf(csrf -> csrf.disable());
        return http.build();
    }
}