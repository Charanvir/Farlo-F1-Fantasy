const { Schema, model } = require("mongoose");

const sprintSchema = new Schema(
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
        sprintRacePosition: {
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
        disqualified: {
            type: Boolean,
            required: true
        },
        startPosition: {
            type: Number,
            required: true
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

sprintSchema.virtual("sprintScore").get(function () {
    let score = 0;
    relativePositioning = this.sprintRacePosition - this.startPosition;
    score = score + (-relativePositioning * 2);
    switch (this.aheadOfTeammate) {
        case true:
            score += 3;
            break;
        case false:
            score -= 3;
            break;
    }
    if (this.disqualified) {
        score -= 20;
    }
    switch (this.sprintRacePosition) {
        case 1:
            score += 5;
            break;
        case 2:
            score += 4;
            break;
        case 3:
            score += 3;
            break;
        case 4:
            score += 2;
            break;
        case 5:
            score += 1;
            break;
        default:
            score = score;
            break;
    }
    if (this.didNotFinish) {
        score = -5;
    } else {
        score += 1;
    }
    return score;
})

const Sprint = model("Sprint", sprintSchema);

module.exports = Sprint;