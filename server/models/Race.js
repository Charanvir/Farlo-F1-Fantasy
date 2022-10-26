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
                ref: "Driver"
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

raceSchema.virtual("startingPosition").get(function () {
    const startPositions = [];
    startPositions.push(this.driver.sprint);
    startPositions.push(this.driver.quali);
    return startPositions;
})

const Race = model("Race", raceSchema);

module.exports = Race;