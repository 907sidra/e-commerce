// eslint-disable @typescript-eslint/no-unused-vars

import "../style/hero.css"
import Image from "next/image"
export default function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                
                {/*right side*  */}
                <div className="hero-right-div">
                    <h1 className="title-head"><b>Increase Your Customers Loyalty and Satisfaction</b></h1>
                    <p className="des-hero" >We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                    <div>
                    <button  className="hero-button">Get Started</button>
                    </div>
                </div>
                {/* left side */}
                <div>
<Image src={"/images/girl.png"}
width={500}
height={400}
className="hero-image"
alt="picture"/>
                </div>
            </div>
        </div>
    )
}