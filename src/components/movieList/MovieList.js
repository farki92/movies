import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './MovieListStyle.css';


class MovieList extends Component {
    render() {
        console.log('Farki : ' , this.props)
        return(
            <ListGroup>
                {this.props.list.map( (item, index) => {
                    return (
                        <ListGroupItem key={index}>
                            <img className='poster' src={item.Poster} alt='Poster' />
                            <a href='#' className='title' >{item.Title}</a>
                        </ListGroupItem>

                    )
                })}
            </ListGroup>
        )
    }
}


export default MovieList;