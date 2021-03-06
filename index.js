// The code below is temporary and can be commented out.
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require ('./iss');
// const { fetchISSFlyOverTimes} = require ('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
  

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});