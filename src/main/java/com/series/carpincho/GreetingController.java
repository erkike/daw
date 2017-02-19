package com.series.carpincho;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class GreetingController {
	@RequestMapping("/")
	public String greeting(Model model) {
	return "index";
	}
}
