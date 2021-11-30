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

export default function createUser() {
  const classes = useStyles();
  const [user, setUser] = useState({
    Name: 0,
    Role: '',
    Id: '',
    Password:''
    
  });




const createUser = () => {
  axios.post("http://localhost:5000/users", user).then(()=>{
    window.location.reload(false);
  })
};

return (
  <>
    <h1>Add your User data</h1>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Name"
        value={user.Name}
        onChange={(event) => {
            setUser({ ...user, Name: event.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="Role"
        value={user.Role}
        onChange={(event) => {
            setUser({ ...user, Role: event.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="Password"
        value={user.Password}
        onChange={(event) => {
            setUser({ ...user, Password: event.target.value });
        }}
      />
      
      <Button variant="contained" color="primary" onClick={createUser}>
        Submit
      </Button>
    </form>
  </>
);
}
