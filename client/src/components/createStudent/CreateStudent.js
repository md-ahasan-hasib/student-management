import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [student, setStudent] = useState({
    regNo: 0,
    fullName: '',
    grade: '',
    section: ''
  });

  const createStudent = () => {
    axios.post('http://localhost:5000/students', student).then( () => {
        window.location.reload(false);
    })
  }

  return (
    <>

    <h2>Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Reg. No." variant="outlined" value={student.regNo} onChange={(event) => {
        setStudent({ ...student, regNo: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Student Name" variant="outlined" value={student.fullName} onChange={(event) => {
        setStudent({ ...student, fullName: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
        setStudent({ ...student, grade: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) => {
        setStudent({ ...student, section: event.target.value})
      }} />
      
      <Button variant="contained" color="primary" onClick={ createStudent }>
        Create
      </Button>
    </form>

    </>
  );
}
