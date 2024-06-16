import { useState } from "react";
import "./Our_Branches.css";
import { LuMapPin } from "react-icons/lu";

const Branches = () => {
  const [booking1, setBooking1] = useState("Book a Table");
  const [booking2, setBooking2] = useState("Book a Table");
  const [booking3, setBooking3] = useState("Book a Table");
  const [bgColors1, setBgColors1] = useState("BurlyWood");
  const [bgColors2, setBgColors2] = useState("BurlyWood");
  const [bgColors3, setBgColors3] = useState("BurlyWood");

  function handleClick1() {
    if (booking1 === "Booked") {
      setBooking1("Book a Table");
      setBgColors1("BurlyWood");
    } else {
      setBooking1("Booked");
      setBgColors1("greenyellow");
    }
  }

  function handleClick2() {
    if (booking2 === "Booked") {
      setBooking2("Book a Table");
      setBgColors2("BurlyWood");
    } else {
      setBooking2("Booked");
      setBgColors2("greenyellow");
    }
  }

  function handleClick3() {
    if (booking3 === "Booked") {
      setBooking3("Book a Table");
      setBgColors3("BurlyWood");
    } else {
      setBooking3("Booked");
      setBgColors3("greenyellow");
    }
  }

  return (
    <>
      <div className="placards3">
        <div className="cards3">
          <div className="d">
            <div className="name2">Laxmi Nagar , New Delhi</div>
            <div className="imge">
              <img src="https://i.pinimg.com/originals/92/88/a5/9288a57e7670c7e1bff27c8866525823.jpg" alt="Laxmi Nagar Branch"/>
            </div>
            <div className="info">
              <div className="info1">
                <div>
                  <a className="shorten">Manager: </a>Mr. RK Sharan Gupta
                </div>
              </div>
              <div className="info1">
                <div>
                  <a className="shorten">Address: </a>
                  <LuMapPin /> On Map
                </div>
              </div>
              <div className="socialmedia">
                <p>Open 24 Hours</p>
                <p>Both Dine In And Delivery Available</p>
              </div>
              <div className="buttons2">
                <button className="huhu2" onClick={handleClick1} style={{ backgroundColor: bgColors1 }}>
                  {booking1}
                </button>
              </div>
            </div>
          </div>
          <div className="ss">
            <div className="name2">Punjabi Bagh, New Delhi</div>
            <div className="imge">
              <img src="https://wallpapercave.com/wp/wp1874173.jpg" alt="Punjabi Bagh Branch"/>
            </div>
            <div className="info">
              <div className="info1">
                <div>
                  <a className="shorten">Manager: </a>Mr Neeraj Chauhan
                </div>
              </div>
              <div className="info1">
                <div>
                  <a className="shorten">Address: </a>
                  <LuMapPin /> On Map
                </div>
              </div>
              <div className="socialmedia">
                <p>Open 24 Hours</p>
                <p>Dine In Available</p>
              </div>
              <div className="buttons2">
                <button className="huhu2" onClick={handleClick2} style={{ backgroundColor: bgColors2 }}>
                  {booking2}
                </button>
              </div>
            </div>
          </div>
          <div className="sm">
            <div className="name2">Rajendra Nagar, New Delhi</div>
            <div className="imge">
              <img src="https://biancas-blog.de/wp-content/uploads/2015/09/Matsuhia-Munich-Mandarin-Oriental-Restaurant-Bar-5a.jpg" alt="Rajendra Nagar Branch"/>
            </div>
            <div className="info">
              <div className="info1">
                <div>
                  <a className="shorten">Manager: </a>Mr Raman Jha
                </div>
              </div>
              <div className="info1">
                <div>
                  <a className="shorten">Address: </a>
                  <LuMapPin /> On Map
                </div>
              </div>
              <div className="socialmedia">
                <p>Open 24 Hours</p>
                <p>Both Dine In And Delivery Available</p>
              </div>
              <div className="buttons2">
                <button className="huhu2" onClick={handleClick3} style={{ backgroundColor: bgColors3 }}>
                  {booking3}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branches;
