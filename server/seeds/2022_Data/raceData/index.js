const raceBahrainData = require("./raceBahrain");
const raceSaudiData = require("./raceSaudi");
const raceAustraliaData = require("./raceAustralia");
const raceImolaData = require("./raceImola");
const raceMiamiData = require("./raceMiami");
const raceSpainData = require("./raceSpain");
const raceMonacoData = require("./raceMonaco");
const raceBakuData = require("./raceBaku");

const allRaceData = [];
allRaceData.push(
    raceBahrainData,
    raceSaudiData,
    raceAustraliaData,
    raceImolaData,
    raceMiamiData,
    raceSpainData,
    raceMonacoData,
    raceBakuData
);

module.exports = allRaceData;