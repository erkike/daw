package com.series.carpincho;

public class Comentario {

	private String texto;

	public Comentario() {

	}

	public Comentario(String texto) {
		this.texto = texto;
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
