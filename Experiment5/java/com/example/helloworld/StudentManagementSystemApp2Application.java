package com.example.helloworld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.helloworld.entity.Student;
import com.example.helloworld.repository.StudentRepository;

@SpringBootApplication
public class StudentManagementSystemApp2Application implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementSystemApp2Application.class, args);
	}
	@Autowired
	private StudentRepository studentRepository;
	@Override
	public void run(String... args)throws Exception{
		/*Student student1 = new Student("firstname1","lastnamename1","name1@gmail.com");
		studentRepository.save(student1);
		Student student2 = new Student("firstname2","lastnamename2","name2@gmail.com");
		studentRepository.save(student2);
		Student student3 = new Student("firstname3","lastnamename3","name3@gmail.com");
		studentRepository.save(student3);
		*/
	}
}
