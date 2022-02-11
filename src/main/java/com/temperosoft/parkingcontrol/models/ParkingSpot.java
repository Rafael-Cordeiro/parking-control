package com.temperosoft.parkingcontrol.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="TB_PARKING_SPOT")
@Data
public class ParkingSpot implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private UUID id;
	
	@Column(nullable=false, unique=true, length=10)
	private String parkingSpotNumber;

	@Column(nullable=false, unique=true, length=7)
	private String licensePlateCar;
	
	@Column(nullable=false, unique=true, length=70)
	private String brandCar;
	
	@Column(nullable=false, unique=true, length=70)
	private String modelCar;
	
	@Column(nullable=false, unique=true, length=70)
	private String colorCar;
	
	@Column(nullable=false)
	private LocalDateTime registrationDate;
	
	@Column(nullable=false, length=130)
	private String responsibleName;
	
	@Column(nullable=false, length=30)
	private String apartment;
	
	@Column(nullable=false, length=30)
	private String block;
	
}
