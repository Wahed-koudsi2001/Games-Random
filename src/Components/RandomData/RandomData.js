import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RandomData() {

    let [data, setData] = useState([]);

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

        async function fetchData() {
            try {
                const response = await Axios.request(options);
                const game = response.data;
                setData(game)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);



    return (
        <>
            <div className="content pb-5">
                <div className="row g-3 mt-3 justify-content-center">
                    {data.slice(0, 9).map((card) =>
                        <Link to={card.id.toString()} key={card.id} className="text-decoration-none text-light col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column wahed-card-home justify-content-between">
                            <img className="rounded" src={card.thumbnail} alt={card.title} loading="lazy" width="100%" />
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
            </div>
        </>
    )
}