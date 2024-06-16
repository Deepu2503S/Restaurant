import React from 'react'
import './Confirmation.css'
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="placards5">
        <div className="cnf"><FaCircleCheck /></div>
        <div className="reC">Yayyyyy!!!!</div>
        <div className="reC">We've Recieved Your Order <br /> We'll be reaching out to you soon!!</div>
        <Link to="/Menu"><button className="continue">Continue Shopping</button></Link>
    </div>
  )
}

export default Confirmation