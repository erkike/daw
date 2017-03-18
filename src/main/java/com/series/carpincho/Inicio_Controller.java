package com.series.carpincho;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Inicio_Controller {

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

	@PostConstruct
	public void init() {
		String descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.";
		Usuario carpinchote = new Usuario("Enrique", "Carpinchote", "budweisert0102@gmail.com", "pass");
		Usuario carpinchi = new Usuario("Carpinchi");
		Usuario carpancha = new Usuario("Carpancha");

		List<Capitulo> capitulos = new ArrayList<Capitulo>();
		capitulos.add(new Capitulo("Piloto"));
		capitulos.add(new Capitulo("Earth Skills"));
		capitulos.add(new Capitulo("Earth Kills"));
		capitulos.add(new Capitulo("Murphy's Law"));
		capitulos.add(new Capitulo("Twilight's Last Gleaming"));
		capitulos.add(new Capitulo("His Sister's Keeper"));
		capitulos.add(new Capitulo("Contents Under Pressure"));
		capitulos.add(new Capitulo("Day Trip"));
		capitulos.add(new Capitulo("Unity Day"));
		capitulos.add(new Capitulo("I Am Become Death"));
		capitulos.add(new Capitulo("The Calm"));
		capitulos.add(new Capitulo("We Are Grounders - Part 1"));
		capitulos.add(new Capitulo("We Are Grounders - Part 2"));
		Temporada uno = new Temporada(capitulos);
		List<Capitulo> capitulosdos = new ArrayList<Capitulo>();
		capitulosdos.add(new Capitulo("The 48"));
		capitulosdos.add(new Capitulo("Inclement Weather"));
		capitulosdos.add(new Capitulo("Reapercussions"));
		capitulosdos.add(new Capitulo("Many Happy Returns"));
		capitulosdos.add(new Capitulo("Human Trials"));
		capitulosdos.add(new Capitulo("Fog of War"));
		capitulosdos.add(new Capitulo("Long Into an Abyss"));
		capitulosdos.add(new Capitulo("Spacewalker"));
		capitulosdos.add(new Capitulo("Remember Me"));
		capitulosdos.add(new Capitulo("Survival of the Fittest"));
		capitulosdos.add(new Capitulo("Coup de Grace"));
		capitulosdos.add(new Capitulo("Rubicon"));
		capitulosdos.add(new Capitulo("Resurrection"));
		capitulosdos.add(new Capitulo("Bodyguard of Lies"));
		capitulosdos.add(new Capitulo("Blood Must Have Blood - Part 1"));
		capitulosdos.add(new Capitulo("Blood Must Have Blood - Part 2"));
		Temporada dos = new Temporada(capitulosdos);

		usuarios.save(carpinchote);
		usuarios.save(carpinchi);
		usuarios.save(carpancha);
		//carpinchote.getAmigos().add(carpinchi);
		carpinchote.getAmigos().add(carpancha);

		Comentario caca = new Comentario("Vaya caca", carpinchote);
		Comentario buena = new Comentario("wowowowowwowowowowowowowwowo", carpinchi);

		Serie cien = new Serie("Los 100", descripcion, 5, 2014, "https://www.youtube.com/embed/ia1Fbg96vL0");
		cien.getComentarios().add(caca);
		cien.getComentarios().add(buena);
		cien.getTemporadas().add(uno);
		cien.getTemporadas().add(dos);
		Serie juegoTronos = new Serie("Juego de Tronos", descripcion, 4, 2011,
				"https://www.youtube.com/embed/iGp_N3Ir7Do");
		series.save(cien);
		series.save(new Serie("Breaking Bad", descripcion, 4, 2008, "https://www.youtube.com/embed/ceqOTZnhgY8"));
		series.save(juegoTronos);
		series.save(new Serie("Narcos", descripcion, 3, 2015, "https://www.youtube.com/embed/U7elNhHwgBU"));
		series.save(new Serie("Westworld", descripcion, 2, 2016, "https://www.youtube.com/embed/IuS5huqOND4"));
		series.save(new Serie("Shameless", descripcion, 5, 2011, "https://www.youtube.com/embed/nu9mslgDcR4"));
		series.save(new Serie("The Wire", descripcion, 5, 2002, "https://www.youtube.com/embed/apZQlqPp6Hs"));
		series.save(new Serie("El último hombre en la tierra", descripcion, 3, 2015,
				"https://www.youtube.com/embed/xf0YgnV0mdg"));
		series.save(new Serie("Arrow", descripcion, 2, 2012, "https://www.youtube.com/embed/XQS7JkQmlx8"));
		series.save(new Serie("Big Bang Theory", descripcion, 3, 2012, "https://www.youtube.com/embed/WBb3fojgW0Q"));
		series.save(new Serie("Los Simpsons", descripcion, 4, 1989, "https://www.youtube.com/embed/DX1iplQQJTo"));
		series.save(new Serie("Padre de familia", descripcion, 4, 1999, "https://www.youtube.com/embed/HhAN-L0EzCI"));
		series.save(new Serie("Vikings", descripcion, 4, 2013, "https://www.youtube.com/embed/KxMBNLgUamk"));
		series.save(new Serie("Black Mirror", descripcion, 5, 2011, "https://www.youtube.com/embed/jROLrhQkK78"));
		series.save(new Serie("Sherlock", descripcion, 5, 2010, "https://www.youtube.com/embed/FOXZgRTfSUA"));
		series.save(new Serie("Cómo conocí a vuestra madre", descripcion, 3, 2005,
				"https://www.youtube.com/embed/ZPLOsabhQSM"));
		series.save(new Serie("Daredevil", descripcion, 3, 2015, "https://www.youtube.com/embed/jAy6NJ_D5vU"));
		series.save(new Serie("Los Soprano", descripcion, 4, 1999, "https://www.youtube.com/embed/RLxSUKA--Dg"));
		series.save(new Serie("The walking dead", descripcion, 4, 2010, "https://www.youtube.com/embed/O4xrJ_r6PUs"));
		series.save(new Serie("True detective", descripcion, 4, 2014, "https://www.youtube.com/embed/Xyu_MdKBXic"));
		series.save(new Serie("Utopia", descripcion, 4, 2013, "https://www.youtube.com/embed/uJnN3WMwDsk"));

		carpinchote.getSeriesFavoritas().add(cien);
		carpinchote.getSeriesFavoritas().add(juegoTronos);
		usuarios.save(carpinchote);

	}

	@RequestMapping("/")
	public String indice(Model model, @PageableDefault(value = 8) Pageable page) {

		Page<Serie> paginas = series.findAll(page);

		model.addAttribute("series", paginas);
		model.addAttribute("siguiente", !paginas.isLast());
		model.addAttribute("numero", paginas.getNumberOfElements());
		model.addAttribute("next", paginas.getNumberOfElements() + 8);

		return "index";
	}

	@RequestMapping("/{url}")
	public String serie(Model model, @PathVariable String url) {

		model.addAttribute("serie", series.findByUrl(url));

		String[] valoracion = { "desmarcado", "desmarcado", "desmarcado", "desmarcado", "desmarcado" };
		for (int i = 0; i < series.findByUrl(url).getValoracion(); i++) {
			valoracion[i] = "marcado";
		}
		model.addAttribute("valoraciones", valoracion);

		String favorito = "nofavorito";
		if (userComponent.getLoggedUser() != null) {
			if (usuarios.findByUser(userComponent.getLoggedUser().getUser()).getSeriesFavoritas()
					.contains(series.findByUrl(url))) {
				favorito = "favorito";
			}
		}
		model.addAttribute("favorito", favorito);

		return "serie";
	}

	@RequestMapping("/{url}/comentarios")
	public String comentarios(Model model, Comentario comentario, @PathVariable String url) {

		if (!comentario.esVacio()) {
			Serie serie = series.findByUrl(url);
			comentario.setUsuario(userComponent.getLoggedUser());
			serie.getComentarios().add(comentario);
			series.save(serie);
		}

		return "redirect:/{url}#comentarios";

	}

	@RequestMapping("/{url}/valoracion")
	public String valoracion(Model model, int n, @PathVariable String url) {

		Serie serie = series.findByUrl(url);
		serie.Valorar(n);
		series.save(serie);
		String[] valoracion = { "desmarcado", "desmarcado", "desmarcado", "desmarcado", "desmarcado" };
		for (int i = 0; i < series.findByUrl(url).getValoracion(); i++) {
			valoracion[i] = "marcado";
		}
		model.addAttribute("valoraciones", valoracion);

		return "redirect:/{url}#informacion";

	}

	@RequestMapping("/{url}/favorito")
	public String favorito(Model model, @PathVariable String url) {

		if (userComponent.getLoggedUser() != null) {
			Usuario usuario = usuarios.findByUser(userComponent.getLoggedUser().getUser());
			Serie serie = series.findByUrl(url);
			if (usuario.getSeriesFavoritas().contains(serie)) {
				usuario.getSeriesFavoritas().remove(serie);
			} else {
				usuario.getSeriesFavoritas().add(serie);
			}

			usuarios.save(usuario);
			userComponent.setLoggedUser(usuario);
		}

		return "redirect:/{url}#informacion";

	}

	@RequestMapping("/registro")
	public String registro(Model model, Usuario usuario) {

		usuarios.save(usuario);

		return "redirect:/";
	}

	@RequestMapping("/admin")
	public String admin(Model model) {

		List<Serie> lista = series.findAll();
		Collections.sort(lista, new Serie());

		model.addAttribute("series", lista);

		return "admin";
	}

	@RequestMapping("/admin/publicar")
	public String publicar(Model model, Serie serie) {

		series.save(serie);

		return "redirect:/admin";
	}

	@RequestMapping("/login")
	public String login(Model model) {

		return "login";
	}

	@RequestMapping("/perfil")
	public String usuario(Model model) {

		if (userComponent.getLoggedUser() == null) {
			return "login";
		} else {
			model.addAttribute("usuario", usuarios.findByUser(userComponent.getLoggedUser().getUser()));

			return "perfil";
		}
	}

	@RequestMapping("/perfil/editar")
	public String editar(Model model, Usuario u) {

		model.addAttribute("usuario", usuarios.findByUser(userComponent.getLoggedUser().getUser()));

		return "editar-perfil";
	}

	@RequestMapping("/perfil/editar/guardar")
	public String guardar(Model model, Usuario usuario) {

		usuarios.save(usuario);

		return "redirect:/perfil";
	}
	@RequestMapping("/perfil/buscar")
	public String buscar(Model model, String user) {

		if (userComponent.getLoggedUser() != null) {
			Usuario usuario = usuarios.findByUser(userComponent.getLoggedUser().getUser());
			Usuario amigo = usuarios.findByUser(user);
			if (usuario.getAmigos().contains(amigo)) {
				usuario.getAmigos().remove(amigo);
			} else {
				usuario.getAmigos().add(amigo);
			}

			usuarios.save(usuario);
			userComponent.setLoggedUser(usuario);
		}

		return "redirect:/perfil";
	}
}
