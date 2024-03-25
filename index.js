// Code your solution here
function findMatching(drivers, name) {
    // Use Array.prototype.filter() to filter out drivers with exact match
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    // Use Array.prototype.filter() to filter out drivers with beginning matching letters
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  