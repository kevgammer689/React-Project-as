import React, {Component} from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        Services:[
            { 
               icon: <FaCocktail/>,
               title: "Free Coctails",
               info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt adipisci libero pariatur"
            },
            { 
                icon: <FaHiking/>,
                title: "Free Hiking",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt adipisci libero pariatur"
             },
             { 
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt adipisci libero pariatur"
             },
             { 
                icon: <FaBeer/>,
                title: "Free Beer",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt adipisci libero pariatur quod enim modi magni alias totam quae?"
             },
        ]
    }


    render() {
        const state = this.state.Services;
        return(
        <section className='services'>
            <Title title= "services" />
            <div className="services-center">
                {state.map((item, index) => {
                     return (
                         <article key={index} className='service'>
                             <span>{item.icon}</span>
                             <h6>{item.title}</h6>
                             <p>{item.info}</p>
                         </article>
                     )
                })}
            </div>

        </section>
        );
    }
}
