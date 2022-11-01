const qualiBahrainData = require("./qualiBahrain");
const qualiSaudiData = require("./qualiSaudi");
const qualiAustraliaData = require("./qualiAustralia");
const qualiImolaData = require("./qualiImola");
const qualiMiamiData = require("./qualiMiami");
const qualiSpainData = require("./qualiSpain");
const qualiMonacoData = require("./qualiMonaco");
const qualiBakuData = require("./qualiBaku");

const allQualiData = [];
allQualiData.push(
    qualiBahrainData,
    qualiSaudiData,
    qualiAustraliaData,
    qualiImolaData,
    qualiMiamiData,
    qualiSpainData,
    qualiMonacoData,
    qualiBakuData
);

module.exports = allQualiData;