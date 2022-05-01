import React from 'react'
import {makeStyles, Grid} from '@material-ui/core';

const useStyles =makeStyles(theme =>({
    root:{
        color:"red",
        margin:"5px"
    },
}))

const HomePage1 = () => {
    const classes =useStyles();
  return (
    <div className={classes.root}>
        <Grid></Grid>
        <span className={classes.xyz}>Hello world</span>
        </div>
  )
}

export default HomePage1