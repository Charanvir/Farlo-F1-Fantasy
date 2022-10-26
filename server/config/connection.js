const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.r1vb1cu.mongodb.net/F1_Fantasy?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;