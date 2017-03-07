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
		series.add(new Serie("Los-100", "descripcion de pruebas"));
		series.add(new Serie("Cacota", "sin descripcion"));
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
				model.addAttribute("comentarios", encontrada.getComentarios());
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

		// model.addAttribute("comentarios", comentarios);

		return "redirect:/{nombre}#comentarios";

	}

	@RequestMapping("/the100/capitulo1")
	public String capitulo(Model model) {
		return "Capitulo";
	}

	@RequestMapping("/perfil")
	public String perfil(Model model, Usuario u) {

		model.addAttribute("usuarios", usuarios);

		return "new_profile";
	}

	@RequestMapping("/perfil/editar")
	public String editar(Model model, Usuario u) {

		model.addAttribute("usuarios", usuarios);

		return "edit_profile";
	}
}
