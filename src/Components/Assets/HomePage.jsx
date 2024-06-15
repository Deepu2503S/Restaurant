import { BiColor } from "react-icons/bi"
import { IoIosArrowForward } from "react-icons/io";

function openMenu(){
    return(
        <Menu />
    );
}
export default function HomePage(){
    return (
        <div className="fullPage" >
            <div className="h1">Hungry?</div>
            <div className="subscript">
                <p>We've Got Your Next Favorite Meal!</p>
                <button className="Redirect" onClick={openMenu}> <IoIosArrowForward /> </button>
            </div>
        </div>
    )
    }
    