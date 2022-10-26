const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://charanvir123:Capsfan123@cluster0.r1vb1cu.mongodb.net/F1_Fantasy?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;