import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Col, Row } from 'react-bootstrap';
import './MovieIndexStyle.css';
import load from '../actions/fetchActions/Fetch';
import SearchBar from '../components/header/SearchBar';
import MovieList from '../components/movieList/MovieList';
import MovieItemModal from '../components/movieItemModal/MovieItemModal';
import { getMovieList } from '../reducers/MovieIndexReducer';


const mapStateToProps = state => getMovieList(state);

const mapDispatchToProps = dispatch => bindActionCreators({
    load
}, dispatch);

class MovieIndex extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.showMovieItemModal = this.showMovieItemModal.bind(this);
        this.closeMovieItemModal = this.closeMovieItemModal.bind(this);
        this.state = { isModalVisible: false }
    }


    componentWillMount() {
        this.props.load(`s=Star wars`, 'INDEX');
    }


    onSearch(term) {
        const url = term.filter === 'all' ? `s=${term.value}` : `s=${term.value}&type=${term.filter}`;
        this.props.load(url, 'SEARCH')
    }


    showMovieItemModal() {
        this.setState({isModalVisible: true})
    }


    closeMovieItemModal() {
        this.setState({isModalVisible: false})
    }


    render() {
        return(
            <Grid bsClass='container grid-background'>
                <Row className="show-grid" >
                    <Col md={8} mdOffset={2}>
                        <SearchBar onSearch={ term => this.onSearch(term)}/>
                    </Col>
                </Row>
                <Row className="show-grid">
                        <MovieList list={this.props.Movies}
                                   pages={this.props.TotalPages}
                                   showModal={this.showMovieItemModal}/>
                </Row>
                <MovieItemModal isVisible={this.state.isModalVisible}
                                closeModal={this.closeMovieItemModal}
                />
            </Grid>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
