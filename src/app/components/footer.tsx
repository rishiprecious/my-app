import Link from "next/link";


export default function Footer(){
    return(
        <div className="footer">
            <ul className="footer-buttons">
                <Link href={"/"}>
                <li>Home</li></Link>
                <Link href={"about-us"}>
                <li>About us</li></Link>
                <Link href={"contact-us"}>
                <li>Contact us</li></Link>
                <Link href={"jobs"}>
                <li>Jobs</li></Link>


            </ul>
        </div>
    )
}