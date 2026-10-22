package com.example.FarmaStock.dao;

import com.example.FarmaStock.entities.Medicamento;

import java.util.List;
import java.util.Optional;

public interface MedicamentoDAO {
    void save(Medicamento medicamento);
    Optional<Medicamento> update(Medicamento medicamento);
    boolean delete(int id);
    Optional<Medicamento> findById(int id);
    List <Medicamento> findAll();
    }