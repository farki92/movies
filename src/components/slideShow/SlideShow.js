import React from 'react';
import { Carousel } from 'react-bootstrap';
import Images from '../../images/Images';
import './SlideShowStyle.css'


const firstLetterToUpperCase = term => (
    term.replace(/\w\S*/g, txt => (
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        )
    )
);

const SlideShow = ({ section, onSearch }) => (
        <Carousel bsClass={`carouselContainer ${section} carousel`}>
            {Object.entries(Images[section]).map( (item, index) => {
                return(
                    <Carousel.Item key={index}>
                        <img alt={item[0]}
                             src={item[1]}
                             className='cursor'
                             onClick={ () => onSearch(item[0].replace(/_/g, ' ')) } />
                        <Carousel.Caption>
                            <h3>{firstLetterToUpperCase(item[0].replace(/_/g, ' '))}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
);

export default SlideShow;
