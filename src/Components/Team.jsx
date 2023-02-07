import React from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import lahari from "../res/lahari.jpeg"
import satvik from "../res/Satvik.jpeg"
import sai from "../res/sai.jpeg"
import vineeth from "../res/vineeth.jpeg"
import nitin from "../res/nitin.jpeg"
import venkat from "../res/venkat.jpeg"
import dhatri from "../res/dhatri.jpeg"
import './mentor.css'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: "center",
      color: theme.palette.text.secondary,
      display: 'flex',
      padding: "16px",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }));
const Team = () => {
    
    const classes = useStyles();
    return (
        <div className='container mt-3-custom'>
            <h1>Meet Our Team</h1>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = {lahari} style={{ width: '100%', marginTop: '-40px' }} alt="lahari"></img>
                    </div>
                    <h4>Lahari Devaraju</h4>
                    <h6>CS Graduate Student at UHCL</h6>
                    <h6>+1 281 739 8685</h6>
                    <h6>devarajul5285@uhcl.edu</h6>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src ={satvik} style={{ width: '100%', marginTop: '-10px' }} alt="satvik"></img>
                </div>
                    <h4>Sathvik Chandra N</h4>
                    <h6>CIS Graduate Student at UHCL</h6>
                    <h6>+1 346 433 2694</h6>
                    <h6>neradugommus9125@uhcl.edu</h6>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = {vineeth} style={{ width: '100%', marginTop: '-60px' }} alt="satvik"></img>
                </div>
                    <h4>Saivineeth Reddy P</h4>
                    <h6>CS Graduate Student at UHCL</h6>
                    <h6>+1 346 434 8857</h6>
                    <h6>peddaveetis6408@uhcl.edu</h6>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = {venkat} style={{ width: '100%', marginTop: '-40px' }} alt="satvik"></img>
                </div>
                    <h4>Venkat Ramana Reddy E</h4>
                    <h6>CS Graduate Student at UHCL</h6>
                    <h6>+1 346 646 9060</h6>
                    <h6>enukondav5629@uhcl.edu</h6>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = {nitin} style={{ width: '100%', marginTop: '-40px' }} alt="satvik"></img>
                </div>
                    <h4>Nithin Reddy Seelam</h4>
                    <h6>CS Graduate Student at UHCL</h6>
                    <h6>+1 346 427 8642</h6>
                    <h6>seelamn4298@uhcl.edu</h6>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                        <img src = {sai} style={{ width: '100%', marginTop: '-5pxpx' }} alt="satvik"></img>
                </div>
                    <h4>Sai Prasad Varma Sangaraju</h4>
                    <h6>CS Graduate Student at UHCL</h6>
                    <h6>+1 281 965 9785</h6>
                    <h6>sangarajus9030@uhcl.edu</h6>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <div style={{ borderRadius: '50%', overflow: 'hidden', height: '200px', width: '200px' }}>
                            <img src = {dhatri} style={{ width: '100%', marginTop: '-5pxpx' }} alt="satvik"></img>
                    </div>
                    <h4>Dhatri Naidu Bhogadi</h4>
                    <h6>CIS Graduate Student at UHCL</h6>
                    <h6>+1 281 965 5461</h6>
                    <h6>bhogadid9671@uhcl.edu</h6>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Team