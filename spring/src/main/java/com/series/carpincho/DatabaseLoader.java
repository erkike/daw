package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader {

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@PostConstruct
	public void init() {
		String descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.";
		Usuario carpinchote = new Usuario("Enrique", "Carpinchote", "budweisert0102@gmail.com", "pass", "ROLE_USER");
		Usuario carpinchi = new Usuario("Carpinchi");
		Usuario admin = new Usuario("Administrador", "admin", "admin@carpincheria.es", "admin", "ROLE_USER",
				"ROLE_ADMIN");
		Usuario carpancha = new Usuario("Carpancha");
		Usuario prueba = new Usuario("Para borrar en la prueba");

		List<Capitulo> capitulos = new ArrayList<Capitulo>();
		capitulos.add(new Capitulo("Piloto", 1));
		capitulos.add(new Capitulo("Earth Skills", 2));
		capitulos.add(new Capitulo("Earth Kills", 3));
		capitulos.add(new Capitulo("Murphy's Law", 4));
		capitulos.add(new Capitulo("Twilight's Last Gleaming", 5));
		capitulos.add(new Capitulo("His Sister's Keeper", 6));
		capitulos.add(new Capitulo("Contents Under Pressure", 7));
		capitulos.add(new Capitulo("Day Trip", 8));
		capitulos.add(new Capitulo("Unity Day", 9));
		capitulos.add(new Capitulo("I Am Become Death", 10));
		capitulos.add(new Capitulo("The Calm", 11));
		capitulos.add(new Capitulo("We Are Grounders - Part 1", 12));
		capitulos.add(new Capitulo("We Are Grounders - Part 2", 13));
		Temporada uno = new Temporada(capitulos, 1);
		List<Capitulo> capitulosdos = new ArrayList<Capitulo>();
		capitulosdos.add(new Capitulo("The 48", 1));
		capitulosdos.add(new Capitulo("Inclement Weather", 2));
		capitulosdos.add(new Capitulo("Reapercussions", 3));
		capitulosdos.add(new Capitulo("Many Happy Returns", 4));
		capitulosdos.add(new Capitulo("Human Trials", 5));
		capitulosdos.add(new Capitulo("Fog of War", 6));
		capitulosdos.add(new Capitulo("Long Into an Abyss", 7));
		capitulosdos.add(new Capitulo("Spacewalker", 8));
		capitulosdos.add(new Capitulo("Remember Me", 9));
		capitulosdos.add(new Capitulo("Survival of the Fittest", 10));
		capitulosdos.add(new Capitulo("Coup de Grace", 11));
		capitulosdos.add(new Capitulo("Rubicon", 12));
		capitulosdos.add(new Capitulo("Resurrection", 13));
		capitulosdos.add(new Capitulo("Bodyguard of Lies", 14));
		capitulosdos.add(new Capitulo("Blood Must Have Blood - Part 1", 15));
		capitulosdos.add(new Capitulo("Blood Must Have Blood - Part 2", 16));
		Temporada dos = new Temporada(capitulosdos, 2);

		usuarios.save(carpinchote);
		usuarios.save(carpinchi);
		usuarios.save(admin);
		usuarios.save(carpancha);
		usuarios.save(prueba);

		// carpinchote.getAmigos().add(carpinchi);
		carpinchote.getAmigos().add(carpancha);

		Comentario caca = new Comentario("Esta serie es mi favorita, porque es la última que he visto", carpinchote);
		Comentario buena = new Comentario("Me gustó más el libro", carpinchi);

		Serie cien = new Serie("Los 100",
				"En un futuro post apocalíptico, 97 años después de un desastre nuclear que destruyó la civilización, los humanos que sobreviven en una estación espacial envían una avanzadilla de 100 jóvenes delincuentes para tratar de averiguar si es posible reconquistar la Tierra.",
				5, 2014, "https://www.youtube.com/embed/ia1Fbg96vL0");
		cien.getComentarios().add(caca);
		cien.getComentarios().add(buena);
		cien.getTemporadas().add(uno);
		cien.getTemporadas().add(dos);
		Serie juegoTronos = new Serie("Juego de Tronos",
				"En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario Muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los Reinos, la sangrienta batalla por el Trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece Juego de Tronos.",
				4, 2011, "https://www.youtube.com/embed/iGp_N3Ir7Do");
		series.save(cien);
		series.save(new Serie("Breaking Bad",
				"Tras cumplir 50 años, Walter White, un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler y con un hijo discapacitado, la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno, fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.",
				4, 2008, "https://www.youtube.com/embed/ceqOTZnhgY8"));
		series.save(juegoTronos);
		series.save(new Serie("Narcos",
				"La verdadera historia de los poderosos y violentos cárteles colombianos sirve de hilo conductor en esta serie dramática de mafiosos de gran realismo.",
				3, 2015, "https://www.youtube.com/embed/U7elNhHwgBU"));
		series.save(new Serie("Westworld",
				"Westworld es la nueva serie de ciencia ficción de HBO que narra una oscura odisea sobre el amanecer de la conciencia artificial y el futuro del pecado. La serie cuenta la historia de un parque temático futurista llamado Westworld donde los turistas pueden satisfacer todos sus deseos sin temer la revancha de los habitantes del parque.",
				2, 2016, "https://www.youtube.com/embed/IuS5huqOND4"));
		series.save(new Serie("Misfits",
				"Misfits cuenta la historia de cinco problemáticos chicos adolescentes que cumplen con servicios a la comunidad por actos vandálicos. Durante una tormenta, el grupo es alcanzado por un rayo y adquieren poderes especiales. A pesar de que su vida continua con normalidad, pronto sus nuevos poderes alterarán el transcurso de los acontecimientos.",
				4, 2009, "https://www.youtube.com/embed/VsBYXLYNZlE"));
		series.save(
				new Serie("Cyanide & Happiness", descripcion, 5, 2014, "https://www.youtube.com/embed/i7b7N3leRQU"));
		series.save(new Serie("Shameless", descripcion, 5, 2011, "https://www.youtube.com/embed/nu9mslgDcR4"));
		series.save(new Serie("The Wire", descripcion, 5, 2002, "https://www.youtube.com/embed/apZQlqPp6Hs"));
		series.save(new Serie("Arrow", descripcion, 2, 2012, "https://www.youtube.com/embed/XQS7JkQmlx8"));
		series.save(new Serie("Big Bang Theory", descripcion, 3, 2012, "https://www.youtube.com/embed/WBb3fojgW0Q"));
		series.save(new Serie("Los Simpsons", descripcion, 4, 1989, "https://www.youtube.com/embed/DX1iplQQJTo"));
		series.save(new Serie("Padre de familia", descripcion, 4, 1999, "https://www.youtube.com/embed/HhAN-L0EzCI"));
		series.save(new Serie("Vikings", descripcion, 4, 2013, "https://www.youtube.com/embed/KxMBNLgUamk"));
		series.save(new Serie("Black Mirror", descripcion, 5, 2011, "https://www.youtube.com/embed/jROLrhQkK78"));
		series.save(new Serie("Sherlock", descripcion, 5, 2010, "https://www.youtube.com/embed/FOXZgRTfSUA"));
		series.save(new Serie("Daredevil", descripcion, 3, 2015, "https://www.youtube.com/embed/jAy6NJ_D5vU"));
		series.save(new Serie("Los Soprano", descripcion, 4, 1999, "https://www.youtube.com/embed/RLxSUKA--Dg"));
		series.save(new Serie("The walking dead", descripcion, 4, 2010, "https://www.youtube.com/embed/O4xrJ_r6PUs"));
		series.save(new Serie("True detective", descripcion, 4, 2014, "https://www.youtube.com/embed/Xyu_MdKBXic"));
		// series.save(new Serie("Utopia", descripcion, 4, 2013,
		// "https://www.youtube.com/embed/uJnN3WMwDsk"));

		carpinchote.getSeriesFavoritas().add(cien);
		carpinchote.getSeriesFavoritas().add(juegoTronos);
		usuarios.save(carpinchote);

	}
}
