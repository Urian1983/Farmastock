/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.FarmaStock.entity;

import jakarta.persistence.*;

@Entity
@Table(name="medicamentos")
public class Medicamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nombre", unique = true, nullable = false)
    private String nombre;
    @Column(name="principio_activo", unique = true, nullable = false)
    private String principioActivo;
    @Column(name="cantidad", nullable = false)
    private int cantidad;
    @Column(name="formato_medicamento")
    @Enumerated(EnumType.STRING)
    private FormatoMedicamento formatoMedicamento;
    @Column(name="precio")
    private float precio;

    //getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPrincipioActivo() {
        return principioActivo;
    }

    public void setPrincipioActivo(String principioActivo) {
        this.principioActivo = principioActivo;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public FormatoMedicamento getFormatoMedicamento() {
        return formatoMedicamento;
    }

    public void setFormatoMedicamento(FormatoMedicamento formatoMedicamento) {
        this.formatoMedicamento = formatoMedicamento;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    //toString
    @Override
    public String toString() {
        return "Medicamento{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", principioActivo='" + principioActivo + '\'' +
                ", cantidad=" + cantidad +
                ", formatoMedicamento=" + formatoMedicamento +
                ", precio=" + precio +
                '}';
    }
}
