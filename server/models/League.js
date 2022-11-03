const { Schema, model } = require("mongoose");

const leagueSchema = new Schema(
    {
        leagueName: {
            type: String,
            required: true,
            trim: true
        },
        year: {
            type: Number,
            min: 2022,
            default: new Date().getFullYear()
        },
        inviteCode: {
            type: String,
            required: true,
            min: 8
        },
        teams: [
            {
                type: Schema.Types.ObjectId,
                ref: "Team"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

leagueSchema.virtual("standings").get(function () {
    let teams = this.teams;
    teams.sort((a, b) => b.teamScore - a.teamScore);
    return teams;
});

const League = model("League", leagueSchema);

module.exports = League;