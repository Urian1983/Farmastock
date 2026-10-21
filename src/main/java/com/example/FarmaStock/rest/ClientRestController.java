/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.FarmaStock.rest;

import com.example.FarmaStock.dao.ClientDAO;
import com.example.FarmaStock.entities.Client;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clients")
public class ClientRestController {
    
    private final ClientDAO clientDAO;

    public ClientRestController(ClientDAO clientDAO) {
        this.clientDAO = clientDAO;
    }

    // Obtener todos los clientes
    @GetMapping
    public List<Client> findAll() {
        return clientDAO.findAll();
    }

    // Buscar cliente por ID
    @GetMapping("/{id}")
    public ResponseEntity<Client> findById(@PathVariable Long id) {
        Client client = clientDAO.findById(id);

        if (client == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(client);
    }

    // Crear un cliente
    @PostMapping
    public ResponseEntity<Client> save(@RequestBody Client client) {
        Client nuevoCliente = clientDAO.save(client);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(nuevoCliente);
    }

    // Actualizar un cliente
    @PutMapping("/{id}")
    public ResponseEntity<Client> update(
            @PathVariable Long id,
            @RequestBody Client client) {

        Client existente = clientDAO.findById(id);

        if (existente == null) {
            return ResponseEntity.notFound().build();
        }

        client.setId(id);

        Client actualizado = clientDAO.update(client);

        return ResponseEntity.ok(actualizado);
    }

    // Eliminar un cliente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        Client existente = clientDAO.findById(id);

        if (existente == null) {
            return ResponseEntity.notFound().build();
        }

        clientDAO.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
