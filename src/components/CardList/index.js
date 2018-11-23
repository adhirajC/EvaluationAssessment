import React from 'react';
import Card from '../Card'
import './styles.css'

const CardList = ({cars, handleSort})=> (
   <div className="row">
      <div className="list-content">
          <div className="select-container"> 
              <select onChange={handleSort}>
                    <option value="id">Sort</option>
                    <option value="name">Name</option>
                    <option value="availability">Availability</option>
                </select>
          </div>
          
          </div>
     {cars.map((car, index)=> <Card key={index} car={car}/>)}
   </div> 
   
)

export default CardList