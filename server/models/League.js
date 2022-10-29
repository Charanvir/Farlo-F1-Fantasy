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
    return users;
});

const League = model("League", leagueSchema);

module.exports = League;