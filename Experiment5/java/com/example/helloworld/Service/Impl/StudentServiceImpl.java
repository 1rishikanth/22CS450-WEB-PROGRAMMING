package com.example.helloworld.Service.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.helloworld.entity.Student;
import com.example.helloworld.repository.StudentRepository;
import com.example.helloworld.Service.StudentService;

@Service
public class StudentServiceImpl implements StudentService{
	
	private StudentRepository studentRepository;
	
	public StudentServiceImpl(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}
	
	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public Student updateStudent(Student student) {
		
		return studentRepository.save(student);
	}

	@Override
	public Student getStudent(Long id) {
		
		return studentRepository.findById(id).get();
	}
	
	@Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

	@Override
    public void deleteStudentById(Long id) {
        studentRepository.deleteById(id);
    }
	
	

}