package com.example.FarmaStock.rest;

import com.example.FarmaStock.dao.FarmaceuticoDAO;
import com.example.FarmaStock.entities.Farmaceutico;
import com.example.FarmaStock.entities.Medicamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api")
public class FarmaceuticoRestController {

    private FarmaceuticoDAO farmaceuticoDAO;

    @Autowired
    public FarmaceuticoRestController(FarmaceuticoDAO theFarmaceuticoDAO) {
        farmaceuticoDAO = theFarmaceuticoDAO;
    }

    @GetMapping("/farmaceuticos")
    @ResponseStatus(HttpStatus.OK)
    public List<Farmaceutico> findAll() {
        return farmaceuticoDAO.findAll();
    }

    @GetMapping("/farmaceuticos/{farmaceuticoId}")
    @ResponseStatus(HttpStatus.OK)
    public Farmaceutico getFarmaceutico(@PathVariable Long farmaceuticoId)
    {
        Farmaceutico farmaceutico = this.farmaceuticoDAO.findById(farmaceuticoId);
        if (farmaceutico == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return farmaceutico;
    }

    @PostMapping("/farmaceuticos")
    public Farmaceutico addFarmaceutico(@RequestBody Farmaceutico theFarmaceutico) {
        
        theFarmaceutico.setId(null);
        this.farmaceuticoDAO.save(theFarmaceutico);
        return theFarmaceutico;
    }

    @PutMapping("/farmaceuticos")
    public Farmaceutico updateFarmaceutico(@RequestBody Farmaceutico theFarmaceutico) {

        this.farmaceuticoDAO.update(theFarmaceutico);
        return theFarmaceutico;
    }

    @DeleteMapping("/farmaceuticos/{farmaceuticoId}")
    public String deleteFarmaceutico(@PathVariable Long farmaceuticoId) {

        Farmaceutico tempFarmaceutico = this.farmaceuticoDAO.findById(farmaceuticoId);

        if (tempFarmaceutico == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        this.farmaceuticoDAO.delete(farmaceuticoId);

        return "Deleted farmaceuticoId: " + farmaceuticoId;
    }

    @GetMapping("/farmaceuticos/{id}/medicamentos")
    public Map<String, Object> getFarmaceuticoWithMedicamentos(@PathVariable Long id) {
        Farmaceutico farmaceutico = farmaceuticoDAO.findById(id);
        if (farmaceutico == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        List<Medicamento> medicamentos = farmaceuticoDAO.findMedicamentosByFarmaceuticoId(id);

        Map<String, Object> response = new HashMap<>();
        response.put("farmaceutico", farmaceutico);
        response.put("medicamentos", medicamentos);
        return response;
    }
}
