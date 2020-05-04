const mongoose = require("mongoose");
const schema  = mongoose.Schema;

const studentSchema =  schema({
    name: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    subjects: {
        type: Array,
        required: true
    }
})

const Student = mongoose.model('student',studentSchema);
module.exports = Student;