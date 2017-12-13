import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Col, Row, Alert, Glyphicon } from 'react-bootstrap';
import YTSearch from 'youtube-api-search';
import './MovieIndexStyle.css';
import load from '../actions/Fetch';
import SearchBar from '../components/searchBar/SearchBar';
import MovieList from '../components/movieList/MovieList';
import MovieItemModal from '../components/movieItemModal/MovieItemModal';
import { getMovieList } from '../reducers/MovieIndexReducer';
import SlideShow from '../components/slideShow/SlideShow';


const mapStateToProps = state => getMovieList(state);

const mapDispatchToProps = dispatch => bindActionCreators({ load }, dispatch);

class MovieIndex extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.showMovieItemModal = this.showMovieItemModal.bind(this);
        this.closeMovieItemModal = this.closeMovieItemModal.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.loadTrailer = this.loadTrailer.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
        this.handleUpIcon = this.handleUpIcon.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
        this.state = {
            isModalVisible: false,
            currentPage: 1,
            currentUrl: 's=Star wars',
            videoId: null,
            isAlertVisible: !!this.props.Error.Error,
            scrollPosition: 0,
        }
    }

    componentWillMount() {
        this.props.load(this.state.currentUrl, 'INDEX');
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
    }

    componentWillReceiveProps(props) {
        if (props.Error.Error) {
            this.setState({ isAlertVisible: true })
        } else {
            this.setState({ isAlertVisible: false })
        }
    }

    onSearch(term) {
        let url = `s=${term}`;
        if (typeof term === 'object') {
             url = term.filter === 'all' ? `s=${term.value}` : `s=${term.value}&type=${term.filter}`;
        }
        this.setState({ currentUrl: url });
        this.props.load(url, 'SEARCH')
    }

    loadTrailer(title) {
        YTSearch({key: 'AIzaSyDLQYM_oTjSyn52j48q3ZjtEfEGTLwvYp8', term: title}, videos => {
            this.setState({ videoId: videos[0].id.videoId })
        })
    }

    handleUpIcon() {
        const newScrollPosition = window.scrollY;
        const upIcon = document.getElementById('upIcon');

        if (newScrollPosition < this.state.scrollPosition){
            upIcon.classList.remove('show');
            upIcon.classList.add('hide');

        } else {
            upIcon.classList.remove('hide');
            upIcon.classList.add('show');
        }
        this.setState({scrollPosition: newScrollPosition});
    }

    loadNextPage() {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if(scrolledToBottom) {
            const nextPage = this.state.currentPage + 1;

            this.props.load(`${this.state.currentUrl}&page=${nextPage}`, 'NEXT_PAGE');
            this.setState({ currentPage: nextPage });
        }
    }

    handleOnScroll() {
        if (this.props.TotalPages <= this.state.currentPage) return;
        this.handleUpIcon();
        this.loadNextPage();
    }

    showMovieItemModal(id) {
        this.props.load(`i=${id}`, 'MOVIE_ITEM');
        this.setState({isModalVisible: true})
    }

    closeMovieItemModal() {
        this.setState({isModalVisible: false})
    }

    closeAlert() {
        this.setState({isAlertVisible: false})
    }

    render() {
        return(
            <Grid bsClass='container grid-background'>
                {this.state.isAlertVisible &&
                    <Alert bsStyle="danger" onDismiss={this.closeAlert}>
                        <p>{this.props.Error.Error && this.props.Error.Error}</p>
                    </Alert>
                }
                <Row className="show-grid" >
                    <Col md={8} mdOffset={2}>
                        <SearchBar onSearch={ term => this.onSearch(term) }/>
                    </Col>
                </Row>
                <Row className="show-grid" >
                    <Col md={5} mdOffset={1} bsClass='noPaddingRight col'>
                        <SlideShow section='firstSection' onSearch={ term => this.onSearch(term) }/>
                    </Col>
                    <Col md={5} bsClass='noPaddingLeft col'>
                        <SlideShow section='secondSection' onSearch={ term => this.onSearch(term) }/>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <MovieList list={this.props.Movies}
                               showModal={this.showMovieItemModal}/>
                </Row>
                <MovieItemModal isVisible={this.state.isModalVisible}
                                closeModal={this.closeMovieItemModal}
                                loadTrailer={this.loadTrailer}
                                videoId={this.state.videoId}
                />
                <div className='up hide' id='upIcon' onClick={ () => window.scrollTo(0,0) }>
                    <Glyphicon bsClass='white glyphicon' glyph="upload" />
                </div>
            </Grid>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
