
import "../style/services.css"
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { SiAdobeindesign } from "react-icons/si";
import { IoLogoGameControllerB } from "react-icons/io";
import { SiAntdesign } from "react-icons/si";
import { SiMaterialdesignicons } from "react-icons/si";
import Header from "@/components/header";

export default function Services(){
    return(
       <><div> <Header /> </div>
       <main className="main">
            <div className="services-con">
                {/* top-div */}
                <div className="top-div-ser">
                    <h2 className="title-ser">My Services</h2>
                    <p className="des-ser">"Explore our services to find the perfect solutions that meet your unique needs and aspirations."</p>
                </div>
                {/* bottom-div */}
                <div className="boxes-con">

                    <div className="box">
                        <FaLaptopCode className="ser-icon" />
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                    </div>
                    <div className="box"><GiSoundOn className="ser-icon" />
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span></div>
                    <div className="box"><SiAdobeindesign className="ser-icon" />
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span></div>
                    <div className="box"><IoLogoGameControllerB className="ser-icon" />
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span></div>
                    <div className="box"><SiAntdesign className="ser-icon" />
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span></div>
                    <div className="box"><SiMaterialdesignicons className="ser-icon" />
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span></div>
                </div>

            </div>
        </main></>
    )
}