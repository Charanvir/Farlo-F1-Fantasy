const db = require("../config/connection");
const { User, Driver, Quali, Sprint, Race } = require("../models/index");

// user data
const CharanvirData = {
    username: "charanvir",
    email: "charanvir@gmail.com",
    password: "charanvir",
    driverOne: [],
    driverTwo: [],
    score: 0
};
const RandeepData = {
    username: "randeep",
    email: "randeep@gmail.com",
    password: "randeep",
    driverOne: [],
    driverTwo: [],
    score: 0
};
const GurvirData = {
    username: "gurvir",
    email: "gurvir@gmail.com",
    password: "gurvir",
    driverOne: [],
    driverTwo: [],
    score: 0
};
const JoeData = {
    username: "joe",
    email: "joe@gmail.com",
    password: "joe",
    driverOne: [],
    driverTwo: [],
    score: 0
};
const GaganvirData = {
    username: "gaganvir",
    email: "gaganvir@gmail.com",
    password: "gaganvir",
    driverOne: [],
    driverTwo: [],
    score: 0
};
const JaskaranData = {
    username: "jaskaran",
    email: "jaskaran@gmail.com",
    password: "jaskaran",
    driverOne: [],
    driverTwo: [],
    score: 0
};
const ManroopData = {
    username: "manroop",
    email: "manroop@gmail.com",
    password: "manroop",
    driverOne: [],
    driverTwo: [],
    score: 0
};
const userData = []
userData.push(CharanvirData, RandeepData, GurvirData, JoeData, GaganvirData, JaskaranData, ManroopData)

// adding the data to the database
db.once('open', async () => {
    await User.deleteMany();
    await Driver.deleteMany();
    await Quali.deleteMany();
    await Sprint.deleteMany();
    await Race.deleteMany();




    await User.collection.insertMany(userData);

    console.log("Database seeded")
    process.exit(0)
})
