

// SPACE DATA EXERCISE 3
// Return an array of all Planets' average temperatures
// Return example: [1, 2, ... , N]
import {data} from '../data/data.js';

export function getAllAverageTemperatures(data) {

  const planetsArray = data.planets;

  const onlyPlanets = planetsArray.filter(planet => planet.isPlanet);

  const totalTemp = onlyPlanets.reduce((sum, planet) => sum + planet.avgTemp, 0);

  const averageTemp = onlyPlanets.map(planet => planet.avgTemp);

  return averageTemp;
};



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
