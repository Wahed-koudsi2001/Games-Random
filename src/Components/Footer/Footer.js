import { BsArrowDownCircle } from "react-icons/bs";
import "./footer.css"

export default function Footer() {
    return (
        <footer style={{ background: " rgb(43, 43, 49) " }} className="text-light">
            <div className="container g-5 d-flex row justify-content-between m-auto">
                <div className="col-12 col-md-6 col-lg-3">
                    <h6> Download Our App </h6>
                    <button className="btn text-secondary border-secondary mt-3 d-flex align-items-center">
                        <span className="me-2">Download</span>
                        <BsArrowDownCircle />
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <h6> Legal </h6>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <h6> Resources </h6>
                    <ul>
                        <li>About Us</li>
                        <li >Pricing Plan</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <h6> Contact </h6>
                    <ul>
                        <li>0155 798 5510</li>
                        <li>Mohammedkoudsi48@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="border-top w-75 mt-3 pt-4 pb-2 d-flex flex-column flex-md-row justify-content-between align-items-center m-auto text-secondary">
                <p>&copy; All Rights reserved 2023 developed by Eng/Wahed Koudsi</p>
                <p>Think twice, code once</p>
            </div>
        </footer >
    )
}
