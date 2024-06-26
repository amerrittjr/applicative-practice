import { data } from "../data/data";

// SPACE DATA EXERCISE 4


export function getPlanetsWithLowGravity(data) {

  const planetsArray = data.planets;
  
  const isPlanet = planetsArray.filter(planet => planet.isPlanet);

  const gravityLessThanTen = isPlanet.filter(planet => planet.gravity < 10);

  const gravityLessThanTenPlanetNames = gravityLessThanTen.map(planet => planet.name);

  return gravityLessThanTenPlanetNames;
}






// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
