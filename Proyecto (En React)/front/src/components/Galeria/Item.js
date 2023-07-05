import React from 'react';

const Item = (props) => {
    return (
        <div className="carrusel-item">
            <img src={props.imagen} alt="Cristian Ferreira" />
        </div>
    );
}

export default Item;