
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    //classId
    className: { type: String , required: true },
    level: { type: String ,  required: true },
    grade: { type: String ,  required: true },
});

module.exports = mongoose.model('Class', classSchema);
