/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.FarmaStock.dao;

import com.example.FarmaStock.entity.Client;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class ClientDAOImpl implements ClientDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Client> findAll() {
        return entityManager
                .createQuery("SELECT c FROM Client c", Client.class)
                .getResultList();
    }

    @Override
    public Client findById(Long id) {
        return entityManager.find(Client.class, id);
    }

    @Override
    public Client save(Client client) {
        entityManager.persist(client);
        return client;
    }

    @Override
    public Client update(Client client) {
        return entityManager.merge(client);
    }

    @Override
    public void deleteById(Long id) {
        Client client = entityManager.find(Client.class, id);

        if (client != null) {
            entityManager.remove(client);
        }
    }
}
