const { Quali, Sprint } = require("../../models/index");

const raceBahrainData = [
    {
        driverName: "Charles Leclerc",
        raceName: "Bahrain",
        racePosition: 1,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: true,
        disqualified: false,
        startPosition: 1
    },
    {
        driverName: "Max Verstappen",
        raceName: "Bahrain",
        racePosition: 19,
        didNotFinish: true,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 2
    },
    {
        driverName: "Carlos Sainz",
        raceName: "Bahrain",
        racePosition: 2,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 3
    },
    {
        driverName: "Sergio Perez",
        raceName: "Bahrain",
        racePosition: 18,
        didNotFinish: true,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 4
    },
    {
        driverName: "Lewis Hamilton",
        raceName: "Bahrain",
        racePosition: 3,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 5
    },
    {
        driverName: "Valterri Bottas",
        raceName: "Bahrain",
        racePosition: 6,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 6
    },
    {
        driverName: "Kevin Magnussen",
        raceName: "Bahrain",
        racePosition: 5,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 7
    },
    {
        driverName: "Fernando Alonso",
        raceName: "Bahrain",
        racePosition: 9,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 8
    },
    {
        driverName: "George Russel",
        raceName: "Bahrain",
        racePosition: 4,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 9
    },
    {
        driverName: "Pierre Gasly",
        raceName: "Bahrain",
        racePosition: 20,
        didNotFinish: true,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 10
    },
    {
        driverName: "Esteban Ocon",
        raceName: "Bahrain",
        racePosition: 7,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 11
    },
    {
        driverName: "Mick Schumacher",
        raceName: "Bahrain",
        racePosition: 11,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 12
    },
    {
        driverName: "Lando Norris",
        raceName: "Bahrain",
        racePosition: 15,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 13
    },
    {
        driverName: "Alexander Albon",
        raceName: "Bahrain",
        racePosition: 13,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 14
    },
    {
        driverName: "Zhou Guanyu",
        raceName: "Bahrain",
        racePosition: 10,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 15
    },
    {
        driverName: "Yuki Tsunoda",
        raceName: "Bahrain",
        racePosition: 8,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 16
    },
    {
        driverName: "Nico Hulkenberg",
        raceName: "Bahrain",
        racePosition: 17,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 17
    },
    {
        driverName: "Daniel Ricciardo",
        raceName: "Bahrain",
        racePosition: 14,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 18
    },
    {
        driverName: "Lance Stroll",
        raceName: "Bahrain",
        racePosition: 12,
        didNotFinish: false,
        aheadOfTeammate: true,
        fastestLap: false,
        disqualified: false,
        startPosition: 19
    },
    {
        driverName: "Nicholas Latifi",
        raceName: "Bahrain",
        racePosition: 16,
        didNotFinish: false,
        aheadOfTeammate: false,
        fastestLap: false,
        disqualified: false,
        startPosition: 20
    }
]

module.exports = raceBahrainData;