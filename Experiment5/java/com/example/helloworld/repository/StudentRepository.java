package com.example.helloworld.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.helloworld.entity.Student;

public interface StudentRepository extends JpaRepository<Student,Long> {
	void deleteById(Long id);
}