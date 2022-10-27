const db = require("../config/connection");
const { User, Driver, Quali, Sprint, Race } = require("../models/index");
const userData = require('./userData');
const driverData = require("./driverData")
const qualiBahrainData = require("./qualiData/qualiBahrain");
const raceBahrainData = require("./raceData/raceBahrain");

// adding the data to the database
db.once('open', async () => {
    await User.deleteMany();
    await Driver.deleteMany();
    await Quali.deleteMany();
    await Sprint.deleteMany();
    await Race.deleteMany();




    await User.collection.insertMany(userData);
    console.log("User Data seeded")
    await Driver.collection.insertMany(driverData)
    console.log("Driver data seeded")
    await Quali.collection.insertMany(qualiBahrainData)
    console.log("Bahrain Quali data seeded")
    await Race.collection.insertMany(raceBahrainData)
    console.log("Bahrain Race data seeded")

    console.log("Database seeded")
    process.exit(0)
})
