package com.example.Whathg_Database.repository;

import java.util.Optional;

import javax.transaction.Transactional;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Whathg_Database.model.ImageModel;


@Repository
@Transactional
public interface ImageModelRepository extends CrudRepository<ImageModel, Long>{ 
	
	Optional<ImageModel> findByName(String name);

}


