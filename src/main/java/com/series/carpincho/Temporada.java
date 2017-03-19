package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Temporada {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private int num;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Capitulo> capitulos = new ArrayList<>();

	public Temporada() {

	}

	public Temporada(List<Capitulo> capitulos, int num) {
		this.capitulos = capitulos;
		this.num = num;
	}

	public long getId() {
		return id;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public List<Capitulo> getCapitulos() {
		return capitulos;
	}

	public void setCapitulos(List<Capitulo> capitulos) {
		this.capitulos = capitulos;
	}

}
