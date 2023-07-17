import Footer from "../Components/Footer/Footer";
import PricingCard from "../Components/PricingCard/PricingCard";
import pricingData from "../data/data";

export default function Pricing() {

    document.title = "PRICING"

    const card = pricingData.map((el) => {
        return <PricingCard header={el.header} subscribe={el.subscribe} list={el.list} />
    });

    return (
        <div className="layout-pricing">
            <div className="py-5 container">
                <div className="py-5">
                    <h3 className="text-center text-light pt-5">Pricing Plan.</h3>
                    <div className="row justify-content-center gap-3">
                        {card}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
