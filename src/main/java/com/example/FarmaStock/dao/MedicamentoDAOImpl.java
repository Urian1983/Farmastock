package com.example.FarmaStock.dao;

import com.example.FarmaStock.entities.Medicamento;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public class MedicamentoDAOImpl implements MedicamentoDAO{
    private final EntityManager entityManager;

    public MedicamentoDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void save(Medicamento medicamento) {
        entityManager.persist(medicamento);
    }

    @Override
    public Optional<Medicamento> update(Medicamento medicamento) {
        Optional<Medicamento> medicamentoToUpdate = this.findById(medicamento.getId());
        if (medicamentoToUpdate.isEmpty()) {
            return Optional.of(medicamento);
        }
        else   {
            return Optional.empty();
        }
    }

    @Override
    public boolean delete(int id) {
        Optional<Medicamento> medicamentoToRemove = this.findById(id);
        if(medicamentoToRemove.isPresent()) {
            entityManager.remove(medicamentoToRemove.get());
            return true;
        }
        return false;
    }

    @Override
    public Optional<Medicamento> findById(int id) {
        return Optional.ofNullable(entityManager.find(Medicamento.class, id));
    }

    @Override
    public Optional<List<Medicamento>> findAll() {
        TypedQuery<Medicamento> query;
        query = entityManager.createQuery("FROM Medicamento", Medicamento.class);
        return Optional.ofNullable(query.getResultList());
    }

}
