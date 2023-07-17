import { BsCheckLg } from "react-icons/bs"
import "./pricingCard.css";

export default function PricingCard({ header, subscribe, list }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 text-light pricing-card text-center mt-5">
            <h3>{header}</h3>
            <div>
                <p><span className="subscribe">{subscribe}$</span> /per month</p>
                <ul className="text-start row gap-3 pt-4 mb-5">
                    <li className="d-flex align-items-center"><BsCheckLg size={18} /> <span className="list">{list[0]}</span></li>
                    <li className="d-flex align-items-center"><BsCheckLg size={18} /> <span className="list">{list[1]}</span></li>
                    <li className="d-flex align-items-center"><BsCheckLg size={18} /> <span className="list">{list[2]}</span></li>
                    <li className="d-flex align-items-center"><BsCheckLg size={18} /> <span className="list">{list[3]}</span></li>
                </ul>
                <button className="mt-5">Get Started</button>
            </div>
        </div>
    );
}
