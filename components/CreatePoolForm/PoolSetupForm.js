/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
// import { FormLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  headingTertiary: {
    fontWeight: 'bold'
  },
  formBox: {
    backgroundColor: '#fff',
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      backgroundColor: 'white',
      border: '2px solid lightgray',
      borderRadius: '5px',
      padding: theme.spacing.unit * 3
    }
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
  error: {}
});

const messages = defineMessages({
  headingTertiary1: {
    id: 'headingTertiary1',
    defaultMessage: 'Admin Info',
    description:
      'Create Pool Page -> Create Pool Form -> Pool Setup Form -> tittle 1'
  },
  headingTertiary2: {
    id: 'headingTertiary2',
    defaultMessage: 'Pool Info',
    description:
      'Create Pool Page -> Create Pool Form -> Pool Setup Form -> tittle 2'
  },
  nameLabel: {
    id: 'nameLabel',
    defaultMessage: 'Name',
    description: ''
  },
  adminNameTextbox: {
    id: 'adminNameTextbox',
    defaultMessage: 'Nickname',
    description: ''
  },
  emailLabel: {
    id: 'emailLabel',
    defaultMessage: 'Email',
    description: ''
  },
  emailTextbox: {
    id: 'emailTextbox',
    defaultMessage: 'email@email.com',
    description: ''
  },
  poolNameTextbox: {
    id: 'poolNameTextbox',
    defaultMessage: 'Pool Name',
    description: ''
  },
  entryLabel: {
    id: 'entryLabel',
    defaultMessage: 'Entry Amount',
    description: ''
  },
  entryTextbox: {
    id: 'entryTextbox',
    defaultMessage: '0',
    description: ''
  },
  termsCheckbox: {
    id: 'termsCheckbox',
    defaultMessage: 'I agree with the terms of use',
    description: ''
  },
  rulesCheckbox: {
    id: 'rulesCheckbox',
    defaultMessage: 'I agree with the pool rules',
    description: ''
  },
  errorRequired: {
    id: 'errorRequired',
    defaultMessage: 'Field is Required',
    description: ''
  },
  errorEmail: {
    id: 'errorEmail',
    defaultMessage: 'Not a Valid Email',
    description: ''
  }
});

const required = val => val && val.length;
// const isFormValid = form => form.adminName.valid &&
//         form.adminEmail.valid &&
//         form.poolName.valid &&
//         form.entryPrice.valid &&
//         form.terms.value &&
//         form.rules.value;
const hasError = field => !field.valid && field.touched;
const getError = (field, intl) => {
  const { errors } = field;

  if (!hasError(field)) return;

  if (errors.required) return intl.formatMessage(messages.errorRequired);
  if (errors.isEmail) return intl.formatMessage(messages.errorEmail);
};

const PoolSetupForm = props => {
  const { classes, intl, form } = props;

  return (
    <Form className={classes.formBox} model="createPool">
      {/* <Typography className={classes.headingTertiary} variant="subheading">
        {intl.formatMessage(messages.headingTertiary1)}
      </Typography> */}

      {/* <Grid container alignItems="baseline">
        <Grid item xs={3}>
          <Typography>{intl.formatMessage(messages.nameLabel)}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Control.text
            className={classes.textField}
            model=".adminName"
            component={TextField}
            placeholder={intl.formatMessage(messages.adminNameTextbox)}
            validators={{
                required,
              }}
            validateOn="blur"
            error={hasError(form.adminName)}
            helperText={getError(form.adminName, intl)}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="baseline">
        <Grid item xs={3}>
          <Typography>{intl.formatMessage(messages.emailLabel)}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Control.text
            className={classes.textField}
            model=".adminEmail"
            component={TextField}
            placeholder={intl.formatMessage(messages.emailTextbox)}
            validators={{
                required,
              }}
            validateOn="blur"
            error={hasError(form.adminEmail)}
            helperText={getError(form.adminEmail, intl)}
          />
        </Grid>
      </Grid>

      <Divider className={classes.division} /> */}

      <Typography className={classes.headingTertiary} variant="subheading">
        {intl.formatMessage(messages.headingTertiary2)}
      </Typography>
      <Grid container alignItems="baseline">
        <Grid item xs={3}>
          <Typography>{intl.formatMessage(messages.nameLabel)}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Control.text
            className={classes.textField}
            model=".poolName"
            component={TextField}
            placeholder={intl.formatMessage(messages.poolNameTextbox)}
            validators={{
              required
            }}
            validateOn="blur"
            error={hasError(form.poolName)}
            helperText={getError(form.poolName, intl)}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="baseline">
        <Grid item xs={3}>
          <Typography>{intl.formatMessage(messages.entryLabel)}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Control.text
            className={classes.textField}
            model=".entryPrice"
            component={TextField}
            placeholder={intl.formatMessage(messages.entryTextbox)}
            validators={{
              required
            }}
            validateOn="blur"
            error={hasError(form.entryPrice)}
            helperText={getError(form.entryPrice, intl) || 'ETH'}
          />
        </Grid>
      </Grid>
      <Divider className={classes.division} />

      <Grid container alignItems="baseline">
        <Grid item>
          <Control.checkbox model=".terms" component={Checkbox} />
        </Grid>
        <Grid item>
          <Typography>{intl.formatMessage(messages.termsCheckbox)}</Typography>
        </Grid>
      </Grid>

      <Grid container alignItems="baseline">
        <Grid item>
          <Control.checkbox model=".rules" component={Checkbox} />
        </Grid>
        <Grid item>
          <Typography>{intl.formatMessage(messages.rulesCheckbox)}</Typography>
        </Grid>
      </Grid>
    </Form>
  );
};

const mapStateToProps = ({ forms }) => ({
  form: forms.createPool
});

PoolSetupForm.propTypes = {
  classes: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

const ConnectedPoolSetupForm = connect(mapStateToProps)(PoolSetupForm);

export default withStyles(styles)(injectIntl(ConnectedPoolSetupForm));
