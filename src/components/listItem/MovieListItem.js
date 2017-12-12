import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './MovieListItemStyle.css';
import { bindActionCreators } from 'redux';
import load from '../../actions/fetchActions/Fetch';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => bindActionCreators({
    load
}, dispatch);


class MovieListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.props.showModal(this.props.id);
    }

    render() {
        return(
            <ListGroupItem onClick={this.handleClick} bsClass='list-group-item listContainer'>
                <img src={this.props.poster !== 'N/A' ? this.props.poster : 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png'}
                     height="100"
                     width="75"
                     alt='This is a poster'/>
                <h4>{this.props.title} ({this.props.year})</h4>
            </ListGroupItem>
        )
    }
}

export default connect(null, mapDispatchToProps)(MovieListItem);