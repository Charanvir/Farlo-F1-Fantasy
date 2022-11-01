const qualiBahrainData = require("./qualiBahrain");
const qualiSaudiData = require("./qualiSaudi");
const qualiAustraliaData = require("./qualiAustralia");
const qualiImolaData = require("./qualiImola");
const qualiMiamiData = require("./qualiMiami");
const qualiSpainData = require("./qualiSpain");
const qualiMonacoData = require("./qualiMonaco");
const qualiBakuData = require("./qualiBaku");
const qualiCanadaData = require("./qualiCanada");
const qualiSilverstoneData = require("./qualiSilverstone");

const allQualiData = [];
allQualiData.push(
    qualiBahrainData,
    qualiSaudiData,
    qualiAustraliaData,
    qualiImolaData,
    qualiMiamiData,
    qualiSpainData,
    qualiMonacoData,
    qualiBakuData,
    qualiCanadaData,
    qualiSilverstoneData
);

module.exports = allQualiData;