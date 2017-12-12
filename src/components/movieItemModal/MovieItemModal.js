import React, { Component } from 'react';
import { Modal, Button, ResponsiveEmbed } from 'react-bootstrap'
import { getMovieItem } from '../../reducers/MovieItemReducer';
import { connect } from 'react-redux';
import './MovieItemModalStyle.css'


const mapStateToProps = state => getMovieItem(state);

class MovieItemModal extends Component {
    componentWillUpdate(nextprops) {
        this.props.loadTrailer(`${nextprops.movieItem.Title} ${nextprops.movieItem.Year} trailer`);
    }

    render() {
        const movieItem = this.props.movieItem;
        const videoUrl = `https://www.youtube.com/embed/${this.props.videoId}`;
        return(
            <div>
                <Modal show={this.props.isVisible} bsSize="large" onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{movieItem.Title} {`(${movieItem.Year})`}</Modal.Title>
                        <p>{`${movieItem.Rated} |`} {`${movieItem.Genre} |`} {movieItem.Released} {movieItem.Country}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flexContainer'>
                        <img  className='imgPadding'
                              src={movieItem.Poster !== 'N/A' ? movieItem.Poster : 'https://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png' }
                              alt='poster'
                              height={350}
                              width={245} />
                            <div className='flexDescription'>
                                <p><span>Type:</span> {movieItem.Type}</p>
                                <p><span>iMDB rating:</span> {movieItem.imdbRating}/10</p>
                                <p><span>iMDB votes:</span> {movieItem.imdbVotes}</p>
                                <p><span>Runtime:</span> {movieItem.Runtime}</p>
                                <p><span>Language:</span> {movieItem.Language}</p>
                                <p><span>Website:</span> <a href={movieItem.Website}>{movieItem.Website}</a></p>
                                <p><span>Production:</span> {movieItem.Production}</p>
                                <p><span>Awards:</span> {movieItem.Awards}</p>
                                <p><span>Director:</span> {movieItem.Director}</p>
                                <p><span>Actors:</span> {movieItem.Actors}</p>
                                <p><span>Writer:</span> {movieItem.Writer}</p>
                            </div>
                        </div>
                        <p>{movieItem.Plot}</p>
                        <hr/>
                        <ResponsiveEmbed a16by9>
                            <iframe className='embed-responsive-item' title='trailer' src={videoUrl}/>
                        </ResponsiveEmbed>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default connect(mapStateToProps, null)(MovieItemModal);
