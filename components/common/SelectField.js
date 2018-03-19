import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import withRoot from '../../md/withRoot';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class SelectField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
        this.props.onChange(this.props.property, event.target.value);
    };

    renderItems() {
        return this.props.items.map((item, i) => (
            <MenuItem key={i} value={item}>{item}</MenuItem>
        ));
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel>{this.props.name}</InputLabel>
                    <Select
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        {this.renderItems()}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SelectField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectField);