
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    AdmNo: Number,
    studentName: String,
    grade: String,
    section:{
        type: String,
        default: "A"
    },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;

