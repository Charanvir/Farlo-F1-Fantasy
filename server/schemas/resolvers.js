const { User, Driver, Quali, Sprint, Race } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        allUsers: async () => {
            return User.find().populate('driverOne').populate("driverTwo");
        },
        loggedInUser: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .populate('driverOne').populate("driverTwo");

                return userData;
            }
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