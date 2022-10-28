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

    console.log("***************************************");
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

    console.log("***************************************");
    // Added Drivers to Users
    await Driver.find({ driverName: "Lewis Hamilton" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "randeep" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    console.log("Lewis Hamilton data added to Randeep")
    await Driver.find({ driverName: "Fernando Alonso" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "randeep" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Fernando Alonso data added to Randeep")

    await Driver.find({ driverName: "Max Verstappen" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "jaskaran" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    console.log("Max Verstappen added to Jaskaran")
    await Driver.find({ driverName: "Lance Stroll" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "jaskaran" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Lance Stroll added to Jaskaran")

    await Driver.find({ driverName: "Carlos Sainz" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "manroop" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    console.log("Carlos Sainz added to Manroop")
    await Driver.find({ driverName: "Kevin Magnussen" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "manroop" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Kevin Magnussen added to Manroop")

    await Driver.find({ driverName: "Charles Leclerc" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "charanvir" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    console.log("Charles Leclerc added to Charanvir")
    await Driver.find({ driverName: "Esteban Ocon" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "charanvir" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Esteban Ocon added to Charanvir")

    await Driver.find({ driverName: "Pierre Gasly" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "joe" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    console.log("Pierre Gasly added to Joe")
    await Driver.find({ driverName: "Daniel Ricciardo" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "joe" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Daniel Ricciardo added to Joe")

    await Driver.find({ driverName: "Sergio Perez" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gaganvir" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    console.log("Sergio Perez added to Gaganvir")
    await Driver.find({ driverName: "Valterri Bottas" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gaganvir" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Valterri Bottas added to Gaganvir")

    await Driver.find({ driverName: "George Russel" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gurvir" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    console.log("George Russel added to Gurvir")
    await Driver.find({ driverName: "Lando Norris" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gurvir" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Lando Norris added to Gurvir")

    console.log("***************************************");
    console.log("Database seeded");
    process.exit(0);
});
