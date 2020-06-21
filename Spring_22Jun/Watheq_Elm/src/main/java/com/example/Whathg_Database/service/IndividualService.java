package com.example.Whathg_Database.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Whathg_Database.DTO.IndividualDTO;
import com.example.Whathg_Database.Error.NotFoundException;
import com.example.Whathg_Database.Mapper_Imalmation.IndivdualMappelamp;
import com.example.Whathg_Database.model.Individual;
import com.example.Whathg_Database.repository.IndividualsRepository;


import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
@Transactional
public class IndividualService {

	


@Autowired
IndividualsRepository individualRepository;
private static final IndivdualMappelamp individualMapper = new IndivdualMappelamp();


public Boolean  createIndividualDTO(IndividualDTO individualDTO) {
	Individual exist = individualRepository.findByEmail(individualDTO.getEmail());
	
	if (exist == null) {
	Individual individual = Individual.builder()
			.email(individualDTO.getEmail())
            .phone_number(individualDTO.getPhoneNumber())
            .address(individualDTO.getAddress())
            .password(individualDTO.getPassword())
            
            .nationalid(individualDTO.getNationalid())
            .firstname(individualDTO.getFirstname())
            .mname(individualDTO.getMname())
            .lastname(individualDTO.getLastname())
            .gender(individualDTO.getGender())
            .dob(individualDTO.getDob())
            .build();
	individualRepository.save(individual);
	return true;
} else {
	return false;
}   
}


public ResponseEntity<List<Individual>> getIndividuals(){
	 List<Individual> indi = new ArrayList<Individual>();
	 individualRepository.findAll().forEach(indi::add);
       return new ResponseEntity<>(indi , HttpStatus.OK);
	
}


public Individual getById(String Id) {
		try {
			return individualRepository.findById(Id).get();
		}
		catch (NoSuchElementException ex) {
			throw new NotFoundException(String.format("No Record with the id [%s] was found in our database", Id));
		}
	}

public  Individual saveIndividual(Individual individual) {
	
	return individualRepository.save(individual);
}

public Individual fetchIndividualByNationalId(String nationalid) {
	
	return individualRepository.findByNationalid(nationalid);
}


public Individual fetchIndividualByNationalIdAndPassword(String nationalid , String password) {
	
	return individualRepository.findByNationalidAndPassword(nationalid,password);
}





















}