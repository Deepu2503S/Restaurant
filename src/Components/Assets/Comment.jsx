import { useState } from "react";

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
    fontSize:"40px",
}
let style3={
    fontSize:"70px",
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
    borderRadius:"15px",
}
let style5={
    fontSize:"20px",
    color: "black",
}

return (
    <div>
        <h4 style={style3}>Rate us!</h4>
        <h3 style={style5}>We appreciate your feedback.</h3>
        <form onSubmit={handleSubmit} style={style1}>
            {/* <label style={style2} htmlFor="username">Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input name="username" id="username" placeholder="username" type="text" value={formData.username} onChange={handleInputChange}></input> */}
            <label style={style2} htmlFor="remarks">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <textarea name="remarks" id="remarks" value={formData.remarks} placeholder="What can we do to improve your experience?" onChange={handleInputChange}>Remarks</textarea>
            <br></br>
            <label style={style2} htmlFor="ratings">Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input name="rating" id="rating" placeholder="Your rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange}></input>
            <button onClick={added} style={style4}>Submit Feedback</button>
        </form>
    </div>
)
}
