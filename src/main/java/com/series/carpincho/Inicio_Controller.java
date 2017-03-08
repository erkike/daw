package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Inicio_Controller {

	private List<Comentario> comentarios = new ArrayList<>();
	private AtomicLong comentarioId = new AtomicLong();
	private List<Usuario> usuarios = new ArrayList<>();
	private List<Serie> series = new ArrayList<>();

	public Inicio_Controller() {
		series.add(new Serie("Los-100",
				"'Los 100' es un drama post apocalíptico escrito por Jason Rothenberg (Body Politic), basado en los libros de Kass Morgan. La historia está centrada en lo que ocurre con la civilización casi cien años después de que una guerra nuclear la haya devastado."));
		series.add(new Serie("Cacota", "sin descripcion"));
		for (Serie serie : series) {
			for (int i = 1; i < 4; i++) {
				Temporada nueva = new Temporada(i, new ArrayList<>());
				List<Capitulo> capitulos = new ArrayList<>();
				for (int j = 1; j < 15; j++) {
					capitulos.add(new Capitulo(j, "Prueba"));
				}
				nueva.setCapitulos(capitulos);
				serie.añadirTemporada(nueva);
			}
		}
	}

	@RequestMapping("/")
	public String indice(Model model) {

		model.addAttribute("series", series);

		return "index";
	}

	@RequestMapping("/login")
	public String login(Model model) {

		return "login";
	}

	@RequestMapping("/{nombre}")
	public String the100(Model model, @PathVariable String nombre) {

		for (Serie busqueda : series) {
			if (busqueda.getNombre().equals(nombre)) {
				Serie encontrada = busqueda;
				model.addAttribute("serie", encontrada);
			}
		}

		return "serie";
	}

	@RequestMapping("/{nombre}/comentarios")
	public String comentarios(Model model, Comentario comentario, @PathVariable String nombre) {

		if (!comentario.esVacio()) {
			long id = comentarioId.incrementAndGet();
			comentario.setId(id);
			for (Serie busqueda : series) {
				if (busqueda.getNombre().equals(nombre)) {
					Serie encontrada = busqueda;
					encontrada.añadirComentario(comentario);
					model.addAttribute("comentarios", encontrada.getComentarios());
				}
			}
		}

		return "redirect:/{nombre}#comentarios";

	}

	@RequestMapping("/{nombre}/capitulo1")
	public String capitulo(Model model, @PathVariable String nombre) {
		return "capitulo";
	}

	@RequestMapping("/perfil")
	public String perfil(Model model, Usuario u) {

		model.addAttribute("usuarios", usuarios);

		return "perfil";
	}

	@RequestMapping("/perfil/editar")
	public String editar(Model model, Usuario u) {

		model.addAttribute("usuarios", usuarios);

		return "editar-perfil";
	}
}
