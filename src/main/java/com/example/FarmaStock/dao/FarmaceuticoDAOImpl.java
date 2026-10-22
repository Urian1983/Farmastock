package com.example.FarmaStock.dao;

import com.example.FarmaStock.entities.Farmaceutico;
import com.example.FarmaStock.entities.Medicamento;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class FarmaceuticoDAOImpl implements FarmaceuticoDAO {

    private EntityManager entityManager;

    @Autowired
    public FarmaceuticoDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void save(Farmaceutico theFarmaceutico) {
        this.entityManager.persist(theFarmaceutico);
    }

    @Override
    public Farmaceutico findById(Long id) {
        return this.entityManager.find(Farmaceutico.class, id);
    }

    @Override
    public List<Farmaceutico> findAll() {
        TypedQuery<Farmaceutico> theQuery = entityManager.createQuery("FROM Farmaceutico", Farmaceutico.class);
        return theQuery.getResultList();
    }

    @Override
    @Transactional
    public void update(Farmaceutico theFarmaceutico) {
        entityManager.merge(theFarmaceutico);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Farmaceutico farmaceutico = this.entityManager.find(Farmaceutico.class, id);
        if (farmaceutico != null) {
            entityManager.remove(farmaceutico);
        }
    }

    @Override
    public List<Medicamento> findMedicamentosByFarmaceuticoId(Long id) {
        Query query = entityManager.createNativeQuery(
                "SELECT * FROM medicamento WHERE farmaceutico_id = :theFarmaceuticoId", Medicamento.class);
        query.setParameter("theFarmaceuticoId", id);
        return query.getResultList();
    }
}