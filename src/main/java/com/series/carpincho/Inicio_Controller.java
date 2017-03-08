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

		Usuario carpinchote = new Usuario("Carpinchote");
		usuarios.save(carpinchote);

		Comentario caca = new Comentario("Vaya caca", carpinchote);

		Serie cien = new Serie("Los-100", "XXXX");
		cien.getComentarios().add(caca);

		series.save(cien);
		series.save(new Serie("Cacota", "Hola caracola"));
	}

	/*
	 * public Inicio_Controller() { series.add(new Serie("Los-100",
	 * "'Los 100' es un drama post apocalíptico escrito por Jason Rothenberg (Body Politic), basado en los libros de Kass Morgan. La historia está centrada en lo que ocurre con la civilización casi cien años después de que una guerra nuclear la haya devastado."
	 * )); series.add(new Serie("Cacota", "sin descripcion")); for (Serie serie
	 * : series) { for (int i = 1; i < 4; i++) { Temporada nueva = new
	 * Temporada(i, new ArrayList<>()); List<Capitulo> capitulos = new
	 * ArrayList<>(); for (int j = 1; j < 15; j++) { capitulos.add(new
	 * Capitulo(j, "Prueba")); } nueva.setCapitulos(capitulos);
	 * serie.añadirTemporada(nueva); } } }
	 */

	@RequestMapping("/")
	public String indice(Model model) {

		model.addAttribute("series", series.findAll());

		return "index";
	}

	@RequestMapping("/login")
	public String login(Model model) {

		return "login";
	}

	@RequestMapping("/{id}")
	public String the100(Model model, @PathVariable long id) {

		Serie serie = series.findOne(id);

		model.addAttribute("serie", serie);

		return "serie";
	}

	@RequestMapping("/{id}/comentarios")
	public String comentarios(Model model, Comentario comentario, @PathVariable long id) {

		if (!comentario.esVacio()) {
			comentario.setUsuario(usuarios.findOne((long) 1));
			series.findOne(id).getComentarios().add(comentario);
			series.save(series.findOne(id));
		}

		return "redirect:/{id}#comentarios";

	}

	@RequestMapping("/{id}/capitulo1")
	public String capitulo(Model model, @PathVariable long id) {
		return "capitulo";
	}

	/*
	 * @RequestMapping("/perfil") public String perfil(Model model, Usuario u) {
	 * 
	 * model.addAttribute("usuarios", usuarios);
	 * 
	 * return "perfil"; }
	 * 
	 * @RequestMapping("/perfil/editar") public String editar(Model model,
	 * Usuario u) {
	 * 
	 * model.addAttribute("usuarios", usuarios);
	 * 
	 * return "editar-perfil"; }
	 */
}
