const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const studentSchema = new Schema({
    regNo: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true,
        maxlength: 20
    },
    grade: {
        type: String,
        required: true
    },
    section: {
        type: String,
        default: 'A'
    }

},{ timestamps: true });




const Student = mongoose.model('Student', studentSchema);

module.exports = Student;