const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/farlo_f1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;