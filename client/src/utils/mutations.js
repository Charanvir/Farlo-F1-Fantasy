import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String, $password: String) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SIGN_UP = gql`
    mutation signUp($usename: String!, email: String!, password: String!) {
        signUp(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_LEAGUE = gql`
    mutation createLeague($leagueName: String, inviteCode: String, teamName: String!) {
        createLeague(leagueName: $leagueName, inviteCode: $inviteCode, teamName: $teamName) {
            _id
            leagueName
            year
            teams: {
                teamName
            }
        }
    }
`;

export const JOIN_LEAGUE = gql`
    mutation joinLeague($leagueName: String!, teamName: String!) {
        joinLeague(leagueName: $leagueName, teamName: $teamName) {
            _id
            leagueName
            year
            teams: {
                _id
                teamName
            }
        }
    }
`;

export const ADD_DRIVER = gql`
    mutation addDriver($teamName: String!, driverName: String!) {
        addDriver(teamName: $teamName, driverName: $driverName) {
            _id
            teamName
            league: {
                _id
                leagueName
            }
        }
    }
`;

export const ADD_DROP_DRIVER = gql`
    mutation addDropDriver($teamName: String!, $driverToDrop: String!, $driverToAdd: String!) {
        addDropDriver(teamName: $teamName, driverToDrop: $driverToDrop, driverToAdd: $driverToAdd) {
            _id
            teamName
            league : {
                _id
                leagueName
            }
        }
    }
`;

export const ADD_QUALI_DATA = gql`
    mutation addQualiData($qualiData: QualiData) {
        addQualiData(qualiData: $qualiData) {
            _id
            driverName
            raceName
            qualiFinishPosition
            didNotFinish
            aheadOfTeammate
            roundFinish
            qualiScore
        }
    }
`;

export const ADD_SPRINT_DATA = gql`
    mutation addSprintData($sprintData: SprintData) {
        addSprintData(springData: $sprintData) {
            _id
            driverName
            raceName
            springRacePosition
            didNotFinish
            aheadOfTeammate
            disqualified
            startPosition
            sprintScore
        }
    }
`;

export const ADD_RACE_DATA = gql`
    mutation addRaceData($raceData: RaceData) {
        addRaceData(raceData: $raceData) {
            _id
            driverName
            raceName
            racePosition
            didNotFinish
            aheadOfTeammate
            fastestLap
            disqualified
            startPosition
            raceScore
        }
    }
`;