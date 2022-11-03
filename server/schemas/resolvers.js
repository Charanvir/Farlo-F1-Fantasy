const { User, Driver, Quali, Sprint, Race, League, Team } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        loggedInUser: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .populate('driverOne').populate("driverTwo");

                return userData;
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
        freeAgents: async () => {
            return Driver.find({ drafted: false })
                .populate("quali")
                .populate("sprint")
                .populate("race")
                .populate("teammate")
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
                const newTeam = await Team.create({ teamName, driverOne: [], driverTwo: [] })
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { teams: newTeam } },
                    { new: true }
                )
                const newLeague = await League.create({ leagueName, inviteCode, teams: newTeam })
                return newLeague
            } else {
                throw new AuthenticationError("User must be logged in to create a new league")
            }

        },
        joinLeague: async (parents, { inviteCode, teamName }, context) => {
            if (context.user) {
                const newTeam = await Team.create({ teamName, driverOne: [], driverTwo: [] })
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
        }
    }
}

module.exports = resolvers;