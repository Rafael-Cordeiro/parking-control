package com.temperosoft.parkingcontrol.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.temperosoft.parkingcontrol.models.ParkingSpot;
import com.temperosoft.parkingcontrol.repositories.ParkingSpotRepository;

@Service
public class ParkingSpotService {

	@Autowired
	ParkingSpotRepository parkingSpotRepository;
	
	@Transactional
	public ParkingSpot save(ParkingSpot parkingSpot) {
		return parkingSpotRepository.save(parkingSpot);
	}
	
	public boolean existsByLicensePlateCar(String licensePlateCar) {
		return parkingSpotRepository.existsByLicensePlateCar(licensePlateCar);
	}

	public boolean existsByParkingSpotNumber(String parkingSpotNumber) {
		return parkingSpotRepository.existsByParkingSpotNumber(parkingSpotNumber);
	}

	public boolean existsByApartmentAndBlock(String apartment, String block) {
		return parkingSpotRepository.existsByApartmentAndBlock(apartment, block);
	}
	
	public List<ParkingSpot> findAll() {
		return parkingSpotRepository.findAll();
	}
	
	@Transactional
	public Optional<ParkingSpot> findById(UUID id) {
		return Optional.ofNullable(parkingSpotRepository.getById(id));
	}
	
	public void delete(ParkingSpot parkingSpot) {
		parkingSpotRepository.delete(parkingSpot);
	}

}
