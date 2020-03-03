const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title:  String ,
    entry:  String,
    readyToEat: { type: Boolean, default: true}
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;