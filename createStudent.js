import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();
  const [student, setStudent] = useState({
    AdmNo: 0,
    studentName: '',
    grade: '',
    section: '',
  });




const createStudent = () => {
  axios.post("http://localhost:5000/students", student).then(()=>{
    window.location.reload(false);
  })
};

return (
  <>
    <h1>Add your data</h1>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Reg. Id"
        value={student.AdmNo}
        onChange={(event) => {
          setStudent({ ...student, AdmNo: event.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="Name"
        value={student.studentName}
        onChange={(event) => {
          setStudent({ ...student, studentName: event.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="Course"
        value={student.grade}
        onChange={(event) => {
          setStudent({ ...student, grade: event.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="Section"
        value={student.section}
        onChange={(event) => {
          setStudent({ ...student, section: event.target.value });
        }}
      />
      <Button variant="contained" color="primary" onClick={createStudent}>
        Submit
      </Button>
    </form>
  </>
);
}
