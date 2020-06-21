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

@Getter
@Setter
@Entity
@Table(name = "course")
public class Coures implements Serializable {
	private static final long serialVersionUID = -3009157732242241606L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "courseID", unique = true)
	private int courseID;

	@Column(name = "eduid", unique = true)
	private String eduid;

	@Column(name = "nationalid", unique = true)
	private String nationalid;

	@NotNull(message = " cannot be Empty ")
	@Column(name = "nameCourse")
	private String nameCourse;

	@NotNull(message = " cannot be Empty ")
	@Column(name = "addedBy")
	private String addedBy;

	@NotNull(message = " cannot be Empty ")
	@Column(name = "nameInstittion")
	private String nameInstittion;

	@NotNull(message = " cannot be Empty ")
	@Column(name = "courseAttch")
	private String courseAttch;

	@NotNull(message = " cannot be Empty ")
	@Column(name = "startDate")
	private Timestamp startDate;

	@NotNull(message = " cannot be Empty ")
	@Column(name = "endDate")
	private Timestamp endDate;

	public Coures() {
		super();

	}

	@Builder
	public Coures(String nationalID, Company comanyRefrence, String eduid, int courseID, @NotNull String nameCourse,
			@NotNull String addedBy, @NotNull String nameInstittion, @NotNull String courseAttch, Timestamp startDate,
			Timestamp endDate) {
		super();

		this.eduid = eduid;
		this.nationalid = nationalID;
		this.courseID = courseID;
		this.nameCourse = nameCourse;
		this.addedBy = addedBy;
		this.nameInstittion = nameInstittion;
		this.courseAttch = courseAttch;
		this.startDate = startDate;
		this.endDate = endDate;
	}

}