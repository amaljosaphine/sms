import { Container, Grow, AppBar, Typography, Grid } from "@material-ui/core";
import Student from "./components/showStudent/showStudent";
import useStyles from "./styles"
import CreateStudent from "./components/createStudent/createStudent";
import "./App.css";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container max-width="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            School Management System
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <Student />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <CreateStudent />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;







// import logo from './logo.svg';
// // reactComponents
// import { Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
// import Student from './components/showStudent/showStudent.js';
// import Create from './components/createStudent/createStudent.js'

// import './App.css';
// import useStyles from './styles';

// function App() {
//   const classes=useStyles();
//   return (
//     <div className="App">
//     <Container maxWidth="lg">

// <AppBar className={classes.AppBar} position="static" color ="inherit">
// <Typography className={classes.heading} variant="h2" align ="center">Students Data</Typography>

// </AppBar>
// <br/>
// <Grow in>
// <Container>
// <Grid container justify="space-between" alignItems="stretch">
// <Grid item xs={12} sm={7}>
// <AppBar className={classes.AppBar} position="static" color ="inherit">

// <Student/>

// </AppBar>

// </Grid>
// <Grid item xs={12} sm={4}>

// <AppBar className={classes.AppBar} position="static" color ="inherit">

//   <Create></Create>

// </AppBar>


// </Grid>






// </Grid>

// </Container>


// </Grow>
//     </Container>


//     </div>
//   );
// }

// export default App;
