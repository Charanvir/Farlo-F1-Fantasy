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
        quali: [Quali]
        sprint: [Sprint]
        race: [Race]
    }

    type Quali {
        _id: ID
        raceName: String
        qualiFinishPosition: Float
        didNotFinish: Boolean
        aheadOfTeammage: Boolean
        roundFinish: Float
        driver: [Driver]
    }

    type Sprint {
        raceName: String
        sprintRacePosition: Float
        didNotFinish: Boolean
        aheadOfTeammage: Boolean
        fastestLap: Boolean
        disqualified: Boolean
        driver: [Driver]
    }

    type Race {
        raceName: String
        racePosition: Float
        didNotFinish: Boolean
        aheadOfTeammage: Boolean
        fastestLap: Boolean
        disqualified: Boolean
        driver: [Driver]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allUsers: [User]
        loggedInUser: User
        user(username: String!): User
        allDrivers: [Driver]
        allQuali: [Quali]
        allSprint: [Sprint]
        allRace: [Race]
        driver(driverName: String): Driver
        quali(raceName: String): Quali
        sprint(raceName: String): Sprint
        race(raceName: String): Race
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        signUp(username: String!, email: String!, password: String!): Auth
        changeDriver(drivertoAdd: String!, driverToDrop: String!): User
    }
`

module.exports = typeDefs;