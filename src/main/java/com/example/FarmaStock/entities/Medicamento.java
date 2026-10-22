package com.example.FarmaStock.entities;

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

    //Constructores

    public Medicamento() {
    }

    public Medicamento(int id, String nombre, String principioActivo,
                       int cantidad, FormatoMedicamento formatoMedicamento,
                       float precio) {
        this.id = id;
        this.nombre = nombre;
        this.principioActivo = principioActivo;
        this.cantidad = cantidad;
        this.formatoMedicamento = formatoMedicamento;
        this.precio = precio;
    }

    public Medicamento(String nombre, String principioActivo,
                       int cantidad, FormatoMedicamento formatoMedicamento,
                       float precio) {
        this.nombre = nombre;
        this.principioActivo = principioActivo;
        this.cantidad = cantidad;
        this.formatoMedicamento = formatoMedicamento;
        this.precio = precio;
    }
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
