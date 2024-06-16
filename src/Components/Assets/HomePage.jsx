import { BiColor } from "react-icons/bi"
import { IoIosCafe } from "react-icons/io";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";



export default function HomePage(){
    const nav = useNavigate
    function openMenu(){
        nav("/Contact");
    }
    return (
        <div className="fullPage" >
            <div className="h1">Hungry?</div>
            <div className="subscript">
                <p>We've Got Your Next Favorite Meal!</p>
            </div>
            <div className="opnmen">
                <Link to="/Menu"><button className="Redirect"><IoIosCafe /> </button></Link>
            </div>
        </div>
    )
    }
    