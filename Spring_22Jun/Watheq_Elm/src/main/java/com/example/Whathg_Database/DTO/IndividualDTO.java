package com.example.Whathg_Database.DTO;

import java.sql.Timestamp;


import com.example.Whathg_Database.model.User_W;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IndividualDTO extends User_W {

	
	private String nationalid;

	private String firstname;

	private String mname;

	private String lastname;

	private String gender;

	private Timestamp dob;

	public IndividualDTO() {
		super();

	}

	public IndividualDTO(String email, String phone_number, String address, String type, String password,
			String nationalid, String firstname, String mname, String lastname, String gender, Timestamp dob) {
		super(email, phone_number, address, password, "ind");
		this.nationalid = nationalid;
		this.firstname = firstname;
		this.mname = mname;
		this.lastname = lastname;
		this.gender = gender;

		this.dob = dob;

	}

}
