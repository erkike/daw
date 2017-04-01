package com.series.carpincho;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fasterxml.jackson.annotation.JsonView;

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

	@JsonView(Serie.Basico.class)
	@GetMapping(value = "/series")
	public List<Serie> getSeries() {
		return series.findAll();
	}

	@JsonView(SerieDetalle.class)
	@GetMapping(value = "/serie/{id}")
	public ResponseEntity<Serie> getSerie(@PathVariable long id) {

		Serie serie = series.findOne(id);

		if (serie != null) {
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}
}
