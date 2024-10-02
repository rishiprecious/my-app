import Image from "next/image";
import profile from "./profile.jpg";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="pinkColor">Muhammad Rasheed</span>
          <br />I Am A Student Of <span className="blueColor"> Q2 GIAIC</span>
        </div>
        <div className="childContainer"></div>
  
          <img src={"https://i.pinimg.com/736x/f6/d9/fd/f6d9fd18bf36b85a19418759f8719907.jpg"} alt="sorry" height={200}  width={200}/>
          </div>pg
  
    </div>
  );
}