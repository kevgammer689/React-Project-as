import React, {Component} from 'react';
import Banner from '../Components/Banner';
import defaultBcg from '../images/room-1.jpeg';
//import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../Components/StyledHero';
//import { FaExternalLinkSquareAlt } from 'react-icons/fa';

export default class SingleRoom extends Component{
    constructor(props){
        //React-router-dom provee props que permiten acceder a la url
        super(props);
       // console.log(props)
       this.state ={
           slug: this.props.match.params.slug,
           defaultBcg
       }
    }
     //componentDidMount (){}
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug); //Obtiene la room especifica segun slug.
        //console.log(room)
        if(!room){
            return(
                <div className="error">
                    <h3>No Such Room Could Be Found...</h3>
                    <Link to="/rooms" className='btn-primary'>Back to Rooms</Link>
                </div>
            )
        }
        return (
        <>
            <StyledHero img = {room.images[0] || this.state.defaultBcg}>
                    <Banner title={`${room.name} room`}>
                        <Link to="/rooms" className='btn-primary'>Back to Rooms</Link>
                    </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className="single-room-images">
                    {room.images.map((item, index) => {
                      return <img key={index} src={item} alt={room.name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{room.description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${room.price}</h6>
                        <h6>Size: {room.size} SQFT</h6>
                        <h6>
                            Max Capacity: {" "}
                            {room.capacity>1 ? `${room.capacity} people`
                                             :`${room.capacity} person`}
                        </h6>
                        <h6>{room.pets ? "Pets Allowed": "No Pets Allowed"}</h6>
                        <h6>{room.breakfast && "Free Breakfast Included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {
                    room.extras.map((item, index) =>{
                        return <li key = {index}>- {item}</li>;
                    })
                    }
                </ul>
            </section>
        </>
        )
    }
}
