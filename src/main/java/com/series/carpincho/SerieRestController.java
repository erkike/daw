package com.series.carpincho;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class SerieRestController {

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

	interface SerieDetalle
			extends Serie.Basico, Serie.Concreto, Comentario.Basico, Usuario.Basico, Temporada.Basico, Capitulo.Basico {
	}

	@PostMapping(value = "/series/nueva")
	@ResponseStatus(HttpStatus.CREATED)
	public Serie nuevaSerie(@RequestBody Serie serie) {

		series.save(serie);

		return serie;
	}

	@JsonView(Serie.Basico.class)
	@GetMapping(value = "/series")
	public List<Serie> getSeries() {
		return series.findAll();
	}

	@JsonView(SerieDetalle.class)
	@GetMapping(value = "/series/{id}")
	public ResponseEntity<Serie> getSerie(@PathVariable long id) {

		Serie serie = series.findOne(id);

		if (serie != null) {
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/series/{id}")
	public ResponseEntity<Serie> borrarSerie(@PathVariable long id) {
		Serie serie = series.findOne(id);

		if (serie != null) {
			series.delete(serie);
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping(value = "/series/{id}")
	public ResponseEntity<Serie> modificarSerie(@PathVariable long id, @RequestBody Serie modificada) {
		Serie serie = series.findOne(id);

		if (serie != null) {
			series.save(modificada);
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}
}
