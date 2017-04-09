package com.series.carpincho;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SerieWebController {
	
	@Autowired
	private SerieService service;
	@Autowired
	private UsuarioService uService;

	@Autowired
	private UserComponent userComponent;

	@RequestMapping("/")
	public String indice(Model model, @PageableDefault(value = 8) Pageable page) {
		//model.addAttribute("series", service.findAll());
		Page<Serie> paginas = service.findAll(page);

		model.addAttribute("series", paginas);		
		model.addAttribute("siguiente", !paginas.isLast());
		model.addAttribute("numero", paginas.getNumberOfElements());
		model.addAttribute("next", paginas.getNumberOfElements() + 8);

		return "index";
	}

	@RequestMapping("/{url}")
	public String serie(Model model, @PathVariable String url) {

		model.addAttribute("serie", service.findByUrl(url));

		String[] valoracion = { "desmarcado", "desmarcado", "desmarcado", "desmarcado", "desmarcado" };
		for (int i = 0; i < service.findByUrl(url).getValoracion(); i++) {
			valoracion[i] = "marcado";
		}
		model.addAttribute("valoraciones", valoracion);

		String favorito = "nofavorito";
		if (userComponent.getLoggedUser() != null) {
			if (uService.findByUser(userComponent.getLoggedUser().getUser()).getSeriesFavoritas() 
					.contains(service.findByUrl(url))) {
				favorito = "favorito";
			}
		}
		model.addAttribute("favorito", favorito);

		return "serie";
	}

	@RequestMapping("/{url}/comentarios")
	public String comentarios(Model model, Comentario comentario, @PathVariable String url) {

		if (!comentario.esVacio()) {
			Serie serie = service.findByUrl(url);
			service.addComentario(serie, comentario);
		}

		return "redirect:/{url}#comentarios";

	}

	@RequestMapping("/{url}/valoracion")
	public String valoracion(Model model, int n, @PathVariable String url) {

		Serie serie = service.findByUrl(url);
		serie.Valorar(n);
		service.save(serie);
		String[] valoracion = { "desmarcado", "desmarcado", "desmarcado", "desmarcado", "desmarcado" };
		for (int i = 0; i < service.findByUrl(url).getValoracion(); i++) {
			valoracion[i] = "marcado";
		}
		model.addAttribute("valoraciones", valoracion);

		return "redirect:/{url}#informacion";

	}

	@RequestMapping("/{url}/favorito")
	public String favorito(Model model, @PathVariable String url) {

		if (userComponent.getLoggedUser() != null) {
			Usuario usuario = uService.findByUser(userComponent.getLoggedUser().getUser()); 
			Serie serie = service.findByUrl(url);
			if (usuario.getSeriesFavoritas().contains(serie)) {
				usuario.getSeriesFavoritas().remove(serie);
			} else {
				usuario.getSeriesFavoritas().add(serie);
			}
			uService.save(usuario);								
			userComponent.setLoggedUser(usuario);
		}

		return "redirect:/{url}#informacion";

	}
}
