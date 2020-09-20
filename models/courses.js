const { model, Schema } = require('mongoose');

const courseSchema = new Schema({
    title: String,
    videoUrl: String,
    videoDescription: String,
    level: String,
    subject: String,
    language: String,
    country: String,
    createdBy: String,
    UpdatedAt: String,
    thumbnailUrl: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Owner'
    }
});
module.exports = model('Course', courseSchema);