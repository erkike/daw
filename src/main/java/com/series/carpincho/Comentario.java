package com.series.carpincho;

public class Comentario {

	private String texto;
	private Usuario usuario;
	private long id = -1;
	private String display = "fixed";

	public Comentario() {

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

	public void setId(long id) {
		this.id = id;
		if (id > 3)
			this.display = "none";
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
