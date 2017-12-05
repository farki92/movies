import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Col, Row } from 'react-bootstrap';
import './MovieIndexStyle.css';
import load from '../actions/fetchActions/Fetch';
import SearchBar from '../components/header/SearchBar';

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => bindActionCreators({
    load
}, dispatch);

class MovieIndex extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(term) {
        const url = term.filter === 'all' ? `s=${term.value}` : `s=${term.value}&type=${term.filter}`;
        this.props.load(url, 'SEARCH')
    }

    render() {
        return(
            <Grid bsClass='container grid-background'>
                <Row className="show-grid" >
                    <Col md={8} mdOffset={2}>
                        <SearchBar onSearch={ term => this.onSearch(term)}/>
                    </Col>
                </Row>

                {/*<Row className="show-grid">*/}
                    {/*<Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>*/}
                    {/*<Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>*/}
                    {/*<Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>*/}
                {/*</Row>*/}

                {/*<Row className="show-grid">*/}
                    {/*<Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>*/}
                {/*</Row>*/}

                {/*<Row className="show-grid">*/}
                    {/*<Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>*/}
                    {/*<Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>*/}
                {/*</Row>*/}
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
