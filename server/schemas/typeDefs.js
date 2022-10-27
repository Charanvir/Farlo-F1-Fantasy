const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        driverOne: [Driver]
        driverTwo: [Driver]
        score: Float
    }

    type Driver {
        _id: ID
        driverName: String
        team: String
        teammate: [Driver]
        quali: [Quali]
        sprint: [Sprint]
        race: [Race]
        score: Float
    }

    type Quali {
        _id: ID
        driverName: String
        raceName: String
        qualiFinishPosition: Float
        didNotFinish: Boolean
        aheadOfTeammate: Boolean
        roundFinish: Float
        qualiScore: Float
    }

    type Sprint {
        _id: ID
        raceName: String
        sprintRacePosition: Float
        didNotFinish: Boolean
        aheadOfTeammage: Boolean
        fastestLap: Boolean
        disqualified: Boolean
        sprintScore: Float
    }

    type Race {
        _id: ID
        raceName: String
        racePosition: Float
        didNotFinish: Boolean
        aheadOfTeammage: Boolean
        fastestLap: Boolean
        disqualified: Boolean
        raceScore: Float
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        loggedInUser: User
        allUsers: [User]
        allDrivers: [Driver]
        allQuali: [Quali]
        allSprint: [Sprint]
        allRace: [Race]
        user(username: String!): User
        driver(driverName: String): Driver
        quali(raceName: String): [Quali]
        sprint(raceName: String): [Sprint]
        race(raceName: String): [Race]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        signUp(username: String!, email: String!, password: String!): Auth
        changeDriver(drivertoAdd: String!, driverToDrop: String!): User
    }
`

module.exports = typeDefs;