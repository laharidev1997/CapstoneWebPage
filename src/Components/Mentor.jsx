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
      color: theme.palette.text.secondary,
      display: 'flex',
      padding: "16px",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }));
const Mentor = () => {
    const classes = useStyles();
    return (
        <div className='container mt-3-custom'>
            <h1>Mentors</h1>
                    
    <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            
            <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = "/Said.jpg" style={{ width: '100%', marginTop: '-10px' }} alt="lahari"></img>
            </div>
            <h4>Dr. Said Bettayeb</h4>
            <h6>Professor of CS and CIS</h6>
            <h6>College of Science and Engineering</h6>
            <h6>Bettayeb@uhcl.edu</h6>
            <h6>Office: UHCL B3611.14</h6>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = "/Irwan.jpeg" style={{ width: '100%', marginTop: '-10px' }} alt="lahari"></img>
            </div>
            <h4>Irwan Tantu</h4>
            <h6>Principal Project Engineer</h6>
            <h6>tQ Automation</h6>
            <h6>irwan@tqautomation.com</h6>
            <h6>Office: Houston</h6>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                <img src = "/iqbal.jpeg" style={{ width: '100%', marginTop: '-10px' }} alt="lahari"></img>
            </div>
            <h4>Iqbal Latheef</h4>
            <h6>Managing Partner</h6>
            <h6>tQ Automation</h6>
            <h6>iqbal@tqautomation.com</h6>
            <h6>Office: Houston</h6>
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
      </Grid>
        </div>
    )
}
export default Mentor