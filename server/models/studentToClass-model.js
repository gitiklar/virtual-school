
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const studentToClassSchema = new Schema({
    userId: { type: ObjectId, ref: 'User' } ,
    classId: { type: ObjectId, ref: 'Class' } ,
});

module.exports = mongoose.model('studentToClass', studentToClassSchema);
