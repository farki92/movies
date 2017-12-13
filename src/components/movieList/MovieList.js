import React from 'react';
import { Col } from 'react-bootstrap';
import MovieListItem from '../listItem/MovieListItem';


const MovieList = ({list, showModal}) => (
    <Col md={10} mdOffset={1}>
        {list.map( (item, index) => {
            return(
                <MovieListItem
                    id={item.imdbID}
                    title={item.Title}
                    poster={item.Poster}
                    year={item.Year}
                    showModal={showModal}
                    key={index} />
            )
        })}
    </Col>
);

export default MovieList;
