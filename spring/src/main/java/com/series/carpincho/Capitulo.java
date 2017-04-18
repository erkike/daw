package com.series.carpincho;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Capitulo {

	interface Basico {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@JsonView(Basico.class)
	private String titulo;
	@JsonView(Basico.class)
	private int num;

	public Capitulo() {

	}

	public Capitulo(String titulo, int num) {
		this.titulo = titulo;
		this.num = num;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public long getId() {
		return id;
	}

}
