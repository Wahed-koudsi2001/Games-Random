import { BsPlay } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai"
import Axios from "axios";
import Footer from "../Components/Footer/Footer";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";


export default function GamesbyTag() {

    const [selectedPlatform, setSelectedPlatform] = useState("All");

    const filterCards = (cards) => {
        if (selectedPlatform === "All") {
            return cards;
        } else {
            return cards.filter(card => card.genre === selectedPlatform);
        }
    }

    const [data, setData] = useState([]);

    const handlePlatformButtonClick = (platform) => {
        setSelectedPlatform(platform);
    }

    useEffect(() => {
        document.title = "GAMES BY TAG"

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
    }, [])

    const [dataDisplay, setDataDisplay] = useState(59);


    return (
        <>
            <div className="layout-games-by-tag">
                <div className="py-5">
                    <div className="py-5 mt-5 container z-index-8">
                        <h1 className="text-center text-light">Games by Tag.</h1>
                        <div className="btns-filter d-flex justify-content-center align-items-center my-5 flex-wrap gap-4 mt-5">
                            <button onClick={() => handlePlatformButtonClick("All")} className="bg-transparent text-light py-2 px-4 p btn btn-light text-ligh">ALL</button>
                            <button onClick={() => handlePlatformButtonClick("MMORPG")} className="bg-transparent text-light py-2 px-4 p btn btn-light text-ligh">MMORPG</button>
                            <button onClick={() => handlePlatformButtonClick("MMO")} className="bg-transparent text-light py-2 px-4 p btn btn-light text-ligh">MMO</button>
                        </div>
                        <div className="row justify-content-between align-items-center text-light">
                            {filterCards(data.slice(50, dataDisplay)).map((card) =>
                                <Link to={`/${card.id}`} className="pb-3 d-flex flex-column justify-content-between align-items-start col-12 col-md-6 col-lg-4 g-4 wahed-games-tap-card" key={card.id}>
                                    <img src={card.thumbnail} alt={card.title} loading="lazy" width="100%" />
                                    <h5 className="wahed-success">{card.title}</h5>
                                    <p className="text-light">{card.short_description.split(" ").slice(0, 10).join(" ")}</p>
                                    <div className="text-light">
                                        <span>developer: {card.developer} <AiFillStar /></span>
                                    </div>
                                    <div className="text-light">
                                        <span>platform: {card.platform}</span>
                                    </div>
                                    <span className={card.genre === "Shooter" ? "text-light bg-danger p-1 rounded" : "text-light bg-primary p-1 rounded"}>{card.genre}</span>
                                    <div className="icons-hover">
                                        <BsPlay />
                                    </div>
                                </Link>
                            )}
                        </div>
                        <div className='m-auto d-flex align-items-center justify-content-center mt-5 wahed-btn gap-3'>
                            {dataDisplay > 80 ? false : <button onClick={() => setDataDisplay(dataDisplay + 6)}>Show More</button>}
                            {dataDisplay > 59 ? <button onClick={() => setDataDisplay(dataDisplay - 6)}>Show Less</button> : false}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


// export const fetchingApiGamesTag = async () => {
//     const options = {
//         method: 'GET',
//         url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
//         params: {
//             platform: 'browser',
//             category: 'mmorpg',
//             'sort-by': 'release-date',
//         },
//         headers: {
//             'X-RapidAPI-Key': '24691b4a32msh7dfc8ca8caa0b02p180402jsn98b29b45bed3',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await Axios.request(options);
//         return response.data
//     } catch (error) {
//         console.error(error);
//     };
// }
