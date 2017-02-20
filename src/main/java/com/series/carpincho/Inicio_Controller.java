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
}
