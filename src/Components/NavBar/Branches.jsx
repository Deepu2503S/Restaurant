import "./Our_Branches.css" ;
import { FaFacebook,FaTwitter,FaInstagram ,} from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const Branches = () => {
  return (

  <>
    {/* <div>Reach All Our Branches</div> */}
    <div className="placards3">
      <div className="cards3">
        <div className="d">
        <div className="name">Laxmi Nagar , New Delhi</div>
        <div className="imge"><img src="https://i.pinimg.com/originals/92/88/a5/9288a57e7670c7e1bff27c8866525823.jpg"></img></div>
        <div className="info">
        <div className="info1">
        <div><a className="shorten">Manager: </a>Mr. RK Sharan Gupta</div>
        </div>
        <div className="info1">
        <div><a className="shorten">Address: </a><LuMapPin/>On Map</div>
        </div>
        <div className="socialmedia">
        <p>
          Open 24 Hours
        </p>
        <p>
          Both Dine In And Delivery Available
        </p>
        </div>
        <div className="buttons2">
          <button className="huhu2">Book a Table</button>
        </div>
        </div>
        </div>
        <div className="ss">
        <div className="name">Punjabi Bagh,New Delhi</div>
        <div className="imge"><img src="https://wallpapercave.com/wp/wp1874173.jpg"></img></div>
        <div className="info">
        <div className="info1">
        <div ><a className="shorten">Manager: </a>Mr Neeraj Chauhan</div>
        </div>
        <div className="info1">
        <div><a className="shorten">Address: </a><LuMapPin/>On Map</div>
        </div>

        <div className="socialmedia">
        <p>
          Open 24 Hours
        </p>
        <p>
          Dine In Available
        </p>
        </div>
        <div className="buttons2">
          <button className="huhu2">Book a Table</button>
        </div>
        </div>
        </div>
        <div className="sm">
        <div className="name">Rajendra Nagar,New Delhi</div>
        <div className="imge"><img src="https://biancas-blog.de/wp-content/uploads/2015/09/Matsuhia-Munich-Mandarin-Oriental-Restaurant-Bar-5a.jpg"></img></div>
        <div className="info">
        <div className="info1">
        <div><a className="shorten">Manager: </a>Mr Raman Jha</div>
        </div>
        <div className="info1">
        <div><a className="shorten">Address: </a><LuMapPin/>On Map</div>
        </div>
        <div className="socialmedia">
        <p>
          Open 24 Hours
        </p>
        <p>
          Both Dine In And Delivery Available
        </p>
        </div>
        <div className="buttons2">
          <button className="huhu2">Book a Table</button>
        </div>
        </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Branches
