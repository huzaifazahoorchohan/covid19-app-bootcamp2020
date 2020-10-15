import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:15,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Cards = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
              <h6>TOTAL CASES</h6>
              <h3>{props.confirm}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
              <h6>TOTAL RECOVERED</h6>
              <h3>{props.recover}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
              <h6>TOTAL DEATHS</h6>
              <h3>{props.deaths}</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
};

export default Cards;