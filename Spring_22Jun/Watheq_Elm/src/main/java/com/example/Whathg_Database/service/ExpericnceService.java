package com.example.Whathg_Database.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.Whathg_Database.DTO.ExperienceDTO;
import com.example.Whathg_Database.Mapper_Imalmation.ExperienceLMP;
import com.example.Whathg_Database.model.Experience;
import com.example.Whathg_Database.repository.ExperienceRepository;
import com.example.Whathg_Database.repository.IndividualsRepository;

@Service
public class ExpericnceService {


	@Autowired
	ExperienceRepository experienceRepository;
	
	
	@Autowired
	IndividualsRepository indvRepository;
	
	private static final ExperienceLMP experienceLMP = new ExperienceLMP();

	
	public  ResponseEntity<Experience> createExperienceDTO(ExperienceDTO experienceDTO) {
		
		Experience experience = Experience.builder()
				  .eposition(experienceDTO.getEposition())
				  .nationalid(experienceDTO.getNationalid())
				.sdate(experienceDTO.getEdate())
				.edate(experienceDTO.getSdate())
				.addby(experienceDTO.getAddby())
				.companyname(experienceDTO.getCompanyname())
				.companyemail(experienceDTO.getCompanyemail())
	            .build();
		
		Experience saveExperience = experienceRepository.save(experience);
	     experienceLMP.domainToDto(saveExperience);
	     return new ResponseEntity<>(saveExperience, HttpStatus.CREATED);
	    
	    
	}
	
	public ResponseEntity<List<Experience>> getExperience(){
		
		 List<Experience> exp = new ArrayList<Experience>();
		 experienceRepository.findAll().forEach(exp::add);
	        return new ResponseEntity<>(exp , HttpStatus.OK);

		
	 }}
