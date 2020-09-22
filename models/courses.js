const { model, Schema, Mongoose } = require('mongoose');

const courseSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    title: String,
    description: String,
    level: String,
    subject: String,
    language: String,
    country: String,
    createdBy: String,
    updatedAt: String,
    thumbnailUrl: String,
    url: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users', required: true
    }
});
module.exports = model('Course', courseSchema);