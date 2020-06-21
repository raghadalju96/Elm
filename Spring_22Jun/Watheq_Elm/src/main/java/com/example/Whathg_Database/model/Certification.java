package com.example.Whathg_Database.model;

import java.io.Serializable;




import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

@Entity
@Table(name = "Certification")
public class Certification implements Serializable {

	private static final long serialVersionUID = -3009157732242241606L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cert_id", unique = true)
	private Long cert_id;

	@NotNull(message = "cannot be Empty ")
	@Column(name = "nationalid")

	private String nationalid;

	@NotNull(message = "cannot be Empty ")
	@Column(name = "uni_name")
	private String uni_name;

	@NotNull(message = "cannot be Empty ")
	@Column(name = "added_by")
	private String added_by;

	@NotNull(message = "cannot be Empty ")
	@Column(name = "cert_date")
	private Timestamp cert_date;

	@NotNull(message = "cannot be Empty ")
	@Column(name = "gpa")
	private float gpa;

	@NotNull(message = "cannot be Empty ")
	@Column(name = "degree")
	private String degree;

	@NotNull(message = "cannot be Empty ")
	@Column(name = "major")
	private String major;
	
	

	
	
	
	
	

	@Builder
	public Certification(Long cert_id, String nationalid,
			 String uni_name,
		 String added_by,
			 Timestamp cert_date,
			 float gpa,String degree,
			 String major) {
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
	
	
	
	

	public Certification() {
		super();
	}
	
	
	
	

}