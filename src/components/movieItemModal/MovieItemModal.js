import React, { Component } from 'react';
import { Modal, Button, ResponsiveEmbed } from 'react-bootstrap'
import { getMovieItem } from '../../reducers/MovieItemReducer';
import { connect } from 'react-redux';
import './MovieItemModalStyle.css'
import Images from '../../images/Images';


const mapStateToProps = state => getMovieItem(state);

class MovieItemModal extends Component {

    componentWillReceiveProps(nextProps) {
        this.props.loadTrailer(`${nextProps.movieItem.Title} ${nextProps.movieItem.Year} ${nextProps.movieItem.Type} trailer`);
    }

    render() {
        const movieItem = this.props.movieItem;
        const videoUrl = `https://www.youtube.com/embed/${this.props.videoId}`;
        return(
            <div>
                <Modal show={this.props.isVisible}
                       bsSize="large"
                       onHide={this.props.closeModal}>
                    <Modal.Header closeButton bsClass='modal-header background'
                    >
                        <Modal.Title>{movieItem.Title} {`(${movieItem.Year})`}</Modal.Title>
                        <p>{movieItem.Rated !== 'N/A' && `${movieItem.Rated} |`} {movieItem.Genre !== 'N/A' && `${movieItem.Genre} |`} {movieItem.Released!== 'N/A' && movieItem.Released} {movieItem.Country !=='N/A' && movieItem.Country}</p>
                    </Modal.Header>
                    <Modal.Body bsClass='modal-body background'>
                        <div className='flexContainer'>
                        <img  className='imgPadding'
                              src={movieItem.Poster !== 'N/A'|| movieItem.Poster === '' ? movieItem.Poster : Images.emptyPoster }
                              alt='poster'
                              height={350}
                              width={255} />
                            <div className='flexDescription'>
                                { movieItem.Type !== 'N/A' && <p><span>Type:</span> {movieItem.Type}</p> }
                                { movieItem.imdbRating !== 'N/A' && <p><span>iMDB rating:</span> {movieItem.imdbRating}/10</p> }
                                { movieItem.imdbVotes !== 'N/A' && <p><span>iMDB votes:</span> {movieItem.imdbVotes}</p> }
                                { movieItem.Runtime !== 'N/A' && <p><span>Runtime:</span> {movieItem.Runtime}</p> }
                                { movieItem.Language !== 'N/A' && <p><span>Language:</span> {movieItem.Language}</p> }
                                { movieItem.Website !== 'N/A' && <p><span>Website:</span><a href={movieItem.Website}> {movieItem.Website}</a></p> }
                                { movieItem.Production !== 'N/A' && <p><span>Production:</span> {movieItem.Production}</p> }
                                { movieItem.Awards !== 'N/A' && <p><span>Awards:</span> {movieItem.Awards}</p> }
                                { movieItem.Director !== 'N/A' && <p><span>Director:</span> {movieItem.Director}</p> }
                                { movieItem.Actors !== 'N/A' && <p><span>Actors:</span> {movieItem.Actors}</p> }
                                { movieItem.Writer !== 'N/A' && <p><span>Writer:</span> {movieItem.Writer}</p> }
                            </div>
                        </div>
                        { movieItem.Plot !== 'N/A' && <p>{movieItem.Plot}</p> }
                        <hr/>
                        <ResponsiveEmbed a16by9>
                            <iframe className='embed-responsive-item' title='trailer' src={videoUrl}/>
                        </ResponsiveEmbed>
                    </Modal.Body>
                    <Modal.Footer bsClass='modal-footer background'>
                        <Button bsStyle='primary' onClick={this.props.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default connect(mapStateToProps, null)(MovieItemModal);
