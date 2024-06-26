import { data } from "../data/data";

// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']
export function getAsteroidNames(array) {
  const allAsteroidName = [
  {name: '1 Ceres'},
  {name: '6 Hebe'},
  {name: '47171 Lempo'},
  { name: '762 Pulcova' },
  { name: '4179 Toutatis' },
  { name: '50000 Quaoar' },
  { name: '2867 Šteins' },
  { name: '5 Astraea' },
  { name: '5145 Pholus' },
  { name: '4769 Castalia' },
  { name: '624 Hektor' },
  { name: '216 Kleopatra' },
  { name: '3753 Cruithne' },
  { name: '3 Juno' },
  { name: '10 Hygiea' },
  { name: '21 Lutetia' },
  { name: '253 Mathilde' },
  { name: '7 Iris' },
  { name: '433 Eros' },
  { name: '90377 Sedna' },
  { name: '10199 Chariklo' },
  { name: '87 Sylvia' },
  { name: '90482 Orcus' },
  { name: '5335 Damocles' },
  { name: '8 Flora' },
  { name: '2060 Chiron' },
  { name: '5261 Eureka' },
  { name: '588 Achilles' },
  { name: '28978 Ixion' },
  { name: '9 Metis' },
  { name: '7066 Nessus' },
  { name: '25143 Itokawa' },
  { name: '10370 Hylonome' },
  { name: '45 Eugenia' },
  { name: '(308933) 2006 SQ372' },
  { name: '2 Pallas' },
  { name: '8405 Asbolus' },
  { name: '20000 Varuna' },
  { name: '4 Vesta' },
  { name: '243 Ida' },
  { name: '951 Gaspra' },
  { name: '15760 Albion' },
  { name: 'Arrokoth' },
  { name: '101955 Bennu' }
  ];

  const asteroidNames = allAsteroidName.map(asteroid => asteroid.name);


  return asteroidNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
