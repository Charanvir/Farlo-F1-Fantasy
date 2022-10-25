const { Schema, model } = require("mongoose");

const qualiSchema = new Schema(
    {
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
            required: true
        },
        aheadOfTeammate: {
            type: Boolean,
            required: true
        },
        roundFinish: {
            type: Number,
            min: 1,
            max: 3
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
            getters: true,
            virtuals: true
        }
    }
)

const Quali = model("Quali", qualiSchema);

module.exports = Quali;