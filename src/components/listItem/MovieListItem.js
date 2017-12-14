import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './MovieListItemStyle.css';
import Images from '../../images/Images';


const MovieListItem = ({id, showModal, title, year, poster}) => (
    <ListGroupItem onClick={() => showModal(id)} bsClass='list-group-item listContainer'>
        <div className='listFlexContainer'>
            <img src={poster !== 'N/A' ? poster : Images.emptyPoster}
                 height="100"
                 width="80"
                 className='listPoster'
                 alt='Poster'/>
            <h4>{title} ({year})</h4>
        </div>
    </ListGroupItem>
);


export default MovieListItem;
