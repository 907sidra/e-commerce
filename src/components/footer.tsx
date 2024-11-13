import "../style/footer.css";
import Image from "next/image"

export default function Footer(){
    return(
        <main className="main-foot">
        <footer className="footer-con">
            <Image src="/images/google.png" width="60" height="20"
            alt="pic"
            className="images"
            />
            <Image src={"/images/Trello.png"}
            width={65}
            height={15} alt="pic" className="images"
            />
            
            <Image src={"/images/logos_monday.png"}
            width="80"
            height="15" alt="pic" className="images"
            />
             
            <Image src="/images/Notion.png"
            width="75"
            height="30" alt="pic" className="images"
            />
            <Image src={"/images/Slack.png"}
            width={70}
            height={20} alt="pic" className="images"
            />
           

            
        </footer>

        </main>





    )
}
