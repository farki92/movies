import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import MovieListItem from '../listItem/MovieListItem';


const MovieList = ({ list, showModal, isFetching }) => (
    <Col md={10} mdOffset={1}>
        <ListGroup>
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
        </ListGroup>
    </Col>
);

export default MovieList;
