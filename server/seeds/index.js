const db = require("../config/connection");
const { User, Driver, Quali, Sprint, Race } = require("../models/index");
const userData = require('./userData');
const driverData = require("./driverData")

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

    console.log("Database seeded")
    process.exit(0)
})
