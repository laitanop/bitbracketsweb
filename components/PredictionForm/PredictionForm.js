import React, { Component } from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import MatchCard from './MatchCard';

const styles = theme => ({
    form: {
        width: '80%',
        paddingTop: theme.spacing.unit * 2,
    },
    tabs: {

    },
    matches: {
        padding: theme.spacing.unit * 2,
    },
});

const messages = defineMessages({
    group: {
        id: 'PredictionForm.group',
        defaultMessage: 'Group',
        description: '',
    },
});

class PredictionLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
    }

    handleTabChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    renderTabContent() {
        const { activeTab } = this.state;
        const { classes, intl, matches, groups, predictions, update, read } = this.props;

        return (
            <Grid container className={classes.matches} spacing={16}>
                {_.filter(matches, match => match.data.group === groups[activeTab])
                    .map(match =>
                        <Grid item xs={6} key={match.index}>
                            <MatchCard
                                match={match}
                                prediction={predictions[match.index] ? predictions[match.index].prediction : ""}
                                update={update}
                                read={read}
                            />
                        </Grid>
                    )}
            </Grid>
        );
    }

    render() {
        const { classes, intl, groups } = this.props;
        const { activeStep } = this.state;

        return (
            <Paper className={classes.form}>
                <Tabs
                    className={classes.tabs}
                    value={this.state.activeTab}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {groups.map(group => <Tab key={group} label={group} />)}
                </Tabs>
                {this.renderTabContent()}
            </Paper>
        );
    }
}

export default withStyles(styles)(injectIntl(PredictionLayout));