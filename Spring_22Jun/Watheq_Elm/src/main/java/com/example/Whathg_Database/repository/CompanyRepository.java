package com.example.Whathg_Database.repository;



import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Whathg_Database.model.Company;



@Repository
@Transactional
public interface CompanyRepository extends CrudRepository<Company, Integer>{
	 
	
	 
	  @Modifying


	
		@Query("Update Company company SET company.email = :email WHERE company.CR = :CR ")
		void updateEmail(@Param("CR") String CR, @Param("email") String email); 
		@Modifying
		@Query("Update Company company SET company.phoneNumber = :phoneNumber WHERE company.CR = :CR ")
		void updatePhoneNumber(@Param("CR") String CR, @Param("phoneNumber") String phoneNumber); 
		@Modifying
		@Query("Update Company company SET company.address = :address WHERE company.CR = :CR ")
		void updateAddress(@Param("CR") String CR, @Param("address") String address); 
		@Modifying
		@Query("Update Company company SET company.password = :password WHERE company.CR = :CR ")
		void updatePassword(@Param("CR") String CR, @Param("password") String password); 
		
		

		Company findByEmail(String email);
		
		Company findByEmailAndPassword(String email, String password);
	
}


