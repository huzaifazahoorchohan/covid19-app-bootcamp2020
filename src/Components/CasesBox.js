import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop:'25px',
  },
}));

const CasesBox = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} style = {{backgroundColor:'lightgray'}}>
              <h3 className = 'box-title'>Total</h3>
              <h2 className = 'box-value'>543,911</h2>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} style = {{backgroundColor:'lightblue'}}>
              <h3 className = 'box-title'>Confirmed</h3>
              <h2 className = 'box-value'>496,535</h2>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} style = {{backgroundColor:'lightgreen'}}>
              <h3 className = 'box-title'>Recovered</h3>
              <h2 className = 'box-value'>28,790</h2>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} style = {{backgroundColor:'lightpink'}}>
              <h3 className = 'box-title'>Deaths</h3>
              <h2 className = 'box-value'>18,586</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
};

export default CasesBox;