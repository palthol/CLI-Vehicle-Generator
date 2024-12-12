// Import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles = [];

// Create a truck instance
const truck1 = new Truck({
  vin: Cli.generateVin(),
  color: "red",
  make: "Ford",
  model: "F-150",
  year: 2021,
  weight: 5000,
  topSpeed: 120,
  wheels: [],
  towingCapacity: 10000,
});

// Create a car instance
const car1 = new Car(
  Cli.generateVin(),
  "blue",
  "Toyota",
  "Camry",
  2021,
  3000,
  130,
  []
);

// Create a motorbike instance
const motorbike1 = new Motorbike({
  vin: Cli.generateVin(),
  color: "black",
  make: "Harley Davidson",
  model: "Sportster",
  year: 2021,
  weight: 500,
  topSpeed: 125,
  wheels: [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")],
});

// Push vehicles to the array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Create a new instance of the Cli class
const cli = new Cli(vehicles);

// Start the CLI
cli.startCli();
