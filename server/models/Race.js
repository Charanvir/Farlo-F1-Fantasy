const { Schema, model } = require("mongoose");

const raceSchema = new Schema(
    {
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
        driver: [
            {
                type: Schema.Types.ObjectId,
                ref: "Race"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

raceSchema.virtual("positionChange").get(function () {
    const previousPosition = null;
    if (!this.driver.sprintRaceName.sprintRacePosition) {
        previousPosition = this.driver.qualiRaceName.qualiRacePosition
    } else {
        previousPosition = this.driver.sprintRaceName.sprintRacePosition
    }
    return relativeToPrevious = this.racePosition - previousPosition
})