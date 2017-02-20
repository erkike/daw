package com.series.carpincho;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Inicio_Controller {
	
	@RequestMapping("/")
	public String indice(Model model){
		return "index";
	}
	
	@RequestMapping("/login")
	public String login(Model model){
		return "login";
	}
	
	@RequestMapping("/the100")
	public String the100(Model model){
		return "the100";
	}
	
	@RequestMapping("/capitulo")
	public String capitulo(Model model){
		return "Capitulo";
	}
	
	@RequestMapping("/perfil")
	public String perfil(Model model){
		return "perfil";
	}
	
	@RequestMapping("/editarPerfil")
	public String editar(Model model){
		return "edit_profile";
	}
}
