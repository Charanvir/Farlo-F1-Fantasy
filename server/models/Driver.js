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
        teammateName: {
            type: String,
            required: true,
            trim: true
        },
        teammate: [
            {
                type: Schema.Types.ObjectId,
                ref: "Driver"
            }
        ],
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
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

driverSchema.virtual("driverScore").get(function () {
    let score = 0;
    let qualiData = this.quali;
    for (let i = 0; i < qualiData.length; i++) {
        score += qualiData[i].qualiScore
    }
    let raceData = this.race;
    for (let i = 0; i < raceData.length; i++) {
        score += raceData[i].raceScore
    }
    return score;
})

const Driver = model("Driver", driverSchema);

module.exports = Driver;