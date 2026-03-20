const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    grade: { type: String, enum:['Grade 7','Grade 8','Grade 9'], required:true },
    term: { type: String, required:true },
    name: { type: String, required:true },
    mathematics: Number,
    english: Number,
    kiswahili: Number,
    integratedScience: Number,
    agriculture: Number,
    socialStudies: Number,
    preTechnical: Number,
    religiousStudies: Number,
    creativeArts: Number,
    comment: String
}, { timestamps:true });

module.exports = mongoose.model('Student', studentSchema);
