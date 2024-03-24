import {React,useRef, useState} from 'react'
import { seatingData } from './Seating'
import './bookingseat.css'
import {Link, useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Seats } from './Seating'
import {Seats3} from './Seating'
import { addTicket } from '../../store/action'
import { connect } from 'react-redux'
import { addDate } from '../../store/action'



const BookingSeat = ({date,tickets,addTicket,addDate}) => {

    const [x,setX]=useState();

    const inActiveBtn='btn btn-outline-warning m-2';
    const activeBtn='btn btn-outline-success  m-2 active';

    const navigate=useNavigate();

    const seatRef=useRef();

    const {user,id}=useParams();

    console.log(user)

    const selectedSeat=(no)=>{
        addTicket(no)
       
        

    }

    
    

    const payment=(id,date,tickets)=>{
      

        if(!date)
        {
            alert("please select the date first")
        }
        else{
           
           
        navigate(`/payment/${user}/${id}`)

        }


        
        
       
    }

    
  return (
    <div className='bookingseat'>

        <div className="dates">
            <div className="leftdays">
            <div className="days">
                <ul><li   className='li'>Sunday</li><li onClick={()=>addDate("sunday",1)}  >1</li><li onClick={()=>addDate("sunday",15)}>15</li><li onClick={()=>addDate("sunday",29)}>29</li></ul>
                <ul><li  className='li'>Monday</li><li onClick={()=>addDate("Monday",2)}>2</li><li onClick={()=>addDate("Monday",16)}>16</li><li onClick={()=>addDate("Monday",30)}>30</li></ul>
                <ul><li  className='li'>Tuesday</li><li onClick={()=>addDate("Tuesday",3)}>3</li><li onClick={()=>addDate("Tuesday",17)}>17</li><li onClick={()=>addDate("Tuesday",31)}>31</li></ul>
                <ul><li  className='li'>Wednesday</li><li onClick={()=>addDate("Wednesday",4)}>4</li><li onClick={()=>addDate("Wednesday",18)}>18</li></ul>
                <ul><li  className='li'>Thursday</li><li onClick={()=>addDate("Thursday",5)}>5</li><li onClick={()=>addDate("Thursday",19)}>19</li></ul>
                <ul><li className='li'>Friday</li><li onClick={()=>addDate("Friday",6)}>6</li><li onClick={()=>addDate("Friday",20)} >20</li></ul>
                <ul><li   className='li'>Saturday</li><li onClick={()=>addDate("Saturday",7)}>7</li><li onClick={()=>addDate("Saturday",21)}>21</li></ul>

            </div>
            
            </div>

            <div className="rightdays">
            
            <div className="days">
                <ul><li className='li'>Sunday</li><li onClick={()=>addDate("sunday",8)}>8</li><li onClick={()=>addDate("sunday",22)}>22</li><li>-</li></ul>
                <ul><li className='li'>Monday</li><li onClick={()=>addDate("Monday",9)}>9</li><li onClick={()=>addDate("Monday",23)}>23</li><li>-</li></ul>
                <ul><li className='li'>Tuesday</li><li onClick={()=>addDate("Tuesday",10)}>10</li><li onClick={()=>addDate("Tuesday",24)}>24</li><li>-</li></ul>
                <ul><li className='li'>Wednesday</li><li onClick={()=>addDate("Wednesday",11)}>11</li><li onClick={()=>addDate("Wednesday",25)}>25</li><li>-</li></ul>
                <ul><li className='li'>Thursday</li><li onClick={()=>addDate("Thursday",12)}>12</li><li onClick={()=>addDate("Thursday",26)}>26</li><li>-</li></ul>
                <ul><li className='li'>Friday</li><li onClick={()=>addDate("Friday",13)}>13</li><li onClick={()=>addDate("Friday",27)}>27</li><li>-</li></ul>
                <ul><li className='li'>Saturday</li><li onClick={()=>addDate("Saturday",14)}>14</li><li onClick={()=>addDate("Saturday",28)}>28</li><li>-</li></ul>

            </div>
        



            </div>
           
        </div>
        <div className="screen">
            Screen

        </div>


        <div className="seats">
        <div className="left">
            {
                seatingData.map((item,index)=>{
                    return(
                        <button className={item.no==x?activeBtn:inActiveBtn}  onClick={(e)=>{
                            setX(item.no)
                            selectedSeat(item.no)
                            

                            }} >{item.no}</button>
                        )
                }
                )
                
            
            }


        </div>
        <div className="middle">
        {
                Seats.map((item,index)=>{
                    return(
                        <button className={item.no==x?activeBtn:inActiveBtn} onClick={()=>{
                            setX(item.no)
                            selectedSeat(item.no)}} >{item.no}</button>
                        )
                }
                )
                
            
            }
        </div>

        <div className="middle">
        {
                Seats3.map((item,index)=>{
                    return(
                        <button  className={item.no==x?activeBtn:inActiveBtn} onClick={()=>{
                            setX(item.no)
                            selectedSeat(item.no)}} >{item.no}</button>
                        )
                }
                )
                
            
            }
        </div>
      

        </div>

      <button className='btn4 ' onClick={()=>payment(id,date,tickets)}>Confirm Booking</button>

        <div className="details">
            <span className='bg-success '>Selected</span>
            <span className='bg-danger'>Booked</span>
            
        </div>
     
    </div>
  )
}

const mapStateToProps=state=>({
    date:state.DateReducer.date,
    tickets:state.Ticketreducer

    
})
export default connect(mapStateToProps,{addTicket,addDate})(BookingSeat)
