import { useEffect, useState } from 'react';
import { Radio } from 'react-loader-spinner'
import Axios from "axios";
import { Link } from "react-router-dom";
import GamesPlatform from "../Components/GamesPlatform/GamesPlatform"
import Footer from '../Components/Footer/Footer';

export default function Home() {

    var [loading, setLoading] = useState(true);


    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "HOME";
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

    return (
        <>
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
                    <div className="layoutImgHome">
                        <div className="content container pb-5">
                            <p className="text-center display-6 text-light">Top Games.</p>
                            <div className="row g-3 mt-3 justify-content-center">
                                {data && data.slice(0, 9).map((card) =>
                                    <Link to={`/${card.id}`} key={card.id} className="text-decoration-none text-light col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column wahed-card-home justify-content-between">
                                        <img className="rounded" src={card.thumbnail} alt={card.title} loading='lazy' width="100%" />
                                        <h5>{card.title}</h5>
                                        <p className="h-100">{card.short_description}</p>
                                        <span className=
                                            {
                                                card.genre === "Shooter" ? "wahed-bg-orange " : "" ||
                                                    card.genre === "MMORPG" ? "wahed-bg-green" : "" ||
                                                        card.genre === "ARPG" ? "wahed-bg-red" : "" ||
                                                            card.genre === "MMO" ? "wahed-bg-orange" : "" ||
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
                        </div>
                    </div>
            }
            <GamesPlatform />
            <Footer />
        </>
    );
}