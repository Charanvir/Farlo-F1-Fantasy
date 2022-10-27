const { Schema, model } = require("mongoose");

const sprintSchema = new Schema(
    {
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
            getters: true,
            virtuals: true
        }
    }
)

sprintSchema.virtual("sprintScore").get(function () {

})

const Sprint = model("Sprint", sprintSchema);

module.exports = Sprint;