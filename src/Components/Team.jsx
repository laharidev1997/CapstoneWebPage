import React from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import './mentor.css'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
const Team = () => {
    const classes = useStyles();
    return (
        <div className='container mt-3-custom'>
            <h1>Mentors</h1>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src = "/profile.png" alt=""></img>
                    <h4>Lahari Devaraju</h4>
                    <h6>Student at UHCL</h6>
                    <h6>2817398685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                    <h6>oFFICE</h6>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src = "/profile.png" alt=""></img>
                    <h4>Lahari Devaraju</h4>
                    <h6>Student at UHCL</h6>
                    <h6>2817398685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                    <h6>oFFICE</h6>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src = "/profile.png" alt=""></img>
                    <h4>Lahari Devaraju</h4>
                    <h6>Student at UHCL</h6>
                    <h6>2817398685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                    <h6>oFFICE</h6>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src = "/profile.png" alt=""></img>
                    <h4>Lahari Devaraju</h4>
                    <h6>Student at UHCL</h6>
                    <h6>2817398685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                    <h6>oFFICE</h6>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img src = "/profile.png" alt=""></img>
                    <h4>Lahari Devaraju</h4>
                    <h6>Student at UHCL</h6>
                    <h6>2817398685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                    <h6>oFFICE</h6>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img src = "/profile.png" alt=""></img>
                    <h4>Lahari Devaraju</h4>
                    <h6>Student at UHCL</h6>
                    <h6>2817398685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                    <h6>oFFICE</h6>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img src = "/profile.png" alt=""></img>
                    <h4>Lahari Devaraju</h4>
                    <h6>Student at UHCL</h6>
                    <h6>2817398685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                    <h6>oFFICE</h6>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Team