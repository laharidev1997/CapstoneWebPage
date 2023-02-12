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
const data = [
  {
      "img": require('../res/Said1.jpeg'),
      "professorName": "Dr. Said Bettayeb",
      "designation": "Professor of CS and CIS",
      "college": "College of Science and Engineering",
      "email": "Bettayeb@uhcl.edu",
      "office": "Office: UHCL B3611.14"
  },
  {
      "img": require('../res/Irwan.jpeg'),
      "professorName": "Irwan Tantu",
      "designation": "Principal Project Engineer",
      "college": "tQ Automation",
      "email": "irwan@tqautomation.com",
      "office": "Office: Houston"
  },
  {
      "img": require('../res/iqbal.jpeg'),
      "professorName": "Iqbal Latheef",
      "designation": "Managing Partner",
      "college": "tQ Automation",
      "email": "iqbal@tqautomation.com",
      "office": "Office: Houston"
  },
  {
      "img": require('../res/profile.png'),
      "professorName": "Arzul Sudarmin",
      "designation": "Technical Lead",
      "college": "tQ Automation",
      "email": "azrul@tqautomation.com",
      "office": "Office: Indonesia"
  }
]

const Mentor = () => {
    const classes = useStyles();
    return (
        <div className='container mt-3-custom'>
            <h1>Mentors</h1>
            <div className='clearfix'>
              <div className="row">
                {data.map((i,key) => {
                  return(
                    <div className='col-md-3 animated fadeIn'>
                  <div className="card">
                    <div className="card-body">
                      <div className="avatar">
                        <img
                          src={i.img}
                          className="card-img-top"
                          alt=""
                        />
                      </div>
                      <div className='paper'>
                        <h4>{i.professorName}</h4>
                        <h6>{i.designation}</h6>
                        <h6>{i.college}</h6>
                        <h6>{i.email}</h6>
                        <h6>{i.office}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                  )   
                })}
              </div>
            </div>
                    
    {/* <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            
            <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = {Said} style={{ width: '100%', marginTop: '-10px' }} alt="lahari"></img>
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
                        <img src = {Irwan} style={{ width: '100%', marginTop: '-10px' }} alt="lahari"></img>
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
                <img src = {iqbal} style={{ width: '100%', marginTop: '-10px' }} alt="lahari"></img>
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
          <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                <img src = {Arzul} style={{ width: '100%', marginTop: '-0px' }} alt="lahari"></img>
            </div>
            <h4>Arzul Sudarmin</h4>
            <h6>Technical Lead</h6>
            <h6>tQ Automation</h6>
            <h6>azrul@tqautomation.com</h6>
            <h6>Office: Indonesia</h6>
          </Paper>
        </Grid>
      </Grid> */}
        </div>
    )
}
export default Mentor