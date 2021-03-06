/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import { Form } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  headingTertiary: {
    fontWeight: 'bold',
    marginBottom: theme.spacing.unit * 2
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    backgroundColor: 'white',
    border: '2px solid lightgray',
    borderRadius: '5px',
    padding: theme.spacing.unit * 3
  },
  textField: {
    marginBottom: theme.spacing.unit
    // width: '60%',
  },
  division: {
    alignSelf: 'center',
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  expansionPanel: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2
  }
});

const messages = defineMessages({
  headingTertiary1: {
    id: 'JoinPaymentForm.headingTertiary1',
    defaultMessage: 'Finish Installing MetaMask to Continue',
    description: ''
  },
  help: {
    id: 'JoinPaymentForm.help',
    defaultMessage: 'Here some help:',
    description: ''
  },
  installHeader: {
    id: 'JoinPaymentForm.installHeader',
    defaultMessage: 'How to Install MetaMask',
    description: ''
  },
  installDescription: {
    id: 'JoinPaymentForm.installDescription',
    defaultMessage: '...',
    description: ''
  },
  etherHeader: {
    id: 'JoinPaymentForm.etherHeader',
    defaultMessage: 'Getting Ether Your Digital Currency',
    description: ''
  },
  etherDescription: {
    id: 'JoinPaymentForm.etherDescription',
    defaultMessage: '...',
    description: ''
  },
  sendHeader: {
    id: 'JoinPaymentForm.sendHeader',
    defaultMessage: 'How to Send ETH to MetaMask',
    description: ''
  },
  sendDescription: {
    id: 'JoinPaymentForm.sendDescription',
    defaultMessage: '...',
    description: ''
  },
  headingTertiary2: {
    id: 'JoinPaymentForm.headingTertiary2',
    defaultMessage: 'Payment Details',
    description: ''
  },
  entryLabel: {
    id: 'JoinPaymentForm.entryLabel',
    defaultMessage: 'Entry Price',
    description: ''
  },
  feeLabel: {
    id: 'JoinPaymentForm.feeLabel',
    defaultMessage: 'Entry Fee',
    description: ''
  },
  totalLabel: {
    id: 'JoinPaymentForm.totalLabel',
    defaultMessage: 'TOTAL',
    description: ''
  }
});

class JoinPaymentForm extends Component {
  renderPaymentDetails() {
    const { classes, intl, pool } = this.props;
    const entryFee = pool.info ? pool.info.amountPerPlayer : 'undefined';

    return (
      <Form className={classes.formBox} model="joinPool">
        <Typography className={classes.headingTertiary} variant="subheading">
          {intl.formatMessage(messages.headingTertiary2)}
        </Typography>
        {/* <Grid container alignItems="baseline">
          <Grid item xs={3}>
            <Typography>{intl.formatMessage(messages.entryLabel)}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Control.text
              className={classes.textField}
              model=".entryPrice"
              component={TextField}
              disabled
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
        </Grid> */}

        <Grid container alignItems="baseline">
          <Grid item xs={3}>
            <Typography>{intl.formatMessage(messages.feeLabel)}</Typography>
          </Grid>
          <Grid item xs={9}>
            {/* <Control.text
              className={classes.textField}
              model=".entryFee"
              component={TextField}
              disabled
              InputProps={{ disableUnderline: true }}
            /> */}
            {entryFee} ETH
          </Grid>
        </Grid>

        <Divider className={classes.division} />

        <Grid container alignItems="baseline">
          <Grid item xs={3}>
            <Typography>{intl.formatMessage(messages.totalLabel)}</Typography>
          </Grid>
          <Grid item xs={9}>
            {/* <Control.text
              className={classes.textField}
              model=".entryTotal"
              component={TextField}
              disabled
              InputProps={{ disableUnderline: true }}
            /> */}
            {entryFee} ETH
          </Grid>
        </Grid>
      </Form>
    );
  }

  render() {
    return this.renderPaymentDetails();
  }
}

JoinPaymentForm.propTypes = {
  pool: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(JoinPaymentForm));
