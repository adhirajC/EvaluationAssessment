import React from 'react';
import './styles.css'

const Card = ({car})=> (
        <div className="column">
            <div className="container">
                <img src={car.img} alt="Norway" />
                <div>
                    <p className="center card-mid">{car.name}  {car.year}</p>
                    <div className="center card-bottom">
                            <p>Make : {car.make}</p>
                            <p>Model : {car.model}</p>
                            <p>Avialability : {car.availability}</p>
                            {car.availability === "In Dealership" && <button>buy</button>}
                    </div>
                </div>
            </div>
        </div>
)

export default Card