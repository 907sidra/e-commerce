import "../style/header.css";
import Link from "next/link"

   export default function Header(){
    return(
        <div className="header">
            {/* left */}
            <div className="header-left-div">
                <h1 className="logo">Design<span className="orange">AGENCY</span></h1>
            </div>
            {/* right */}
            <div className="header-right-div">
                <ul className="header-list">
                
                <li ><Link className="links" href={"/"}>Home</Link></li>
                <li>
                <Link className="links" href={"/service"}>Services</Link>
                {/* Dropdown Menu */}
            {/* <ul>
                <li><Link className="links" href={"/service1"}>Service 1</Link></li>
                <li><Link className="links" href={"/service2"}>Service 2</Link></li>
                <li><Link className="links" href={"/service3"}>Service 3</Link></li>
            </ul> */}
            </li>
                <li ><Link className="links" href={"/contact"}>contact us</Link></li>
                
                <button className="login-btn">Login</button>
                <button className="reg-btn">Register</button>
                </ul>
            </div>
        </div>
    )
}

