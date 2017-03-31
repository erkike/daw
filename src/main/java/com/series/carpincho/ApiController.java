package com.series.carpincho;

import org.springframework.beans.factory.annotation.Autowired;

public class ApiController {

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

}
