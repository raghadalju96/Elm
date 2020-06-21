package com.example.Whathg_Database.DTO;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ExperienceDTO {

	private Long expid;

	private long id;
	private String eposition;
	private String nationalid;

	private Timestamp sdate;

	private Timestamp edate;

	private String addby;

	private String companyname;

	private String companyemail;

	public ExperienceDTO() {
		super();

	}

	public ExperienceDTO(Long expid, long id, String nationalid, String eposition, Timestamp sdate, Timestamp edate,
			String addby, String companyname, String companyemail) {
		super();
		this.expid = expid;
		this.nationalid = nationalid;
		this.eposition = eposition;
		this.sdate = sdate;
		this.edate = edate;
		this.addby = addby;
		this.companyname = companyname;
		this.companyemail = companyemail;
	}

}
