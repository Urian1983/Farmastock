/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.FarmaStock.config;

import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
   @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {
        // JdbcUserDetailsManager usa por defecto las tablas `users` y `authorities`,
        // que coinciden con las definidas en database.sql
        return new JdbcUserDetailsManager(dataSource);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth
                        // -------- MEDICAMENTOS --------
                        // Cualquier usuario autenticado (cliente o farmacéutico) puede consultar medicamentos
                        .requestMatchers(HttpMethod.GET, "/api/medicamentos/**").hasAnyRole("CLIENTE", "FARMACEUTICO")
                        // Solo el farmacéutico puede crear, modificar o eliminar medicamentos
                        .requestMatchers(HttpMethod.POST, "/api/medicamentos/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.PUT, "/api/medicamentos/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.DELETE, "/api/medicamentos/**").hasRole("FARMACEUTICO")

                        // -------- FARMACEUTICOS --------
                        // Solo un farmacéutico puede gestionar la lista de farmacéuticos
                        .requestMatchers(HttpMethod.GET, "/api/farmaceuticos/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.POST, "/api/farmaceuticos/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.PUT, "/api/farmaceuticos/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.DELETE, "/api/farmaceuticos/**").hasRole("FARMACEUTICO")

                        // -------- CLIENTES --------
                        // Solo un farmacéutico puede gestionar la lista de clientes
                        .requestMatchers(HttpMethod.GET, "/api/clientes/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.POST, "/api/clientes/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.PUT, "/api/clientes/**").hasRole("FARMACEUTICO")
                        .requestMatchers(HttpMethod.DELETE, "/api/clientes/**").hasRole("FARMACEUTICO")

                        // Cualquier otra petición requiere autenticación
                        .anyRequest().authenticated())
                .httpBasic(Customizer.withDefaults())
                .csrf(csrf -> csrf.disable());
        return http.build();
    }
    
}
