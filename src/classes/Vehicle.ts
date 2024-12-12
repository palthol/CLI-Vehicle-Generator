// import Driveable interface
import Driveable from '../interfaces/Driveable.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Common properties for all vehicles
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;

  started: boolean;
  currentSpeed: number;

  // Constructor for the Vehicle class
  constructor() {
    this.vin = '';
    this.color = '';
    this.make = '';
    this.model = '';
    this.year = 0;
    this.weight = 0;
    this.topSpeed = 100; // Default value so that we can override in subclasses as needed

    this.started = false;
    this.currentSpeed = 0;
  }


  // Method to print vehicle details
  printDetails(): void {
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log('Vehicle started');
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      if (this.currentSpeed + change > this.topSpeed) {
        this.currentSpeed = this.topSpeed;
        console.log(`Vehicle has reached its top speed of ${this.topSpeed} mph`);
      } else {
        this.currentSpeed += change;
        console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
      }
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      if (this.currentSpeed < 0) this.currentSpeed = 0;
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log('Vehicle reversed');
    } else {
      console.log('Start the vehicle first');
    }
  }
}

// Export the Vehicle class
export default Vehicle;
