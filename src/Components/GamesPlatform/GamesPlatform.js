import { Radio } from 'react-loader-spinner'
import Axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./gamesPlatform.css";

export default function GamesPlatform() {

    const [loading, setLoading] = useState(true);
    const [selectedPlatform, setSelectedPlatform] = useState("All");

    const [data, setData] = useState([]);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
            params: {
                tag: '3d.mmorpg.fantasy.pvp',
                platform: 'pc'
            },
            headers: {
                'X-RapidAPI-Key': '24691b4a32msh7dfc8ca8caa0b02p180402jsn98b29b45bed3',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const res = async () => {
            try {
                const response = await Axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        res();
        setLoading(false);
    }, [loading]);

    const filterCards = (cards) => {
        if (selectedPlatform === "All") {
            return cards;
        } else {
            return cards.filter(card => card.genre === selectedPlatform);
        }
    }

    const handlePlatformButtonClick = (platform) => {
        setSelectedPlatform(platform);
    }

    const [dataDisplay, setDataDisplay] = useState(9);


    return (
        <div style={{ background: "#2b2b31" }} className='py-5' >
            <div className="container wahed-padding">
                <h2 className="text-center text-light mb-3">Games by platform.</h2>
                <div className="btns-filter d-flex justify-content-center align-items-center my-5 flex-wrap gap-4 mt-5">
                    <button onClick={() => handlePlatformButtonClick("All")} className={`py-2 px-4 p btn btn-light bg-transparent text-light ${selectedPlatform === "All" ? "active" : ""}`}>All</button>
                    <button onClick={() => handlePlatformButtonClick("MMORPG")} className={`py-2 px-4 p btn btn-light bg-transparent text-light ${selectedPlatform === "Browser" ? "active" : ""}`}>MMORPG</button>
                    <button onClick={() => handlePlatformButtonClick("MMO")} className={`py-2 px-4 p btn btn-light bg-transparent text-light ${selectedPlatform === "Pc" ? "active" : ""}`}>MMO</button>
                </div>
                {
                    loading ?
                        <div className='spinner'>
                            <Radio
                                visible={true}
                                height="85"
                                width="85"
                                ariaLabel="radio-loading"
                                wrapperStyle={{}}
                                wrapperClass="radio-wrapper"
                            />
                        </div>
                        :

                        <div className="content pb-5">
                            <div className="row g-3 mt-3 justify-content-center">
                                {filterCards(data.slice(0, dataDisplay)).map((card) =>
                                    <Link to={`/${card.id}`} data-platform={card.platform} key={card.id} className="text-decoration-none text-light col-12 col-md-6 col-lg-4 d-flex flex-column wahed-card-home justify-content-between">
                                        <img className="rounded" src={card.thumbnail} alt={card.title} loading='lazy' width="100%" />
                                        <h5>{card.title}</h5>
                                        <p className="h-100">{card.short_description}</p>
                                        <span className=
                                            {
                                                card.genre === "Shooter" ? "wahed-bg-orange " : "" ||
                                                    card.genre === "MMORPG" ? "wahed-bg-green" : "" ||
                                                        card.genre === "ARPG" ? "wahed-bg-red" : "" ||
                                                            card.genre === "Strategy" ? "wahed-bg-pink" : "" ||
                                                                card.genre === "Fighting" ? "wahed-bg-action" : "" ||
                                                                    card.genre === "Action RPG" ? "wahed-bg-custom" : ""
                                            }
                                        >
                                            {card.genre}
                                        </span>
                                    </Link>
                                )}
                            </div>
                            <div className='m-auto d-flex align-items-center justify-content-center mt-5 wahed-btn gap-3'>
                                <button onClick={() => setDataDisplay(dataDisplay + 6)}>Show More</button>
                                {dataDisplay > 9 ? <button onClick={() => setDataDisplay(dataDisplay - 6)}>Show Less</button> : false}
                            </div>
                        </div>
                }
            </div>
        </div >
    )
}
