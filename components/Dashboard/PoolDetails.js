/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  box: {
    display: 'flex',

    marginTop: '3em',
    padding: '2em',

    justifyContent: 'center',

    backgroundColor: 'white',
    border: '1px solid lightgray',
    borderRadius: '5px',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  paragraph: {
    color: '#616161',
  },
});

function PoolDetails(props) {
  const { classes, pool } = props;

  console.log('PoolDetails: pool ', pool);

  return (
    <div>
      <Grid container spacing={24} className={classes.box}>
        <Grid item sm={12}>
          <Typography variant="title" gutterBottom>
            Pool Details for Contest: {pool.contestName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Pool Name: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.name}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Manager: &nbsp;</span>{' '}
            <span style={{ fontWeight: '600' }}>{pool.manager} </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Entry Fee: &nbsp;</span>{' '}
            <span style={{ fontWeight: '600' }}> {pool.amountPerPlayer} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Number of Players: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.numPlayers}</span>
          </Typography>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Max. Num. of Players: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.maxPlayers}</span>
          </Typography>
        </Grid>


        <Grid item sm={12} >
          <Typography variant="title" gutterBottom>
            Pool Amounts:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Max Balance: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.maxBalanceEth} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Pool Balance: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.totalBalanceEth} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Manager Fee: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.managerFee}% </span>
            <span style={{ fontWeight: '600' }}>{pool.managerTotal} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Owner Fee: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.fee}% </span>
            <span style={{ fontWeight: '600' }}>{pool.ownerTotal} ETH</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subheading">
            <span className={classes.paragraph}>Prize Pool: &nbsp;</span>
            <span style={{ fontWeight: '600' }}>{pool.priceBalance} ETH</span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

PoolDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  pool: PropTypes.object.isRequired,
};

export default withStyles(styles)(PoolDetails);
