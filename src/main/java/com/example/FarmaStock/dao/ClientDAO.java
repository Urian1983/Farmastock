/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.FarmaStock.dao;

import com.example.FarmaStock.entity.Client;
import java.util.List;

public interface ClientDAO {
    List<Client> findAll();

    Client findById(Long id);

    Client save(Client client);

    Client update(Client client);

    void deleteById(Long id);
}
