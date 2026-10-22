package com.example.FarmaStock.dao;

import com.example.FarmaStock.entities.Medicamento;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
public class MedicamentoDAOImpl implements MedicamentoDAO{
    private final EntityManager entityManager;

    public MedicamentoDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void save(Medicamento medicamento) {
        entityManager.persist(medicamento);
    }

    @Override
    @Transactional
    public Optional<Medicamento> update(Medicamento medicamento) {
        Optional<Medicamento> medicamentoToUpdate = this.findById(medicamento.getId());
        if (medicamentoToUpdate.isEmpty()) {
            return Optional.empty();
        }
        else   {
            return Optional.of(entityManager.merge(medicamento));

        }
    }

    @Override
    @Transactional
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
    public List<Medicamento> findAll() {
        TypedQuery<Medicamento> query;
        query = entityManager.createQuery("FROM Medicamento", Medicamento.class);
        return query.getResultList();
    }

}
