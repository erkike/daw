package com.series.carpincho;

import java.util.ArrayList;
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
	private SerieService service;

	@Autowired
	private UserComponent userComponent;

	interface SerieDetalle
			extends Serie.Basico, Serie.Concreto, Comentario.Basico, Usuario.Basico, Temporada.Basico, Capitulo.Basico {
	}

	@PostMapping(value = "/series")
	@ResponseStatus(HttpStatus.CREATED)
	public Serie nuevaSerie(@RequestBody Serie serie) {

		service.save(serie);

		return serie;
	}

	@JsonView(Serie.Basico.class)
	@GetMapping(value = "/series")
	public List<Serie> getSeries() {
		return service.findAll();
	}

	@JsonView(SerieDetalle.class)
	@GetMapping(value = "/series/{id}")
	public ResponseEntity<Serie> getSerie(@PathVariable long id) {

		Serie serie = service.findOne(id);

		if (serie != null) {
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(SerieDetalle.class)
	@DeleteMapping(value = "/series/{id}")
	public ResponseEntity<Serie> borrarSerie(@PathVariable long id) {
		Serie serie = service.findOne(id);

		if (serie != null) {
			service.delete(serie);
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(SerieDetalle.class)
	@PutMapping(value = "/series/{id}")
	public ResponseEntity<Serie> modificarSerie(@PathVariable long id, @RequestBody Serie modificada) {

		Serie serie = service.findOne(id);

		if (serie != null) {
			// List<Temporada> temporadas = serie.getTemporadas();
			// List<Comentario> comentarios = serie.getComentarios();
			// modificada.setComentarios(comentarios);
			// modificada.setTemporadas(temporadas);
			serie.setNombre(modificada.getNombre());
			serie.setDescripcion(modificada.getDescripcion());
			service.save(modificada);
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(SerieDetalle.class)
	@PutMapping(value = "/series/{id}/comentario")
	public ResponseEntity<Serie> comentarSerie(@PathVariable long id, @RequestBody Comentario comentario) {

		Serie serie = service.findOne(id);

		if (serie != null && !comentario.esVacio()) {
			if (userComponent.getLoggedUser() != null) {
				service.addComentario(serie, comentario);
				return new ResponseEntity<Serie>(serie, HttpStatus.OK);
			} else {
				return new ResponseEntity<Serie>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(SerieDetalle.class)
	@PutMapping(value = "/series/{id}/temporada/{num}/capitulo")
	public ResponseEntity<Serie> capituloSerie(@PathVariable long id, @PathVariable int num,
			@RequestBody Capitulo capitulo) {

		Serie serie = service.findOne(id);
		List<Temporada> lista = serie.getTemporadas();

		if (serie != null && capitulo != null) {
			int i = 0;
			for (Temporada tem : lista) {
				if (tem.getNum() == num) {
					tem.getCapitulos().add(capitulo);
				}
				i++;
			}
			if (num > i) {
				List<Capitulo> capitulos = new ArrayList<>();
				capitulos.add(capitulo);
				lista.add(new Temporada(capitulos, num));

			}
			serie.setTemporadas(lista);
			service.save(serie);
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(SerieDetalle.class)
	@PutMapping(value = "/series/{id}/valoracion/{val}")
	public ResponseEntity<Serie> valorarSerie(@PathVariable long id, @PathVariable int val) {

		Serie serie = service.findOne(id);

		if (serie != null && val <= 5 && val >= 0) {
			if (userComponent.getLoggedUser() != null) {
				serie.Valorar(val);
				service.save(serie);
				return new ResponseEntity<Serie>(serie, HttpStatus.OK);
			} else {
				return new ResponseEntity<Serie>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}
}
