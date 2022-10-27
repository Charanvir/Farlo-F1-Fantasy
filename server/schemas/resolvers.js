const { User, Driver, Quali, Sprint, Race } = require("../models");
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
        allUsers: async () => {
            return User.find().populate('driverOne').populate("driverTwo");
        },
        allDrivers: async () => {
            return Driver.find().populate("quali").populate("sprint").populate("race");
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
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("driverOne").populate("driverTwo");
        },
        driver: async (parent, { driverName }) => {
            return Driver.findOne({ driverName }).populate("quali").populate("sprint").populate("race")
        },
        quali: async (parent, { raceName }) => {
            console.log(raceName)
            return Quali.find({ raceName }).sort({ qualiScore: -1 })
        },
        sprint: async (parent, { raceName }) => {
            return Sprint.find({ raceName })
        },
        race: async (parent, { raceName }) => {
            return Race.find({ raceName })
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
        }
    }
}

module.exports = resolvers;