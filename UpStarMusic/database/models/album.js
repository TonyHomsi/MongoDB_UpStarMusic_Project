// Todo: create Album Schema
// eslint-disable-next-line import/newline-after-import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSolid: Number,
    numberTracks: Number,
    image: String,
    revenue: Number
});

module.exports = AlbumSchema;
