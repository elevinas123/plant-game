# plant-game
Description
Evolution Sim is an intriguing game that simulates the growth, spread, mutation, and evolution of plant species within a grid-based environment. The player can observe the survival and adaptation of plants based on the principles of natural selection and genetic variation.

The game presents a colorful and dynamic interface representing various plants with distinct characteristics such as height and lifespan, which evolve over time based on environmental factors. The game also features an intuitive user interaction allowing the player to introduce new plants into the ecosystem.

Getting Started
These instructions will get you a copy of the game up and running on your local machine for development and testing purposes.

Prerequisites
The game is developed in JavaScript and utilizes the p5.js library. Make sure you have the p5.js library integrated into your local environment.

Installing
Download the project's source code from the repository.
Open the game in your preferred text editor or Integrated Development Environment (IDE).
Run the project using a local server or simply open the HTML file in your browser.
How to Play
You interact with the game using your mouse. Clicking on the grid will add a new plant at the mouse location. The grid's cells will be filled with color to represent the plants, where color intensity corresponds to the plant's height and lifespan.

Game Mechanics
The game logic revolves around the simulation of plant life in a grid environment. Here's a brief overview of the mechanics:

Plant Characteristics: Each plant has specific attributes like height, lifespan (tillDie), strength, and resistance. These properties influence the plant's interaction with its environment and neighboring plants.

Evolution: Plants have a certain chance to mutate and evolve their characteristics when they grow. These probabilities can lead to a wide variety of plant attributes over time.

Spread: When a plant receives enough sunlight (based on its height and relative location to other plants), it can spread to nearby tiles.

Sunlight Distribution: The amount of sunlight a plant needs depends on its height, the lifespan, and the shadows of nearby taller plants.

Death: If a plant doesn't get enough sunlight to meet its needs or its lifespan ends, it will die and be replaced with a vacant tile.

Visuals: The grid color intensity corresponds to the plant's attributes. The height is represented by the red color value, and the lifespan is represented by the green color value.

Information Display: The top three dominant plant types (based on height and lifespan) are displayed on the right-hand side of the screen.

Control Buttons: The "1gen" button advances the simulation by one generation, and the "start auto" button begins automatic progression of generations every 100ms.
