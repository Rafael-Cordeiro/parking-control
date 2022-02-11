package com.temperosoft.parkingcontrol.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.temperosoft.parkingcontrol.dto.ParkingSpotDTO;
import com.temperosoft.parkingcontrol.models.ParkingSpot;
import com.temperosoft.parkingcontrol.services.ParkingSpotService;

@RestController
@CrossOrigin(origins="*", maxAge=3600)
@RequestMapping("/parking-spot")
public class ParkingSpotController {
	
	@Autowired
	ParkingSpotService parkingSpotService;
	
	@PostMapping
	public ResponseEntity<Object> saveParkingSpot(@RequestBody @Valid ParkingSpotDTO parkingSpotDTO) {
		var parkingSpot = new ParkingSpot();
		BeanUtils.copyProperties(parkingSpotDTO, parkingSpot);
		parkingSpot.setRegistrationTime(LocalDateTime.now(ZoneId.of("UTC")));
		return ResponseEntity.status(HttpStatus.CREATED).body(parkingSpotService.save(parkingSpot));
	}
}
