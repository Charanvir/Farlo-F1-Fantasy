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
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

raceSchema.virtual("raceScore").get(function () {

})

const Race = model("Race", raceSchema);

module.exports = Race;