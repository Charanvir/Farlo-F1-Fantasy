import { gql } from "@apollo/client";

export const LOGGED_IN_USER = gql`
    query loggedInUser {
        loggedInUser {
            _id
            username
            email
            teams {
                _id
                teamName
                driverOne {
                    driverName
                }
                driverTwo {
                    driverName
                }
                league {
                    leagueName
                }
            }
            admin
        }
    }
`;

export const ALL_LEAGUES = gql`
    query allLeagues {
        allLeagues {
            _id
            leagueName
            year
            teams {
                _id
                teamName
                driverOne {
                    driverName
                    driverScore
                } 
                driverTwo {
                    driverName
                    driverScore
                }
                teamScore
            }
            standings {
                _id
                teamName
                driverOne {
                    driverName
                    driverScore
                } 
                driverTwo {
                    driverName
                    driverScore
                }
                teamScore
            }
        }
    }
`;

export const ALL_DRIVERS = gql`
    query allDrivers {
        allDrivers {
            _id
            driverName
            team
            teammateName
            teammate {
                driverName
                team
                driverScore
            }
            driverScore
        }
    }
`;

export const ALL_QUALI = gql`
    query allQuali {
        allQuali {
            _id
            driverName
            raceName
            qualiScore
        }
    }
`;

export const ALL_SPRINT = gql`
    query allSprint {
        allSprint {
            _id
            driverName
            raceName
            sprintScore
        }
    }
`;

export const ALL_RACE = gql`
    query allRace {
        allRace {
            _id
            driverName
            raceName
            raceScore
        }
    }
`;

export const LEAGUE_INVITE_CODE = gql`
    query leagueInviteCode($inviteCode: String) {
        leagueInviteCode(inviteCode: $inviteCode) {
            _id
            teamName
            teamScore
        }
    }
`;

export const PAST_LEAGUE_RESULTS = gql`
    query pastLeagueResults($leagueName: String, $year: Float) {
        pastLeagueResults(leagueName: $leagueName, year: $year) {
            _id
            teamName
            driverOne {
                driverName
                driverScore
                quali {
                    _id
                    qualiScore
                }
                sprint {
                    _id
                    sprintScore
                }
                race {
                    _id
                    raceScore
                }
            }
            driverTwo {
                driverName
                driverScore
                quali {
                    _id
                    qualiScore
                }
                sprint {
                    _id
                    sprintScore
                }
                race {
                    _id
                    raceScore
                }
            }
            standings {
                teamName
                teamScore
            }
        }
    }
`;

export const GET_LEAGUE_ID = gql`
    query leagueById($id: ID!) {
        leagueById(_id: $id) {
            _id
            leagueName
        }
    }
`;

export const SINGLE_USER = gql`
    query user($username: String!) {
        user(username: $usernam) {
            _id
            username
            email
            teams {
                _id
                teamName
                driverOne {
                    driverName
                }
                driverTwo {
                    driveName
                }
                league {
                    leagueName
                }
            }
        }
    }
`;

export const SINGLE_TEAM = gql`
    query team($teamName: String!) {
        team(teamName: $teamName) {
            _id
            teamName
            driverOne {
                _id
                driverName
                driverScore
            }
            driverTwo {
                _id
                driverName
                driverScore
            }
            teamScore
            league {
                _id
                leagueName
                year
            }
        }
    }
`;

export const SINGLE_DRIVER = gql`
    query driver($driverName: String!) {
        driver(driverName: $driverName) {
            _id
            driverName
            team
            teammateName
            teammate {
                driverName
            }
            quali {
                _id
                raceName
                qualiFinishPosition
                didNotFinish
                aheadOfTeammate
                roundFinish
                qualiScore
            }
            sprint {
                _id
                raceName
                sprintRacePosition
                didNotFinish
                aheadOfTeammate
                disqualified
                startPosition
                sprintScore
            }
            race {
                _id
                raceName
                racePosition
                didNotFinish
                fastestLap
                disqualified
                startPositions
                raceScore
            }
            driverScore
        }
    }
`;

export const SINGLE_QUALI = gql`
    query quali($raceName: String!) {
        quali(raceName: $raceName) {
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

export const SINGLE_SPRINT = gql`
    query sprint($raceName: String!) {
        sprint(raceName: $raceName) {
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

export const SINGLE_RACE = gql`
    query race($raceName: String!) {
        race(raceName: $raceName) {
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

export const FREE_AGENTS = gql`
    query freeAgents($leagueName: String!, year: Float!) {
        freeAgents(leagueName: $leagueName, year: $year) {
            _id
            driverName
            team
            teammate {
                teammateName
            }
            quali {
                raceName
                qualiScore
            }
            sprint {
                raceName
                sprintScore
            }
            race {
                raceName
                raceScore
            }
            driverScore
        }
    }
`;