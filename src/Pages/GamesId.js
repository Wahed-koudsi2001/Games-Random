import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsCloudDownload } from "react-icons/bs";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import RandomData from '../Components/RandomData/RandomData';
import { useParams } from 'react-router-dom';

export default function GamesId() {

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "GAMES BY ID";
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: { id: id },
            headers: {
                'X-RapidAPI-Key': '24691b4a32msh7dfc8ca8caa0b02p180402jsn98b29b45bed3',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        async function fetchData() {
            try {
                const response = await Axios.request(options);
                // const game = response.data.find(item => item.id === Number(id));
                const game = response.data;
                setData(game)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const [show, setShow] = useState(true);

    const [numberOfLetters, setNumberOfLetters] = useState(100);

    const hanelReadMore = () => {
        setShow(!show);
        if (!show) {
            setNumberOfLetters(100)
        } else {
            setNumberOfLetters(data.description.length);
        }
    }



    return (
        <div className="wahed-bg-dark wahed-pt-gamesId">
            <div className="container">
                <div className="row text-light flex-column flex-lg-row d-flex justify-content-center align-items-md-center align-items-lg-start">
                    <div className="col-12 col-lg-4">
                        <h3>{data.title}</h3>
                        <p>{data.short_description}</p>
                        <img src={data.thumbnail} alt={data.title} loading='lazy' width="100%" />
                    </div>
                    <div className="col-12 col-lg-8 mt-4">
                        <h3>About the game.</h3>
                        <p>{data.description?.split(" ").slice(0, numberOfLetters).join(" ")}</p>
                        <span className="readmore p-0 text-danger" onClick={hanelReadMore}>{show ? "Read more" : "Read less"}</span>
                        <div>
                            <p className="m-1">Developer: <span className="fw-bold wahed-success">{data.developer}</span> </p>
                            <p className="m-1">Platform: <span className="fw-bold wahed-success">{data.platform}</span> </p>
                            <p className="m-1">Publisher: <span className="fw-bold wahed-success">{data.publisher}</span> </p>
                            <p className="m-1">Release date: <span className="fw-bold wahed-success">{data.release_date}</span> </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className=
                                {
                                    data.genre === "Shooter" ? "wahed-bg-orange" : "" ||
                                        data.genre === "MMORPG" ? "wahed-bg-green" : "" ||
                                            data.genre === "ARPG" ? "wahed-bg-red" : "" ||
                                                data.genre === "Strategy" ? "wahed-bg-pink" : "" ||
                                                    data.genre === "Fighting" ? "wahed-bg-action" : "" ||
                                                        data.genre === "MMO" ? "wahed-bg-orange" : "" ||
                                                            data.genre === "Action RPG" ? "wahed-bg-custom" : ""
                                }
                            >
                                {data.genre}
                            </span>
                            <Link to={data.thumbnail} className="cloud-icon">
                                <BsCloudDownload size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-light my-5">
                    <h3>Minimum System Requirements.</h3>
                    <p className="m-0 fs-6">Graphics: <span className="m-0 p-0 fs-6 wahed-success fw-bold">{data.minimum_system_requirements?.graphics}</span></p>
                    <p className="m-0 fs-6">Memory: <span className="m-0 p-0 fs-6 wahed-success fw-bold">{data.minimum_system_requirements?.memory}</span></p>
                    <p className="m-0 fs-6">OS: <span className="m-0 p-0 fs-6 wahed-success fw-bold">{data.minimum_system_requirements?.os}</span></p>
                    <p className="m-0 fs-6">Processor: <span className="m-0 p-0 fs-6 wahed-success fw-bold">{data.minimum_system_requirements?.processor}</span></p>
                    <p className="m-0 fs-6">Storage: <span className="m-0 p-0 fs-6 wahed-success fw-bold" >{data.minimum_system_requirements?.storage}</span></p>
                </div>
                <div className="random-imgs text-light py-5">
                    <Swiper
                        spaceBetween={25}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {data.screenshots && data.screenshots.map((screenshot, index) => (
                            <SwiperSlide key={index}>
                                <img className='wahed-slider' src={screenshot.image} alt={data.title} loading='lazy' width="100%" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='text-light'>
                    <h3 className='text-center'>Games you may like.</h3>
                    <div className='mt-3'>
                        <RandomData />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}