const db = require("../config/connection");
const { User, Driver, Quali, Sprint, Race } = require("../models/index");
const userData = require('./userData');
const driverData = require("./driverData");

// Quali Data
const allQualiData = require("./qualiData/index")
// Sprint Data
const allSprintData = require("./sprintData/index")
// Race Data
const allRaceData = require("./raceData/index")

// adding the data to the database
db.once('open', async () => {
    await User.deleteMany();
    await Driver.deleteMany();
    await Quali.deleteMany();
    await Sprint.deleteMany();
    await Race.deleteMany();

    // inserting User Data
    await User.collection.insertMany(userData);
    console.log("User Data Seeded");
    console.log("***************************************");

    // inserting Driver Data
    await Driver.collection.insertMany(driverData);
    console.log("Driver Data Seeded");
    console.log("***************************************");

    // Inserting Quali Data
    for (let i = 0; i < allQualiData.length; i++) {
        await Quali.collection.insertMany(allQualiData[i])
    }
    console.log("Quali Data Seeded")
    console.log("***************************************");

    // Inserting Sprint Data
    for (let i = 0; i < allSprintData.length; i++) {
        await Sprint.collection.insertMany(allSprintData[i])
    }

    // Inserting Race Data
    for (let i = 0; i < allRaceData.length; i++) {
        await Race.collection.insertMany(allRaceData[i])
    }
    console.log("Race Data Seeded")
    console.log("***************************************");

    for (let i = 0; i < driverData.length; i++) {
        await Quali.find({ driverName: driverData[i].driverName }, async (error, data) => {
            await Driver.findOneAndUpdate(
                { driverName: driverData[i].driverName },
                { $addToSet: { quali: data } },
                { new: true }
            )
        }).clone();
        await Sprint.find({ driverName: driverData[i].driverName }, async (error, data) => {
            await Driver.findOneAndUpdate(
                { driverName: driverData[i].driverName },
                { $addToSet: { sprint: data } },
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
    await Driver.find({ driverName: "Fernando Alonso" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "randeep" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Max Verstappen" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "jaskaran" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Lance Stroll" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "jaskaran" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Carlos Sainz" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "manroop" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Kevin Magnussen" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "manroop" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Charles Leclerc" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "charanvir" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Esteban Ocon" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "charanvir" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Pierre Gasly" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "joe" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Daniel Ricciardo" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "joe" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Sergio Perez" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gaganvir" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Valterri Bottas" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gaganvir" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "George Russel" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gurvir" },
            { $push: { driverOne: data } },
            { new: true }
        )
    }).clone();
    await Driver.find({ driverName: "Lando Norris" }, async (error, data) => {
        await User.findOneAndUpdate(
            { username: "gurvir" },
            { $push: { driverTwo: data } },
            { new: true }
        )
    }).clone();
    console.log("Drivers Added to Users")
    console.log("***************************************");

    console.log("Database seeded");
    console.log("***************************************");
    process.exit(0);
});
