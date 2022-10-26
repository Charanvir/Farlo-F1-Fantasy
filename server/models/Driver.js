const { Schema, model } = require("mongoose");

const driverSchema = new Schema(
    {
        driverName: {
            type: String,
            required: true,
            trim: true
        },
        team: {
            type: String,
            required: true,
            trim: true
        },
        quali: [
            {
                type: Schema.Types.ObjectId,
                ref: "Quali"
            }
        ],
        sprint: [
            {
                type: Schema.Types.ObjectId,
                ref: "Sprint"
            }
        ],
        race: [
            {
                type: Schema.Types.ObjectId,
                ref: "Race"
            }
        ],
        score: {
            type: Number
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

const Driver = model("Driver", driverSchema);

module.exports = Driver;