import "./Contact.css" ;
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="placards3">
      <div className="cards3">
        <div className="d">
        <div className="name1">Deepanshu Singh</div>
        <div className="img"><img src="https://tse2.mm.bing.net/th?id=OIP.i96I-BcM8xEgPTv4N5g0ogHaFj&pid=Api&P=0&h=180"></img></div>
        <div className="info">
        <div className="info1">
        <div><a className="shorten">Phone No: </a><p className="hide">7465236899</p></div>
        </div>
        <div className="info1">
        <div><a className="shorten">&nbsp;&nbsp;&nbsp;Email: </a><p className="hide">deepanshu.singh@gmail.com</p></div>
        </div>
        <div className="socialmedia">
        <FaFacebook/>&nbsp;
        <FaInstagram/>&nbsp;
        <FaTwitter/>
        </div>
        </div>
        </div>
        <div className="ss">
        <div className="name1">Shreya Sarnagar</div>
        <div className="img"><img src="https://tse2.mm.bing.net/th?id=OIP.i96I-BcM8xEgPTv4N5g0ogHaFj&pid=Api&P=0&h=180"></img></div>
        <div className="info">
        <div className="info1">
        <div ><a className="shorten">Phone No: </a><p className="hide">9823656564</p></div>
        </div>
        <div className="info1">
        <div><a className="shorten">&nbsp;&nbsp;&nbsp;Email: </a><p className="hide">shreya.sarnagar@yahoo.com</p></div>
        </div>

        <div className="socialmedia">
        <FaFacebook/>&nbsp;
        <FaInstagram/>&nbsp;
        <FaTwitter/>
        </div>
        </div>
        </div>
        <div className="sm">
        <div className="name1">Shambhavi Mishra</div>
        <div className="img"><img src="https://tse2.mm.bing.net/th?id=OIP.i96I-BcM8xEgPTv4N5g0ogHaFj&pid=Api&P=0&h=180"></img></div>
        <div className="info">
        <div className="info1">
        <div><a className="shorten">Phone No: </a><p className="hide">8743625367</p></div>
        </div>
        <div className="info1">
        <div><a className="shorten">&nbsp;&nbsp;&nbsp;Email: </a><p className="hide">shambhavi.mishra@gmail.com</p></div>
        </div>
        <div className="socialmedia">
        <FaFacebook/>&nbsp;
        <FaInstagram/>&nbsp;
        <FaTwitter/>
        </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
