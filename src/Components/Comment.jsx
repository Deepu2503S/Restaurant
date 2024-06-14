import { useState } from "react";
import { BiBorderRadius } from "react-icons/bi";



export default function Comment(){
let[formData,setFormData]=useState({
    username:"",
    remarks:"",
    rating:5
})

let added=()=>{
    <p>Thanks For Your Feedback</p>
}

let handleInputChange= (event) =>{
    setFormData((currData)=>{
        return{...currData,[event.target.name]:event.target.value};
    })
}

let handleSubmit=(event)=>{
    console.log(forMData);
    event.preventDefault();
    setFormData({
        username:"",
        remarks:"",
        rating:5
    })
}
let style1={
    color:"white",
}
let style2={
    fontSize:"20px",
}
let style3={
    fontSize:"30px",
    color:"#04AA6D",
}
let style4={
    backgroundColor: "#04AA6D",
    border: "none",
    color: "white",
    padding: "20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    BorderRadius:"10px",
}


return (
    <div>
        <h4 style={style3}>Give A Comment</h4>
        <br></br><br></br>
        <form onSubmit={handleSubmit} style={style1}>
            <label style={style2} htmlFor="username">Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input name="username" id="username" placeholder="username" type="text" value={formData.username} onChange={handleInputChange}></input>
            <br></br>
            <label style={style2} htmlFor="remarks">Please Add Your Valuable Feedback&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <textarea name="remarks" id="remarks" value={formData.remarks} placeholder="Add Remarks Here" onChange={handleInputChange}>Remarks</textarea>
            <br></br>
            <label style={style2} htmlFor="ratings">Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input name="rating" id="rating" placeholder="ratings" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange}></input>
            <br></br>
            <button onClick={added} style={style4}>Click Here To Add Your Feedback To Our Website</button>
        </form>
    </div>
)
}