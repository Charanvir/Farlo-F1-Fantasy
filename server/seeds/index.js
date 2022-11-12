const db = require("../config/connection");
const { User, Driver, Quali, Sprint, Race, League, Team } = require("../models/index");
const leagueData = require("./2022_Data/leagueData");
const userData = require('./2022_Data/userData');
const driverData = require("./2022_Data/driverData");
const teamData = require("./2022_Data/teamData")

// Quali Data
const allQualiData = require("./2022_Data/qualiData/index");
// Sprint Data
const allSprintData = require("./2022_Data/sprintData/index");
// Race Data
const allRaceData = require("./2022_Data/raceData/index");

// adding the data to the database
db.once('open', async () => {
    await User.deleteMany();
    await Team.deleteMany();
    await Driver.deleteMany();
    await Quali.deleteMany();
    await Sprint.deleteMany();
    await Race.deleteMany();
    await League.deleteMany();

    async function seedData() {
        // inserting League Data
        await League.collection.insertMany(leagueData);
        console.log("League Data Seeded")
        console.log("***************************************");

        // inserting User Data
        await User.create(userData);
        console.log("User Data Seeded");
        console.log("***************************************");

        // inserting Driver Data
        await Driver.collection.insertMany(driverData);
        console.log("Driver Data Seeded");
        console.log("***************************************");

        // inserting Team Data
        await Team.collection.insertMany(teamData);
        console.log("Team Data Seeded");
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

        // Added Drivers to Team
        await Driver.find({ driverName: "Lewis Hamilton" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Randeeps Team" },
                { $push: { driverOne: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Fernando Alonso" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Randeeps Team" },
                { $push: { driverTwo: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Max Verstappen" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Jaskarans Team" },
                { $push: { driverOne: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Lance Stroll" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Jaskarans Team" },
                { $push: { driverTwo: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Carlos Sainz" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Manroops Team" },
                { $push: { driverOne: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Kevin Magnussen" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Manroops Team" },
                { $push: { driverTwo: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Charles Leclerc" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Charanvirs Team" },
                { $push: { driverOne: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Esteban Ocon" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Charanvirs Team" },
                { $push: { driverTwo: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Pierre Gasly" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Joes Team" },
                { $push: { driverOne: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Daniel Ricciardo" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Joes Team" },
                { $push: { driverTwo: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Sergio Perez" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Gaganvirs Team" },
                { $push: { driverOne: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Valterri Bottas" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Gaganvirs Team" },
                { $push: { driverTwo: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "George Russel" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Gurvirs Team" },
                { $push: { driverOne: data } },
                { new: true }
            )
        }).clone();
        await Driver.find({ driverName: "Lando Norris" }, async (error, data) => {
            await Team.findOneAndUpdate(
                { teamName: "Gurvirs Team" },
                { $push: { driverTwo: data } },
                { new: true }
            )
        }).clone();
        console.log("Drivers Added to Teams")
        console.log("***************************************");

        // inserting Teams to Users
        await Team.find({ teamName: "Charanvirs Team" }, async (error, data) => {
            await User.findOneAndUpdate(
                { username: "charanvir" },
                { $addToSet: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.find({ teamName: "Randeeps Team" }, async (error, data) => {
            await User.findOneAndUpdate(
                { username: "randeep" },
                { $addToSet: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.find({ teamName: "Joes Team" }, async (error, data) => {
            await User.findOneAndUpdate(
                { username: "joe" },
                { $addToSet: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.find({ teamName: "Gurvirs Team" }, async (error, data) => {
            await User.findOneAndUpdate(
                { username: "gurvir" },
                { $addToSet: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.find({ teamName: "Gaganvirs Team" }, async (error, data) => {
            await User.findOneAndUpdate(
                { username: "gaganvir" },
                { $addToSet: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.find({ teamName: "Jaskarans Team" }, async (error, data) => {
            await User.findOneAndUpdate(
                { username: "jaskaran" },
                { $addToSet: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.find({ teamName: "Manroops Team" }, async (error, data) => {
            await User.findOneAndUpdate(
                { username: "manroop" },
                { $addToSet: { teams: data } },
                { new: true }
            )
        }).clone();
        console.log("Teams Added to Users")
        console.log("***************************************");

        // inserting teams to League
        await Team.findOne({ teamName: "Charanvirs Team" }, async (error, data) => {
            await League.findOneAndUpdate(
                { inviteCode: "1q2w3e4r5t" },
                { $push: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.findOne({ teamName: "Randeeps Team" }, async (error, data) => {
            await League.findOneAndUpdate(
                { inviteCode: "1q2w3e4r5t" },
                { $push: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.findOne({ teamName: "Joes Team" }, async (error, data) => {
            await League.findOneAndUpdate(
                { inviteCode: "1q2w3e4r5t" },
                { $push: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.findOne({ teamName: "Gurvirs Team" }, async (error, data) => {
            await League.findOneAndUpdate(
                { inviteCode: "1q2w3e4r5t" },
                { $push: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.findOne({ teamName: "Gaganvirs Team" }, async (error, data) => {
            await League.findOneAndUpdate(
                { inviteCode: "1q2w3e4r5t" },
                { $push: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.findOne({ teamName: "Manroops Team" }, async (error, data) => {
            await League.findOneAndUpdate(
                { inviteCode: "1q2w3e4r5t" },
                { $push: { teams: data } },
                { new: true }
            )
        }).clone();
        await Team.findOne({ teamName: "Jaskarans Team" }, async (error, data) => {
            await League.findOneAndUpdate(
                { inviteCode: "1q2w3e4r5t" },
                { $push: { teams: data } },
                { new: true }
            )
        }).clone();
        console.log("Teams Added to League");
        console.log("***************************************");

        const leagueDataToAddToTeam = await League.findOne({ teamName: "Farlo Fantasy" }).clone();
        for (let i = 0; i < teamData.length; i++) {
            const team = await Team.findOneAndUpdate(
                { teamName: teamData[i].teamName },
                { $addToSet: { league: leagueDataToAddToTeam } },
                { new: true }
            )
        }
        console.log("League Added to Teams");
        console.log("***************************************");

        console.log("Database seeded");
        console.log("***************************************");
    }

    await seedData();
    process.exit(0);
});
