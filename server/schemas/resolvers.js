const { User, Driver, Quali, Sprint, Race, League, Team } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        loggedInUser: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                if (!userData.admin) {
                    const nonAdminUserData = await User.findOne({ _id: context.user._id })
                        .populate({
                            path: 'teams',
                            populate: {
                                path: 'driverOne'
                            }
                        })
                        .populate({
                            path: 'teams',
                            populate: {
                                path: 'driverTwo'
                            }
                        })
                    return nonAdminUserData
                } else {
                    const admin = await User.findOne({ _id: context.user._id })
                    return admin;
                }
            }
        },
        allLeagues: async () => {
            return League.find()
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "race"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "race"
                        }
                    }
                })
        },
        allUsers: async () => {
            return User.find()
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "race"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "race"
                        }
                    }
                })
        },
        allDrivers: async () => {
            return Driver.find().populate("quali").populate("sprint").populate("race").populate("teammate")
        },
        allQuali: async () => {
            return Quali.find()
        },
        allSprint: async () => {
            return Sprint.find()
        },
        allRace: async () => {
            return Race.find()
        },
        leagueInviteCode: async (parent, { inviteCode }) => {
            return League.findOne({ inviteCode })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "race"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "race"
                        }
                    }
                })
        },
        pastLeagueResults: async (parent, { leagueName, year }) => {
            return League.findOne({ leagueName, year })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "race"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "race"
                        }
                    }
                })
        },
        leagueById: async (parent, _id) => {
            return await League.findById(_id)
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "race"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "race"
                        }
                    }
                })
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne",
                        populate: {
                            path: "race"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "quali"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "sprint"
                        }
                    }
                })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo",
                        populate: {
                            path: "race"
                        }
                    }
                })
        },
        team: async (parent, { teamName }) => {
            return Team.findOne({ teamName })
                .populate({
                    path: 'driverOne',
                    populate: {
                        path: "quali"
                    }
                })
                .populate({
                    path: 'driverOne',
                    populate: {
                        path: "sprint"
                    }
                })
                .populate({
                    path: 'driverOne',
                    populate: {
                        path: "race"
                    }
                })
                .populate({
                    path: 'driverTwo',
                    populate: {
                        path: "quali"
                    }
                })
                .populate({
                    path: 'driverTwo',
                    populate: {
                        path: "sprint"
                    }
                })
                .populate({
                    path: 'driverTwo',
                    populate: {
                        path: "race"
                    }
                })
                .populate('league')
        },
        driver: async (parent, { driverName }) => {
            return Driver.findOne({ driverName }).populate("quali").populate("sprint").populate("race").populate("teammate")
        },
        quali: async (parent, { raceName }) => {
            return Quali.find({ raceName })
        },
        sprint: async (parent, { raceName }) => {
            return Sprint.find({ raceName })
        },
        race: async (parent, { raceName }) => {
            return Race.find({ raceName })
        },
        freeAgents: async (parents, { leagueName, year }) => {
            const leagueData = await League.findOne({ leagueName, year })
                .populate({
                    path: "teams",
                    populate: {
                        path: "driverOne"
                    }
                }).populate({
                    path: "teams",
                    populate: {
                        path: "driverTwo"
                    }
                }).clone();
            const drivers = [];
            for (let i = 0; i < leagueData.teams.length; i++) {
                drivers.push(leagueData.teams[i].driverOne[0])
                drivers.push(leagueData.teams[i].driverTwo[0])
            }

            const allDrivers = await Driver.find()
                .populate("quali")
                .populate("sprint")
                .populate("race")

            function freeAgents(array1, array2) {
                return array1.filter(object1 => {
                    return !array2.some(object2 => {
                        return object1.driverName === object2.driverName
                    })
                })
            }
            const freeAgentDrivers = (freeAgents(allDrivers, drivers))
            return freeAgentDrivers;
        }
    },
    Mutation: {
        login: async (parents, { email, password }) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new AuthenticationError("This user does not exist")
            }
            const checkPassword = await user.isCorrectPassword(password)
            if (!checkPassword) {
                throw new AuthenticationError("Incorrect password entered, please try again")
            }
            const token = signToken(user)
            return { token, user }
        },
        signUp: async (parents, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { token, user }
        },
        createLeague: async (parents, { leagueName, inviteCode, teamName }, context) => {
            if (context.user) {
                const newTeam = await Team.create({ teamName, driverOne: [], driverTwo: [], league: [] })
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { teams: newTeam } },
                    { new: true }
                )
                const newLeague = await League.create({ leagueName, inviteCode, teams: newTeam })
                addLeagueToTeam(newLeague, newTeam._id)
                return newLeague
            } else {
                throw new AuthenticationError("User must be logged in to create a new league")
            }
            async function addLeagueToTeam(leagueData, teamId) {
                await Team.findOneAndUpdate(
                    { _id: teamId },
                    { $push: { league: leagueData } },
                    { new: true }
                )
                console.log("League added to Team")
            }

        },
        joinLeague: async (parents, { inviteCode, teamName }, context) => {
            if (context.user) {
                const newTeam = await Team.create({ teamName, driverOne: [], driverTwo: [], league: [] })
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { teams: newTeam } },
                    { new: true }
                )
                const leagueToJoin = await League.findOne({ inviteCode })
                if (leagueToJoin.teams.length > 10) {
                    throw new AuthenticationError("League has reached the maximum amount of teams allowed (10 teams)")
                } else {
                    await League.findOneAndUpdate(
                        { inviteCode },
                        { $addToSet: { teams: newTeam } },
                        { new: true }
                    )
                }
                return leagueToJoin
            } else {
                throw new AuthenticationError("User must be logged in to create a new league")
            }
        },
        addDriver: async (parents, { teamName, driverName }, context) => {
            if (context.user) {
                const driverData = await Driver.findOne({ driverName })
                    .populate("quali")
                    .populate("sprint")
                    .populate("race")
                // console.log(driverData)
                const teamData = await Team.findOne({ teamName })
                    .populate("driverOne")
                    .populate("driverTwo")
                if (teamData.driverOne.length === 0) {
                    await Team.findOneAndUpdate(
                        { teamName },
                        { $addToSet: { driverOne: driverData } },
                        { new: true }
                    )
                    return teamData
                } else if (teamData.driverOne.length > 0 && teamData.driverTwo.length === 0) {
                    await Team.findOneAndUpdate(
                        { teamName },
                        { $addToSet: { driverTwo: driverData } },
                        { new: true }
                    )
                    return teamData
                } else {
                    throw new AuthenticationError("Team already has the max number of drivers permitted")
                }
            } else {
                throw new AuthenticationError("User must be logged in to add a driver")
            }
        },
        addDropDriver: async (parents, { teamName, driverToDrop, driverToAdd }, context) => {
            // validate on client-side that driverToDrop must be driverOne or driverTwo string value
            if (context.user) {
                const driverToAddData = await Driver.findOne({ driverName: driverToAdd })



                if (driverToDrop === "driverOne") {
                    await Team.findOneAndUpdate(
                        { teamName },
                        { $set: { driverOne: [] } },
                        { new: true }
                    )

                    await Team.findOneAndUpdate(
                        { teamName },
                        { $addToSet: { driverOne: driverToAddData } },
                        { new: true }
                    )
                }

                if (driverToDrop === "driverTwo") {
                    await Team.findOneAndUpdate(
                        { teamName },
                        { $set: { driverTwo: [] } },
                        { new: true }
                    )

                    await Team.findOneAndUpdate(
                        { teamName },
                        { $addToSet: { driverTwo: driverToAddData } },
                        { new: true }
                    )
                }



                const teamData = await Team.findOne({ teamName })
                    .populate("driverOne")
                    .populate("driverTwo")


                return teamData
            } else {
                throw new AuthenticationError("User must be logged in to do this functionality")
            }
        },
        addQualiData: async (parents, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                if (userData.admin) {
                    const data = await addData();
                    console.log("Admin has seeded new quali data")
                    return data
                } else {
                    throw new AuthenticationError("Only an admin can add quali data")
                }
            } else {
                throw new AuthenticationError("Admin must be logged in to add quali data")
            }
            async function addData() {
                const qualiData = await Quali.create(args.qualiData)
                await Driver.findOneAndUpdate(
                    { driverName: args.qualiData.driverName },
                    { $push: { quali: qualiData } },
                    { new: true }
                )
                return qualiData
            }
        },
        addSprintData: async (parents, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                if (userData.admin) {
                    const data = await addData();
                    console.log("Admin seeded new sprint data");
                    return data;
                } else {
                    throw new AuthenticationError("Only an admin can add sprint data");
                }
            }
            async function addData() {
                const sprintData = await Sprint.create(args.sprintData)
                await Driver.findOneAndUpdate(
                    { driverName: args.sprintData.driverName },
                    { $push: { sprint: sprintData } },
                    { new: true }
                )
                return sprintData
            }
        },
        addRaceData: async (parents, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                if (userData.admin) {
                    const data = await addData();
                    console.log("Admin seeded new race data");
                    return data;
                } else {
                    throw new AuthenticationError("Only an admin can add race data");
                }
            }
            async function addData() {
                const raceData = await Race.create(args.raceData)
                await Driver.findOneAndUpdate(
                    { driverName: args.raceData.driverName },
                    { $push: { race: raceData } },
                    { new: true }
                )
                return raceData;
            }
        }
    }
}

module.exports = resolvers;