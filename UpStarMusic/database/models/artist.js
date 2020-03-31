// Todo: Create Artist Model
const mongoose = require('mongoose');
// eslint-disable-next-line import/newline-after-import
const AlbumScehma = require('./album');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums: [
        AlbumScehma
    ]
});
const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
