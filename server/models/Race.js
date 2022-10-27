const { Schema, model } = require("mongoose");

const raceSchema = new Schema(
    {
        driverName: {
            type: String,
            required: true,
            trim: true
        },
        raceName: {
            type: String,
            required: true,
            trim: true
        },
        racePosition: {
            type: Number,
            min: 1,
            max: 20
        },
        didNotFinish: {
            type: Boolean,
            required: true
        },
        aheadOfTeammate: {
            type: Boolean,
            required: true
        },
        fastestLap: {
            type: Boolean,
            required: true
        },
        disqualified: {
            type: Boolean,
            required: true
        },
        startPosition: {
            type: Number,
            required: true
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

// raceFinish: true = 1
// relativePositionToStart: 2X
// aheadOfTeammate: true = 3, false = -3
// fastestLap: true = 5
// didNotFinish: true = -5
// disqualified: true = -20

raceSchema.virtual("raceScore").get(async function () {
    let score = 0;
    relativePositioning = this.racePosition - this.startPosition
    score = score + (-relativePositioning * 2);
    switch (this.aheadOfTeammate) {
        case true:
            score += 3;
            break;
        case false:
            score -= 3;
            break;
    }
    if (this.fastestLap) {
        score += 5;
    }
    if (this.disqualified) {
        score -= 20;
    }
    switch (this.racePosition) {
        case 1:
            score += 10;
            break;
        case 2:
            score += 9
            break;
        case 3:
            score += 8
            break;
        case 4:
            score += 7
            break;
        case 5:
            score += 6
            break;
        case 6:
            score += 5
            break;
        case 7:
            score += 4
            break;
        case 8:
            score += 3
            break;
        case 9:
            score += 2
            break;
        case 10:
            score += 1
            break;
        default:
            score = score
            break;
    }
    if (this.didNotFinish) {
        score = -5;
    } else {
        score += 1
    }
    return score;
})

const Race = model("Race", raceSchema);

module.exports = Race;