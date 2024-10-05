import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import profile from "./profile.jpg";
import "./globals.css";
export default function Home() {
  return (
         <div>
    
      <Header />
      <div className="pageContainer">
        <div className="parentContainer">
          Hello EveryOne ! 
          <br />
          My Name is <span className="pinkColor">Muhammad Rasheed</span>
          <br />I Am Student Of GIAIC <span className="pinkColor">Second Quarter</span>
        </div>
        <div className="imageContainer">
         <img src={"https://i.pinimg.com/736x/f6/d9/fd/f6d9fd18bf36b85a19418759f8719907.jpg"} alt="profile.jpg"/>
         
          </div>
        </div>
         <Footer/>
         </div>
        
        );
       }