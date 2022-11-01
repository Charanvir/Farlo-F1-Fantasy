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
            type: Number,
            required: true
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
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
    let users = this.users;
    users.sort((a, b) => b.userScore - a.userScore);
    return users;
});

const League = model("League", leagueSchema);

module.exports = League;