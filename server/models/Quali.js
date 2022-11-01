const { Schema, model } = require("mongoose");

const qualiSchema = new Schema(
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
        qualiFinishPosition: {
            type: Number,
            min: 1,
            max: 20
        },
        didNotFinish: {
            type: Boolean,
            required: true,
            default: false
        },
        aheadOfTeammate: {
            type: Boolean,
            required: true
        },
        roundFinish: {
            type: Number,
            min: 1,
            max: 3
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

qualiSchema.virtual("qualiScore").get(function () {
    let score = 0;
    switch (this.roundFinish) {
        case 1:
            score += 1;
            break;
        case 2:
            score += 2;
            break;
        case 3:
            score += 3;
            break;
    }
    switch (this.aheadOfTeammate) {
        case true:
            score += 2;
            break;
        case false:
            score -= 2;
            break;
    }
    switch (this.qualiFinishPosition) {
        case 1:
            score += 10;
            break;
        case 2:
            score += 9;
            break;
        case 3:
            score += 8;
            break;
        case 4:
            score += 7;
            break;
        case 5:
            score += 6;
            break;
        case 6:
            score += 5;
            break;
        case 7:
            score += 4;
            break;
        case 8:
            score += 3;
            break;
        case 9:
            score += 2;
            break;
        case 10:
            score += 1;
            break;
        default:
            score += 0;
            break;
    }
    if (this.didNotFinish) {
        score = -5;
    }
    return score;
})

const Quali = model("Quali", qualiSchema);

module.exports = Quali;