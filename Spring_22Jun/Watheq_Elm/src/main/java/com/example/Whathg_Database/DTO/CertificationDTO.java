package com.example.Whathg_Database.DTO;

import java.sql.Timestamp;



import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class CertificationDTO {



	private Long cert_id;
	private String nationalid; 
	private String uni_name;
	private String added_by; 
	private Timestamp   cert_date;	  
	private float gpa ;
	private String degree;
	private String major;
	
	
	public CertificationDTO() {
		super();
		
	}


	public CertificationDTO(Long cert_id, String nationalid, String uni_name, String added_by, Timestamp cert_date,
			float gpa, String degree, String major) {
		super();
		this.cert_id = cert_id;
		this.nationalid = nationalid;
		this.uni_name = uni_name;
		this.added_by = added_by;
		this.cert_date = cert_date;
		this.gpa = gpa;
		this.degree = degree;
		this.major = major;
	}






}
