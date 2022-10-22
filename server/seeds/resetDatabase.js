const db = require("../config/connection");
const { User, Driver, Quali, Sprint, Race } = require("../models");

db.once('open', async () => {
    await User.deleteMany({});
    await Driver.deleteMany({});
    await Quali.deleteMany({});
    await Sprint.deleteMany({});
    await Race.deleteMany({});

    console.log("Database has been reset");
    process.exit(0)
});