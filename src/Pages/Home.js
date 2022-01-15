import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import Services from '../Components/Services';

import FeaturedRooms from '../Components/FeaturedRooms';

export default function Home() {
    //En app.css hay dos clases para Hero, una default y otra para roomsHero
    return (
        //Banner es la propiedad children de Hero, Link es la propiedad children de Banner
        <>
        <Hero>
           <Banner title= "Luxurious Rooms" subtitle= "Deluxe Rooms Starts at $399">
              <Link to= "/rooms" className='btn-primary'>
                  Our Rooms
              </Link>
           </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}
