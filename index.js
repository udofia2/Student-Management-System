const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/studentsDb', {useNewUrlParser: true, useUnifiedTopology: true });

const Student = require('./models/studnets');

const addStudent = student => {
    Student.create(student)
    .then(student => {
        console.info('New student added')
        // db.close()
        process.exit(0)
    })
    .catch(err => console.info(err))
}

const findStudent = search => {
    let student = new RegExp(search, 'i');
    Student.find({$or: [
        {firstname: student},
        {lastname: student},
        {email: student},
        {phone: student},
        {gender: student}
    ]})
    .then(student => {
        console.info(student);
        (student.length > 1) ? 
        console.info(`${student.length} students found`)
        : console.info(`${student.length} student found`)
        // db.close
        process.exit(0)
    })
    .catch(err => console.info(err))

}

const updateStudent = (_id, student) => {
    Student.updateOne({ _id }, student)
    .then(students => {
        console.info(`Student with ID ${_id} updated`);
        // db.close();
        process.exit(0)
    })
    .catch(err => console.info(err))
}

const removeStudent = _id => {
    Student.remove({ _id })
    .then(student => {
        console.info('Student removed');
        // db.close()
        process.exit()
    })
    .catch(err => console.info(err))
}

const listStudent = () => {
    Student.find()
    .then(students => {
        console.info(students)
        console.info(`${students.length} students found`)
        // db.connect.close()
        process.exit()
    })
    .catch(err => console.info(err))
}

module.exports = {
    addStudent,
    findStudent,
    updateStudent,
    removeStudent,
    listStudent
}