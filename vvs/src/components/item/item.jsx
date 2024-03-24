import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'



const Item = (props) => {
 


  

  return (
    <div className='item'  >
      <Link to={`/home/${props.user}/${props.id}`}>
      <div><img src={props.image} alt="" /></div>
      </Link>   
      
      <div className="title">{props.name}</div>
       
        


         
      
    </div>
  )
}

export default Item
