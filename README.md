# CLI Vehicle Generator

## Overview

The **CLI Vehicle Device Generator** is an interactive command-line application that allows users to create and manipulate vehicles dynamically. This application is designed to take user input to create various types of vehicles and offers functionalities like starting, stopping, accelerating, and more.

---

## Features

- **Vehicle Creation**:
  - Users can create a vehicle by specifying details such as:
    - Color
    - Make
    - Model
    - Year
    - Weight
    - Top Speed
- **Vehicle Manipulation**:
  - Start and stop the vehicle.
  - Increase the speed of the vehicle up to its top speed.
  - Turn the vehicle left or right.

---

## Installation and Walkthrough

*For a detailed walkthrough of the application, click on this [link](https://drive.google.com/file/d/1FSw_B_kZE7EVy09wkpyqmVgN2PsN2mu4/view?usp=sharing).*


1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Compile the TypeScript code to JavaScript:

   ```bash
   npx tsc
   ```

5. Navigate to the distribution folder:

   ```bash
   cd dist
   ```

6. Run the application:

   ```bash
   node index.js
   ```

---

## Usage

1. Upon running the application, you will be prompted to either:
   - Create a new vehicle.
   - Select an existing vehicle to manipulate.

2. **Creating a Vehicle**:
   - Provide details such as color, make, model, year, weight, and top speed.

3. **Manipulating a Vehicle**:
   - Perform various actions, including:
     - Start the vehicle.
     - Accelerate the vehicle (up to its top speed).
     - Decelerate the vehicle.
     - Turn the vehicle left or right.
     - Stop the vehicle.

---

## Example

```plaintext
? Would you like to create a new vehicle or select an existing vehicle? (Use arrow keys)
> Create a new vehicle
  Select an existing vehicle

? Enter Color: Red
? Enter Make: Ford
? Enter Model: F-150
? Enter Year: 2021
? Enter Weight: 5000
? Enter Top Speed: 120

Vehicle created: Ford F-150

? Select an action:
> Start vehicle
  Accelerate 5 MPH
  Turn left
  Stop vehicle
```

---

## Development Notes

- The application is written in TypeScript and designed with a modular architecture to ensure scalability and maintainability.
- Classes for `Truck`, `Motorbike`, and `Car` inherit from a base `Vehicle` class, which handles shared functionality like acceleration, turning, and speed limits.

---

## Contribution

Feel free to fork this repository and submit a pull request for any enhancements or bug fixes. Contributions are welcome!

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
