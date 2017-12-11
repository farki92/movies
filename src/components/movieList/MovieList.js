import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MovieListItem from '../listItem/MovieListItem';


class MovieList extends Component {
    render() {
        return(
            <Col md={10} mdOffset={1}>
                    {this.props.list.map( (item, index) => {
                        return(
                            <MovieListItem
                                id={item.imdbID}
                                title={item.Title}
                                poster={item.Poster}
                                year={item.Year}
                                showModal={this.props.showModal}
                                key={index} />
                        )
                    })}
            </Col>
        )
    }
}


export default MovieList;