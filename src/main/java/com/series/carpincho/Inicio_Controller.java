package com.series.carpincho;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Inicio_Controller {

	/*
	 * private List<Comentario> comentarios = new ArrayList<>(); private
	 * AtomicLong comentarioId = new AtomicLong(); private List<Usuario>
	 * usuarios = new ArrayList<>(); private List<Serie> series = new
	 * ArrayList<>();
	 */

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@PostConstruct
	public void init() {

		String descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.";
		Usuario carpinchote = new Usuario("Carpinchote");
		usuarios.save(carpinchote);

		Comentario caca = new Comentario("Vaya caca", carpinchote);

		Serie cien = new Serie("Los 100", descripcion);
		cien.getComentarios().add(caca);

		series.save(cien);
		series.save(new Serie("Breaking Bad", descripcion));
		series.save(new Serie("Juego de Tronos", descripcion));
		series.save(new Serie("Narcos", descripcion));
	}

	@RequestMapping("/")
	public String indice(Model model) {

		model.addAttribute("series", series.findAll());

		return "index";
	}

	@RequestMapping("/{id}")
	public String serie(Model model, @PathVariable long id) {

		model.addAttribute("serie", series.findOne(id));

		return "serie";
	}

	@RequestMapping("/{id}/comentarios")
	public String comentarios(Model model, Comentario comentario, @PathVariable long id) {

		if (!comentario.esVacio()) {
			Serie serie = series.findOne(id);
			comentario.setUsuario(usuarios.findOne((long) 1));
			serie.getComentarios().add(comentario);
			series.save(serie);
		}

		return "redirect:/{id}#comentarios";

	}

	@RequestMapping("/{id}/capitulo1")
	public String capitulo(Model model, @PathVariable long id) {
		return "capitulo";
	}

	@RequestMapping("/login")
	public String login(Model model) {

		return "login";
	}

	@RequestMapping("/perfil")
	public String perfil(Model model, Usuario u) {

		model.addAttribute("usuarios", usuarios);

		return "perfil";
	}

	/*
	 * @RequestMapping("/perfil/editar") public String editar(Model model,
	 * Usuario u) {
	 * 
	 * model.addAttribute("usuarios", usuarios);
	 * 
	 * return "editar-perfil"; }
	 */
}
