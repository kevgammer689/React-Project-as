import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../Components/RoomsContainer';
//import { RoomContext } from '../Context';


export default function Rooms() {
    //A Hero se le pasa la prop hero para seleccionar su respectiva clase;
    return (
        <>
            <Hero hero = "roomsHero">
                <Banner title= "Our Rooms">
                    <Link to= "/" className='btn-primary'>
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    )
}
