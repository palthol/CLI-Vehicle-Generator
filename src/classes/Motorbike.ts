// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Motorbike class extending the Vehicle class
class Motorbike extends Vehicle {
  override vin: string;
  override color: string;
  override make: string;
  override model: string;
  override year: number;
  override weight: number;
  override topSpeed: number;
  wheels: Wheel[];

  // Constructor to initialize the Motorbike class
  constructor({
    vin,
    color,
    make,
    model,
    year,
    weight,
    topSpeed,
    wheels = [],
  }: {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels?: Wheel[];
  }) {
    super(); // Adjusted super call based on Vehicle class constructor

    // Assign properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Initialize wheels with 2 default wheels if not provided
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  // Method to perform a wheelie
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from Vehicle
  override printDetails(): void {
    super.printDetails(); // Call parent class method
    console.log(
      `Wheels: ${this.wheels
        .map(
          (wheel) => {
            const diameter = wheel["diameter"] || "Unknown Diameter";
            return `Diameter: ${diameter}`;
          }
        )
        .join(', ')}`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
