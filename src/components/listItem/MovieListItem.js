import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './MovieListItemStyle.css';


const MovieListItem = ({id, showModal, title, year, poster}) => (
    <ListGroupItem onClick={() => showModal(id)} bsClass='list-group-item listContainer'>
        <img src={poster !== 'N/A' ? poster : 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png'}
             height="100"
             width="75"
             alt='Poster'/>
        <h4>{title} ({year})</h4>
    </ListGroupItem>
);


export default MovieListItem;
