const qualiBahrainData = require("./qualiBahrain");
const qualiSaudiData = require("./qualiSaudi");
const qualiAustraliaData = require("./qualiAustralia");
const qualiImolaData = require("./qualiImola");

const allQualiData = [];
allQualiData.push(qualiBahrainData, qualiSaudiData, qualiAustraliaData, qualiImolaData);

module.exports = allQualiData;