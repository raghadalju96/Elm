package com.example.Whathg_Database.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.Whathg_Database.DTO.EducationDTO;
import com.example.Whathg_Database.model.Education;
import com.example.Whathg_Database.repository.EducationRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EducationService {

	@Autowired
	EducationRepository educationRepository;
//private static final EducationlLMP educationlLMP = new EducationlLMP();

	public HashMap<String, Object> createEducationDTO(EducationDTO educationDTO) {

		HashMap<String, Object> rv = new HashMap<String, Object>();
		Education exist = educationRepository.findByEmail(educationDTO.getEmail());
		if (exist == null) {

			Education education = Education.builder()

					.email(educationDTO.getEmail()).phone_number(educationDTO.getPhoneNumber())
					.address(educationDTO.getAddress()).password(educationDTO.getPassword())
					.eduid(educationDTO.getEduid()).eduname(educationDTO.getEduname())
					.eduType(educationDTO.getEduType()).build();
			Education edu = educationRepository.save(education);
			rv.put("response", "ok");
		} else {
			rv.put("response", "error");
		}
		return rv;
	}

	public ResponseEntity<List<Education>> getEducations() {
		List<Education> edu = new ArrayList<Education>();
		educationRepository.findAll().forEach(edu::add);
		return new ResponseEntity<>(edu, HttpStatus.OK);

	}

	public Education saveEducation(Education education) {

		return educationRepository.save(education);
	}

	public Education fetchEducationByEmail(String email) {

		return educationRepository.findByEmail(email);
	}

	public Education fetchEducationByEmailAndPassword(String email, String password) {

		return educationRepository.findByEmailAndPassword(email, password);
	}

}
