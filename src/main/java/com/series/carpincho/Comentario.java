package com.series.carpincho;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.annotations.Type;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Comentario {

	interface Basico {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@JsonView(Basico.class)
	@Type(type = "org.hibernate.type.TextType")
	private String texto;

	@JsonView(Basico.class)
	@OneToOne
	private Usuario usuario;

	public Comentario() {

	}

	public Comentario(String texto, Usuario usuario) {
		this.texto = texto;
		this.usuario = usuario;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public long getId() {
		return id;
	}

	public boolean esVacio() {
		return (this.texto == null || this.texto.trim().isEmpty());
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

}
