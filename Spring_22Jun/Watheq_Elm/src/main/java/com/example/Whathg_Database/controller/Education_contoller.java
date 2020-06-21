package com.example.Whathg_Database.controller;


import java.util.HashMap
;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Whathg_Database.DTO.EducationDTO;
import com.example.Whathg_Database.Error.ResourceNotFoundException;
import com.example.Whathg_Database.model.Education;
import com.example.Whathg_Database.repository.EducationRepository;
import com.example.Whathg_Database.service.EducationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class Education_contoller {

	@Autowired
	EducationService educationService;
	
	
	@Autowired
	EducationRepository educationRepository;

	@RequestMapping(method = RequestMethod.POST, path = "/educationsave")
	public ResponseEntity<?> process(@RequestBody EducationDTO eduInstitutionDTO) {
		HashMap<String, Object> rv = educationService.createEducationDTO(eduInstitutionDTO);
		return ResponseEntity.ok(rv);
	}

	@GetMapping("/education")
	public ResponseEntity<List<Education>> getEducation() {
		return educationService.getEducations();
	}

	@PostMapping("/registeredu")
	public Education registerEducation(@RequestBody Education education) throws Exception {

		String tempEmail = education.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			Education educationObject = educationService.fetchEducationByEmail(tempEmail);
			if (educationObject != null) {
				throw new Exception("Education with " + tempEmail + " is already exist");
			}
		}
		Education educationobject = null;
		educationobject = educationService.saveEducation(education);
		return educationobject;
	}

	@PostMapping("/loginedu")
	public Education loginEducation(@RequestBody Education education) throws Exception {

		String tempEmail = education.getEmail();
		String tempPass = education.getPassword();
		Education educationObj = null;
		if (tempEmail != null && tempPass != null) {

			educationObj = educationService.fetchEducationByEmailAndPassword(tempEmail, tempPass);

		}

		if (educationObj == null) {
			throw new Exception("Bad credentials");
		}

		return educationObj;
	}

	@DeleteMapping("/deleducation/{eduid}")
	public Map<String, Boolean> deleteEducation(@PathVariable(value = "eduid") int eduid) throws ResourceNotFoundException {
		Education education = educationRepository.findById(eduid)
				.orElseThrow(() -> new ResourceNotFoundException("Comany not found for this eduid :: " + eduid));

		educationRepository.delete(education);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@DeleteMapping("/deleducationall/")
	public String deleducationall() {

		educationRepository.deleteAll();

		return "done ";
	}
	
	
	
	
	
	
	
	

}