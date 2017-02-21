package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Inicio_Controller {
	
	private List<Comentario> comentarios = new ArrayList<>();
	
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
		
		model.addAttribute("comentarios", comentarios);
		
		return "the100";
	}
	
	@RequestMapping("/the100/comentarios")
	public String comentarios(Model model, Comentario comentario){
		
		comentarios.add(comentario);
		
		//model.addAttribute("comentarios", comentarios);
		
		return "redirect:/the100#comentarios";
		
	}
	
	@RequestMapping("/the100/capitulo1")
	public String capitulo(Model model){
		return "Capitulo";
	}
	
	@RequestMapping("/perfil")
    public String perfil(Model model,Usuario u){
        
        model.addAttribute("usuario",u.getUsuario());
        return "new_profile";
    }
    
    @RequestMapping("/perfil/editar")
    public String editar(Model model,Usuario u){
        model.addAttribute("nombre",u.getNombre());
        model.addAttribute("apellido",u.getApellido());
        model.addAttribute("email",u.getEmail());
        model.addAttribute("usuario",u.getUsuario());
        //List<String> fecha= Arrays.asList("01","01","1999");
        model.addAttribute("fecha",u.getFecha());
        return "edit_profile";
    }
}
