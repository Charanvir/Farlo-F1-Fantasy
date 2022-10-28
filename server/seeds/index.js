const db = require("../config/connection");
const { User, Driver, Quali, Sprint, Race } = require("../models/index");
const userData = require('./userData');
const driverData = require("./driverData");

// Quali Data
const qualiBahrainData = require("./qualiData/qualiBahrain");
const qualiSaudiData = require("./qualiData/qualiSaudi")
// Sprint Data

// Race Data
const raceBahrainData = require("./raceData/raceBahrain");
const raceSaudiData = require("./raceData/raceSaudi")

// adding the data to the database
db.once('open', async () => {
    await User.deleteMany();
    await Driver.deleteMany();
    await Quali.deleteMany();
    await Sprint.deleteMany();
    await Race.deleteMany();

    // inserting User Data
    await User.collection.insertMany(userData);
    console.log("User Data seeded");

    // inserting Driver Data
    await Driver.collection.insertMany(driverData);
    console.log("Driver Data seeded");

    // Inserting Quali Data
    await Quali.collection.insertMany(qualiBahrainData);
    console.log("Bahrain Quali Data seeded");
    await Quali.collection.insertMany(qualiSaudiData);
    console.log("Saudi Quali Data seeded")

    // Inserting Sprint Data

    // Inserting Race Data
    await Race.collection.insertMany(raceBahrainData);
    console.log("Bahrain Race Data seeded");
    await Race.collection.insertMany(raceSaudiData);
    console.log("Saudi Race Data seeded");


    for (let i = 0; i < driverData.length; i++) {
        await Quali.find({ driverName: driverData[i].driverName }, async (error, data) => {
            await Driver.findOneAndUpdate(
                { driverName: driverData[i].driverName },
                { $addToSet: { quali: data } },
                { new: true }
            )
        }).clone();
        await Race.find({ driverName: driverData[i].driverName }, async (error, data) => {
            await Driver.findOneAndUpdate(
                { driverName: driverData[i].driverName },
                { $addToSet: { race: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: driverData[i].teammateName }, async (error, data) => {
            await Driver.findOneAndUpdate(
                { driverName: driverData[i].driverName },
                { $push: { teammate: data } },
                { new: true }
            )
        }).clone();
    }
    console.log("Populated Data Seeded");



    console.log("Database seeded");
    process.exit(0);
});
