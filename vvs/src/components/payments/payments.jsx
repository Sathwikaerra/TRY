import React, { useState } from 'react'
import './payments.css'
import { useParams } from 'react-router-dom'
import { movieData } from '../moviedara'
import { connect} from 'react-redux'
import { addDate } from '../../store/action'


const Payments = ({date,count,list}) => {

    

 

    

    const {user,id}=useParams();

    const data=movieData.filter((item)=>{
        return item.id==id
    })

  return (
    
        <div className="ticket">
       
            <div className='ticketNO'> 
        
            <i class="  fa-solid fa-barcode fa-10x my-5"></i>
            </div>
            <div className="details">
            <p>VVS Movies</p>
            <p>Experience the Cinematic World</p>
            <p>Premium Movies & High Quality Sounds</p>
            <p>Branch@Basara</p>
            </div>  
        <div className='ticketNO'> 
            {
                data.map((i)=>
                {
                    return(
                        <div>
                            <img src={i.image} alt="" />
                        </div>
                    )
                })
            }
            </div>

            <div className="paymentdetails">
            <p className=' seatNo'> booked by:&nbsp;&nbsp;<p className='text-white'>{user}</p></p>
                <p className='seatNo'>You Booked a ticket on:&nbsp;&nbsp;<p className='text-white'>{date.date}{' '}{date.day}</p></p>
                <p className=' seatNo'> total tickets:&nbsp;&nbsp;<p className='text-white'>{count}</p></p>
                <p className=' seatNo  d-flex flex-wrap'>seats:&nbsp;&nbsp;{list.map((i)=>{
                    return(
                        <p className=' text-white'>{i}</p>
                    )
                })}</p>
                <p className='seatNo'>total bill:&nbsp;&nbsp;<p className='text-white'> Rs.{count*200}/-</p></p>
            </div>
            
       



       
      
    </div>
  )
}


 const mapStateToProps=state=>({
    list: state.Ticketreducer,
    count:state.Ticketreducer.length,
    date:state.DateReducer.date,
})
export default connect(mapStateToProps)(Payments)
