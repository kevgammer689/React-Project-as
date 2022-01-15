import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg'; //En caso de que no haya alguna de las imagenes.
import PropTypes from 'prop-types';

export default function Room({room}) {
    // console.log(room.slug);
    // console.log(room.name);
    // console.log(room);

    const { name, slug, images, price } = room;
    return (
        <article className='room'>
            <div className="img-container">
              <img src= {images[0] || defaultImg} alt="single room" />
              <div className="price-top">
                  <h6>${price}</h6>
                  <p>Per Night</p>
              </div>
              <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Features</Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}

//Checkeo de propiedades.

Room.propTypes = {
    room: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
    })
  };
  
