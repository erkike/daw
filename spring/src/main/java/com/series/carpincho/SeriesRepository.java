package com.series.carpincho;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SeriesRepository extends JpaRepository<Serie, Long> {

	Serie findByUrl(String url);

	Serie findByNombre(String nombre);
}
