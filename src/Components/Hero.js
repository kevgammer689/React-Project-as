import React from 'react'

export default function Hero({ children, hero }) {
    //La clase se pasa por prop
    return <header className={hero}>{children}</header>; 
}

//con esto no se necesita agregar una propiedad al momento de renderizar el componente Hero
Hero.defaultProps = {
    hero: "defaultHero"
};
