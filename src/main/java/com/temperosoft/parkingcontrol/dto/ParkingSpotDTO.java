package com.temperosoft.parkingcontrol.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class ParkingSpotDTO {

	@NotBlank(message = "parkingSpotNumber obrigatório")
	private String parkingSpotNumber;

	@NotBlank(message = "licensePlateCar obrigatório")
	@Size(max=7, message="licensePlateCar bigger than 7")
	private String licensePlateCar;
	
	@NotBlank(message = "brandCar obrigatório")
	private String brandCar;
	
	@NotBlank(message = "modelCar obrigatório")
	private String modelCar;
	
	@NotBlank(message = "colorCar obrigatório")
	private String colorCar;
	
	@NotBlank(message = "responsibleName obrigatório")
	private String responsibleName;
	
	@NotBlank(message = "apartment obrigatório")
	private String apartment;
	
	@NotBlank(message = "block obrigatório")
	private String block;
}
