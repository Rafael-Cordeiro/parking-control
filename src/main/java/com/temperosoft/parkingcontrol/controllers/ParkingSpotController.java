package com.temperosoft.parkingcontrol.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.temperosoft.parkingcontrol.dto.ParkingSpotDTO;
import com.temperosoft.parkingcontrol.models.ParkingSpot;
import com.temperosoft.parkingcontrol.services.ParkingSpotService;

@RestController
@CrossOrigin(origins="*", maxAge=3600)
@RequestMapping("parking-spot")
public class ParkingSpotController {
	
	@Autowired
	ParkingSpotService parkingSpotService;
	
	@PostMapping
	public ResponseEntity<Object> saveParkingSpot(@RequestBody @Valid ParkingSpotDTO parkingSpotDTO) {
		
		var parkingSpot = new ParkingSpot();
		BeanUtils.copyProperties(parkingSpotDTO, parkingSpot);
		
		if(parkingSpotService.existsByLicensePlateCar(parkingSpot.getLicensePlateCar()))
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: License Plate Car is already in use!");
		
		if(parkingSpotService.existsByParkingSpotNumber(parkingSpot.getParkingSpotNumber()))
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: Parking Spot is already in use!");
		
		if(parkingSpotService.existsByApartmentAndBlock(parkingSpot.getApartment(), parkingSpot.getBlock()))
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: Parking Spot already registered for this apartment/block!");
		
		parkingSpot.setRegistrationTime(LocalDateTime.now(ZoneId.of("UTC")));
		return ResponseEntity.status(HttpStatus.CREATED).body(parkingSpotService.save(parkingSpot));
	}
	
	@GetMapping
	public ResponseEntity<List<ParkingSpot>> getAllParkingSpots() {
		return ResponseEntity.status(HttpStatus.OK).body(parkingSpotService.findAll());
	}
		
}
