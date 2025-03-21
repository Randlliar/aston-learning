"use strict";
const ELECTRIC = 'electric';
class Vehicle {
    constructor(brand, model, year, speed = 0) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} speed is ${this.speed} km/h`);
    }
    brake(amount) {
        this.speed -= amount;
        console.log(`${this.brand} ${this.model} speed is ${this.speed} km/h`);
    }
    info() {
        console.log(`This is car ${this.brand} ${this.model}, year of production ${this.year}. Max speed ${this.speed}`);
    }
}
class Car extends Vehicle {
    constructor(brand, model, year, speed, fuelType) {
        super(brand, model, year, speed);
        this.fuelType = fuelType;
    }
    refuel() {
        console.log(`${this.brand} ${this.model} refueled ${this.fuelType}`);
    }
}
class ElectricCar extends Car {
    constructor(brand, model, year, speed, batteryLevel) {
        super(brand, model, year, speed, ELECTRIC);
        this.batteryLevel = batteryLevel;
    }
    getBatteryLevel() {
        return this.batteryLevel;
    }
    setBatteryLevel(level) {
        this.batteryLevel = level;
        console.log(`${this.brand} ${this.model} charge is  ${this.batteryLevel}%.`);
    }
    charge() {
        this.setBatteryLevel(100);
        console.log(`${this.brand} ${this.model} charged`);
    }
    refuel() {
        console.log(`${this.brand} ${this.model} charged`);
    }
}
const vehicle = new Vehicle("Honda", "Civic", 2000, 100);
vehicle.info();
vehicle.accelerate(20);
vehicle.brake(50);
const car = new Car("Audi", "100", 1998, 60, "Gas");
car.info();
car.refuel();
car.accelerate(15);
car.brake(10);
const electricCar = new ElectricCar("Tesla", "Model S", 2022, 80, 50);
electricCar.info();
electricCar.refuel();
electricCar.charge();
electricCar.accelerate(25);
electricCar.brake(40);
electricCar.setBatteryLevel(80);
