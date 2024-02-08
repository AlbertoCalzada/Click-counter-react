import React from 'react';
import '../styles/testimonio.css';

function Testimonio(props) {

    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require(`../imagenes/${props.imagen}.png`)}
                alt='imagen 1' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><b>{props.nombre}</b> en <strong>{props.pais}</strong></p>
                <p className='cargo-testimonio'>{props.cargo}en {props.empresa}</p>
                <p className='texto-testimonio'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab a repudiandae minima, ullam omnis corrupti praesentium
                    rerum nostrum, in magni voluptas modi inventore dolorem earum similique vero nisi hic! Impedit."</p>
            </div>
        </div>

    );
}

export default Testimonio;