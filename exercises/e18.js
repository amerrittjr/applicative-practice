/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroidsArray = data.asteroids;

  const result = asteroidsArray.reduce((accumulator, asteroid) => {
    const year = asteroid.discoveryYear;

    if (!accumulator.counts[year]) {
      accumulator.counts[year] = 1;
    } else {
      accumulator.counts[year]++;
    }

    if (accumulator.counts[year] > accumulator.maxCount) {
      accumulator.maxCount = accumulator.counts[year];
      accumulator.maxYear = year;
    }

    return accumulator;
  }, { counts: {}, maxCount: 0, maxYear: null });

  return result.maxYear;
}


  
 

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
