package com.example.Whathg_Database.model;

import java.io.Serializable;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.validation.constraints.NotNull;

//import org.springframework.data.annotation.Id;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Company")
public class Company extends User_W implements Serializable {
	private static final long serialVersionUID = -3009157732242241606L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CR", unique = true)
	private int CR;

	@NotNull(message = " cannot be Empty ")
	@Column(name = "comanyName")
	private String comanyName;

	@Builder
	public Company(String email, String phoneNumber, String address, String password, String type, int CR,
			String comanyName) {
		super(email, phoneNumber, address, password, "com");
		this.CR = CR;
		this.comanyName = comanyName;

	}

}
