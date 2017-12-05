import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testing } from '../actions/MovieIndexActions';

const mapStateToProps = (state, props) => {
    return state;
};

const mapDispatchToProps = dispatch => bindActionCreators({
    testing,
}, dispatch);

class MovieIndex extends Component {
    componentWillMount() {
        this.props.testing('it works')
    }

    render() {
        return(
            <div>
                {this.props.test}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
