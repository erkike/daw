package com.series.carpincho;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuario, Long> {

	Usuario findByUser(String user);

	Usuario findById(long id);
}
