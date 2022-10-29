const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        driverOne: [Driver]
        driverTwo: [Driver]
        score: Float
        userScore: Float
    }

    type League {
        _id: ID
        leagueName: String
        year: Float
        users: [User]
        standings: [User]
    }

    type Driver {
        _id: ID
        driverName: String
        team: String
        teammateName: String
        teammate: [Driver]
        quali: [Quali]
        sprint: [Sprint]
        race: [Race]
        driverScore: Float
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
        driverName: String
        raceName: String
        sprintRacePosition: Float
        didNotFinish: Boolean
        aheadOfTeammate: Boolean
        disqualified: Boolean
        startPosition: Float
        sprintScore: Float
    }

    type Race {
        _id: ID
        driverName: String
        raceName: String
        racePosition: Float
        didNotFinish: Boolean
        aheadOfTeammate: Boolean
        fastestLap: Boolean
        disqualified: Boolean
        startPosition: Float
        raceScore: Float
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        loggedInUser: User
        allLeagues: [League]
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