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

    @PostMapping("/medicamentos")
    @ResponseStatus(HttpStatus.CREATED)
    public Medicamento create(@RequestBody Medicamento medicamento) {
        medicamentoDAO.save(medicamento);
        return medicamento;
    }

    @PutMapping("/medicamentos")
    @ResponseStatus(HttpStatus.OK)
    public Medicamento update(@RequestBody Medicamento medicamento) {
        return medicamentoDAO.update(medicamento)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/medicamentos")
    @ResponseStatus(HttpStatus.OK)
    public List<Medicamento> findAll() {
        List<Medicamento> medicamentos = medicamentoDAO.findAll();
        if(medicamentos.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return medicamentos;
    }

    @GetMapping("/medicamentos/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Medicamento findById(@PathVariable int id) {
        return medicamentoDAO.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/medicamentos/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable int id) {
        medicamentoDAO.delete(id);
    }
}
