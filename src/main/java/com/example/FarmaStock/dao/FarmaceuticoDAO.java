package com.example.FarmaStock.dao;

import com.example.FarmaStock.entities.Farmaceutico;
import com.example.FarmaStock.entities.Medicamento;
import java.util.List;

public interface FarmaceuticoDAO {
    void save(Farmaceutico theFarmaceutico);
    Farmaceutico findById(Long id);
    List<Farmaceutico> findAll();
    void update(Farmaceutico theFarmaceutico);
    void delete(Long id);
    List<Medicamento> findMedicamentosByFarmaceuticoId(Long id);
}

