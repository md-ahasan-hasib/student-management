const express = require('express');
const router = express.Router();
const Student = require('../models/studentSchema');

router.get('/', async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).json(allStudents);
 
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
});

router.post('/', async (req, res) => {
    let student = new Student({
        regNo: req.body.regNo,
        fullName: req.body.fullName,
        grade: req.body.grade,
        section: req.body.section
    })
    const response = await student.save();

    if(!response){ 
        return res.status(409).send('Student is not created!')
    } else {
        res.status(201).json(response)
    }
});

router.delete('/:id', async (req, res) => {
   const id = req.params.id;
    try {
        await Student.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;