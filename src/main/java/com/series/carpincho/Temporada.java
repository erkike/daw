package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;

public class Temporada {

	private int id;
	private List<Capitulo> capitulos = new ArrayList<>();

	public Temporada() {

	}

	public Temporada(int id, List<Capitulo> capitulos) {
		this.id = id;
		this.capitulos = capitulos;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Capitulo> getCapitulos() {
		return capitulos;
	}

	public void setCapitulos(List<Capitulo> capitulos) {
		this.capitulos = capitulos;
	}

}
