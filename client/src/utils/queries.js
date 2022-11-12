import { gql } from "@apollo/client";

export const LOGGED_IN_USER = gql`
    query Query {
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
            }
            admin
        }
    }
`;

export const ALL_LEAGUES = gql`
    query Query {
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
    query Query {
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
    query Query {
        allQuali {
            _id
            driverName
            raceName
            qualiScore
        }
    }
`;

export const ALL_SPRINT = gql`
    query Query {
        allSprint {
            _id
            driverName
            raceName
            sprintScore
        }
    }
`;

export const ALL_RACE = gql`
    query Query {
        allRace {
            _id
            driverName
            raceName
            raceScore
        }
    }
`;

export const LEAGUE_INVITE_CODE = gql`
    query Query($inviteCode: String) {
        leagueInviteCode(inviteCode: $inviteCode) {
            _id
            teamName
            teamScore
        }
    }
`;

export const PAST_LEAGUE_RESULTS = gql`
    query Query($leagueName: String, $year: Float) {
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
            }
            teamScore
        }
    }
`;

