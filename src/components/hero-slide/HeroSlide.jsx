import React, { useState, useEffect } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import tmdbApi, { movieType } from '../../api/tmdbApi';
import { useNavigate } from 'react-router-dom';

import './hero-slide.scss';

import HeroSlideItem from './HeroSlide';

const HeroSlide = () => {
    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(1, 4));
                console.log(response);
            } catch (error) {
                console.log('error', error);
            }
        };
        getMovies();
    }, []);

    const navigateToMovie = (id) => {
        navigate(`/movie/${id}`);
    };

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem item={item} isActive={isActive} onNavigate={navigateToMovie} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {}
        </div>
    );
};

export default HeroSlide;
