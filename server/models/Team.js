const { Schema, model } = require("mongoose");

const teamSchema = new Schema(
    {
        teamName: {
            type: String,
            required: true,
            trim: true
        },
        driverOne: [
            {
                type: Schema.Types.ObjectId,
                ref: "Driver"
            }
        ],
        driverTwo: [
            {
                type: Schema.Types.ObjectId,
                ref: "Driver"
            }
        ],
        league: [
            {
                type: Schema.Types.ObjectId,
                ref: "League"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

teamSchema.virtual("teamScore").get(function () {
    let driverOneScore = this.driverOne[0].driverScore;
    let driverTwoScore = this.driverTwo[0].driverScore;
    let teamScore = driverOneScore + driverTwoScore;
    return teamScore;
})

const Team = model("Team", teamSchema);

module.exports = Team;