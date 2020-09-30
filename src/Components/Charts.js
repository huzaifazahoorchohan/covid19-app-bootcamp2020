import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Charts2 from './Charts2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Charts = () => {
    
    const data = {
        labels: [
            'Total',
            'Confirmed',
            'Recoverd',
            'Deaths'
        ],
        datasets: [{
            data: [543911,496535,28790,18586],
            backgroundColor: [
            'lightgray',
            'lightblue',
            'lightgreen',
            'lightpink',
            ],
        }]
    };
    
    const classes = useStyles();
    return(

        <div className={classes.root} style = {{marginTop:'20px'}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style = {{boxShadow:'3px 3px 9px 2px #ccc'}}>
            <Doughnut data={data} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style = {{boxShadow:'3px 3px 9px 2px #ccc'}} >
              <Charts2 />
          </Paper>
        </Grid>
      </Grid>
    </div>
        
    )
};

export default Charts;