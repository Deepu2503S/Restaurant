import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Email from './Assets/Email';
import Password from './Assets/Password';
import Submit from './Assets/Submit';
import Google from './Assets/Google';
import Facebook from './Assets/Facebook';

const Login = () => {
  const nav = useNavigate();
  function move() {
    nav("/", { state: { username } }); 
  }
  return (
    <div className="hehe">
      <div className="h1">
        <b>Log In</b>
        <Link to="/SignUp" className='a'>Create an Account</Link>
      </div>
      <form method="get">
        <Email place="Email"/>
        <Password place="Password"/>
        <Submit text="Submit" />
        <div className="aayein">
            <a href="#" >Forgot Password</a>
        </div>
      </form>
      <div className="god">
        <Google text='Continue With Google'/>
        <Facebook text='Continue With Facebook'/>
      </div>
    </div>
  );
}

export default Login;
