package com.example.Whathg_Database.DTO;

import java.sql.Timestamp
;



import com.example.Whathg_Database.model.Company;


import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class CouresDTO {
	
	   private String NationalID;
	   private String eduid; 
	   private Company comanyRefrence; 
	  private int courseID;
	  private String nameCourse;
	  private String addedBy;
	  private String nameInstittion;
	  private String courseAttch;
	  
	
		  private Timestamp  startDate;
		  
	
		  private Timestamp endDate;


		public CouresDTO() {
			super();
			
		}


		public CouresDTO(String nationalID, String eduid, Company comanyRefrence, int courseID,
				String nameCourse, String addedBy, String nameInstittion, String courseAttch, Timestamp startDate,
				Timestamp endDate) {
			super();
			NationalID = nationalID;
			this.eduid = eduid;
			this.comanyRefrence = comanyRefrence;
			this.courseID = courseID;
			this.nameCourse = nameCourse;
			this.addedBy = addedBy;
			this.nameInstittion = nameInstittion;
			this.courseAttch = courseAttch;
			this.startDate = startDate;
			this.endDate = endDate;
		}


		  
	  
}
