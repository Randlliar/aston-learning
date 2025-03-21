const ELECTRIC: string = 'electric'
class Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        protected speed: number = 0
    ) {}

    accelerate(amount: number) {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} speed is ${this.speed} km/h`);
    }

    brake(amount: number) {
        this.speed -= amount;
        console.log(`${this.brand} ${this.model} speed is ${this.speed} km/h`);
    }

    info() {
        console.log(`This is car ${this.brand} ${this.model}, year of production ${this.year}. Max speed ${this.speed}`)
    }
}

class Car extends Vehicle {

    constructor( brand: string,
                 model: string,
                 year: number,
                 speed: number,
                 public fuelType: string) {
        super(brand, model, year, speed);
    }

    refuel() {
        console.log(`${this.brand} ${this.model} refueled ${this.fuelType}`)
    }
}

class ElectricCar extends Car {
    private batteryLevel: number;

    constructor( brand: string,
                 model: string,
                 year: number,
                 speed: number,
                 batteryLevel: number) {
        super(brand, model, year, speed, ELECTRIC);

        this.batteryLevel = batteryLevel;
    }

    getBatteryLevel(): number {
        return this.batteryLevel;
    }

    setBatteryLevel(level: number): void {
            this.batteryLevel = level;
            console.log(`${this.brand} ${this.model} charge is  ${this.batteryLevel}%.`);
    }

    charge(): void {
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