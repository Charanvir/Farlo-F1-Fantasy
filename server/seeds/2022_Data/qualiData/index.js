const qualiBahrainData = require("./qualiBahrain");
const qualiSaudiData = require("./qualiSaudi");
const qualiAustraliaData = require("./qualiAustralia");
const qualiImolaData = require("./qualiImola");
const qualiMiamiData = require("./qualiMiami");
const qualiSpainData = require("./qualiSpain");

const allQualiData = [];
allQualiData.push(
    qualiBahrainData,
    qualiSaudiData,
    qualiAustraliaData,
    qualiImolaData,
    qualiMiamiData,
    qualiSpainData
);

module.exports = allQualiData;