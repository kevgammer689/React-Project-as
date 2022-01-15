import React, {useContext} from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

//Funcion para obrtener valores unicos
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


export default function RoomFilter({rooms}) {
    //Acceso al context
    const context = useContext(RoomContext);
    //console.log(context)

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //Obtener types unicos para incluirlos en las otions del select y no hacerlo dinamico.
    let types = getUnique(rooms, "type");

    // agregar all
    types = ['all',...types];
    //console.log(types)

    // //map a option jsx
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });

    //----- Filtro de numero de personas permitidas por habitacion ---------------------------------------
    let people = getUnique(rooms, 'capacity');
    //console.log(people)
    people = people.map((item, index) => {
        return(
            <option key={index} value={item}>{item}</option>
        )
    });
    
    
    return (
        <section className='filter-container'>
            <Title title="Search rooms"/>
            <form className='filter-form'>
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type}
                        onChange={handleChange}
                        >
                            {types
                            }
                        </select>
                </div>
                {/*end select type ----------------*/}

                {/* guests  -----------------------*/}
                <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select
                    name="capacity"
                    id="capacity"
                    onChange={handleChange}
                    className="form-control"
                    value={capacity}
                >
                    {people}
                </select>
                </div>
                {/* end of guests ------------------*/}
                {/* room price ---------------------*/}
                <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input
                    type="range"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    onChange={handleChange}
                    className="form-control"
                />
                </div>
                {/* end of room price--------------------*/}
                {/* -------------size -------------------*/}
                <div className="form-group">
                <label htmlFor="price">room size </label>
                <div className="size-inputs">
                    <input
                    type="number"
                    name="minSize"
                    value={minSize}
                    onChange={handleChange}
                    className="size-input"
                    />
                    <input
                    type="number"
                    name="maxSize"
                    value={maxSize}
                    onChange={handleChange}
                    className="size-input"
                    />
                </div>
                </div>
                {/* end of select type -------------------*/}
                {/*--------------- extras ----------------*/}
                <div className="form-group">
                <div className="single-extra">
                    <input
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                    />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input
                    type="checkbox"
                    name="pets"
                    checked={pets}
                    onChange={handleChange}
                    />
                    <label htmlFor="breakfast">pets</label>
                </div>
                </div>
                {/* --------------end of extras type ------------*/}
            </form>
        </section>
    )
}
