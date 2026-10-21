/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.FarmaStock.rest;

import com.example.FarmaStock.dao.MedicamentoDAO;
import com.example.FarmaStock.entities.Medicamento;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("api")
public class MedicamentoRestController {
    private final MedicamentoDAO medicamentoDAO;

    public MedicamentoRestController(MedicamentoDAO medicamentoDAO) {
        this.medicamentoDAO = medicamentoDAO;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Medicamento create(@RequestBody Medicamento medicamento) {
        medicamentoDAO.save(medicamento);
        return medicamento;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public Medicamento update(@RequestBody Medicamento medicamento) {
        return medicamentoDAO.update(medicamento)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Medicamento> findAll() {
        return medicamentoDAO.findAll()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Medicamento findById(@RequestParam int id) {
        return medicamentoDAO.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@RequestParam int id) {
        medicamentoDAO.delete(id);
    }
}
