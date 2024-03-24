import React, { useState } from 'react'
import {movieData} from '../moviedara'
import{useParams} from 'react-router-dom'
import { Connect, connect } from 'react-redux'
import { addTicket } from '../../store/action'

import Item from '../item/item'
import './home.css'

const Home = ({addTicket}) => {

  const {user}=useParams();

  console.log(user)



    const[data,setData]=useState(movieData)
  return (

    <div className='popular'>
    <h1>On Going Movies</h1>
    <h1>Book Your Favourate Movies</h1>
    <hr />
    <div className="popular-item">
        {
            data.map((item,i)=>{ 
                return <Item  user={user} id={item.id}  name={item.name} image={item.image} year={item.year} actors={item.actors} director={item.director}/>
            })
        }
 </div>

</div>
  )
}

const mapStateToProps=state=>({
  tickets:state.TicketReducer
})
        

export default connect(mapStateToProps,{addTicket})(Home)
