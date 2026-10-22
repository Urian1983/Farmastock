package com.example.FarmaStock.entities;

import jakarta.persistence.*;

@Entity
@Table(name="farmaceutico")
public class Farmaceutico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private String email;
    
     // Constructor vacío
    public Farmaceutico() {
    }

    // Constructor con parámetros
    public Farmaceutico(String nombre, String apellido,
                  String email, String telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
