const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        teams: [Team]
        admin: Boolean
    }

    type Team {
        _id: ID
        teamName: String
        driverOne: [Driver]
        driverTwo: [Driver]
        teamScore: Float
        league: [League]
    }

    type League {
        _id: ID
        leagueName: String
        year: Float
        teams: [Team]
        standings: [Team]
    }

    type Driver {
        _id: ID
        driverName: String
        team: String,
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
        leagueInviteCode(inviteCode: String!): League
        pastLeagueResults(leagueName: String, year: Float): League
        leagueById(_id: String): League
        user(username: String!): User
        team(teamName: String!): Team
        driver(driverName: String): Driver
        quali(raceName: String): [Quali]
        sprint(raceName: String): [Sprint]
        race(raceName: String): [Race]
        freeAgents(leagueName: String, year: Float): [Driver]
    }

    input QualiData {
        driverName: String
        raceName: String
        qualiFinishPosition: Float
        didNotFinish: Boolean
        aheadOfTeammate: Boolean
        roundFinish: Float 
    }

    input SprintData {
        driverName: String
        raceName: String
        sprintRacePosition: Float
        didNotFinish: Boolean
        aheadOfTeammate: Boolean
        disquaified: Boolean
        startPosition: Float
    }

    input RaceData {
        driverName: String
        raceName: String
        racePosition: Float
        didNotFinish: Boolean
        aheadOfTeammate: Boolean
        fastestLap: Boolean
        disqualified: Boolean
        startPosition: Float
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        signUp(username: String!, email: String!, password: String!): Auth
        createLeague(leagueName: String!, inviteCode: String!, teamName: String!): League
        joinLeague(inviteCode: String!, teamName: String!): League
        addDriver(teamName: String!, driverName: String!): Team
        addDropDriver(teamName: String!, driverToDrop: String!, driverToAdd: String!): Team
        addQualiData(qualiData: QualiData): Quali
        addSprintData(sprintData: SprintData): Sprint
        addRaceData(raceData: RaceData): Race
    }
`

module.exports = typeDefs;