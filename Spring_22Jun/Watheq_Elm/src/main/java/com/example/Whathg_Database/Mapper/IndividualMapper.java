package com.example.Whathg_Database.Mapper;



import com.example.Whathg_Database.DTO.IndividualDTO;
import com.example.Whathg_Database.model.Individual;



public interface IndividualMapper {


	Individual dtoToDomain(final IndividualDTO individual );

	IndividualDTO domainToDto(final Individual individual );
	
	

	
	

}