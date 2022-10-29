const raceBahrainData = require("./raceBahrain");
const raceSaudiData = require("./raceSaudi");
const raceAustraliaData = require("./raceAustralia")
const raceImolaData = require("./raceImola")

const allRaceData = [];
allRaceData.push(raceBahrainData, raceSaudiData, raceAustraliaData, raceImolaData);

module.exports = allRaceData;