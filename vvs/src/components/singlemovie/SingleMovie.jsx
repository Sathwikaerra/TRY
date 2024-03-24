import React from 'react'
import { useParams } from 'react-router-dom'
import { movieData } from '../moviedara'
import './singlemoovie.css'
import star from './star.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SingleMovie = ({addTicket}) => {

    const navigate=useNavigate();

    const {user,id}=useParams();

    const data= movieData.filter((item)=>{
        return item.id==id
    })

    const bookticket=(id)=>{
        
        navigate(`/book/${user}/${id}`)
    }



   


  return (
    <div >
        {
            data.map((item)=>{
                return (
                    <div className="main">
                        <div className="left">
                            <img src={item.image}alt="" />
                            
                        </div>
                        <div className="right">
                        <p><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />(122)</p>
                            <div className=''><p className='p' >Name:<span>{item.name}</span></p></div>
                            <div className=''><p className='p'>DIRECTED BY:<span>{item.director}</span></p></div>
                            <div className=''><p className='p'>Lead Actors:<span>{item.actors}</span></p></div>
                            <div className=''><p className='p'>Movie:<span>{item.description}</span></p></div>
                            <button  className='' onClick={()=>bookticket(item.id)}>Book your ticket</button>
                        </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}



export default SingleMovie
