import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import Link from "next/link";

import withRoot from '../components/HOC/md/withRoot';
import withPersistGate from '../components/HOC/withPersistGate';
import { initStore } from '../store';
import JoinPoolLayout from '../components/JoinPoolForm/JoinPoolLayout';
import Layout from "../components/Layout";
import GroupsSelector from '../selectors/groupsSelector';
import { joinPool, updatePrediction, savePredictions } from '../actions';

class JoinPoolPage extends React.Component {
    render() {
        return (
            <Layout>
                <JoinPoolLayout
                    pool={this.props.pool}
                    onSubmit={this.props.joinPool}
                    groups={this.props.groups}
                    matches={this.props.matches}
                    predictions={this.props.predictions}
                    update={this.props.updatePrediction}
                // read
                />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        pool: state.joinPool,
        matches: state.matches,
        groups: GroupsSelector(state),
        predictions: state.predictions,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinPool: bindActionCreators(joinPool, dispatch),
        updatePrediction: bindActionCreators(updatePrediction, dispatch),
    }
}

export default withRoot(
    withRedux(initStore, mapStateToProps, mapDispatchToProps)(JoinPoolPage)
    // withRedux(initStore, mapStateToProps, mapDispatchToProps)(withPersistGate()(JoinPoolPage))
);