import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    // Función para renderizar una sección con el título y categoría especificados
    const renderSection = (title, category, type) => {
        return (
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>{title}</h2>
                    <Link to={`/${category}`}>
                        <OutlineButton className="small">View more</OutlineButton>
                    </Link>
                </div>
                <MovieList category={category} type={type} />
            </div>
        );
    };

    return (
        <>
            <HeroSlide />
            <div className="container">
                {renderSection('Trending Movies', category.movie, movieType.popular)}
                {renderSection('Top Rated Movies', category.movie, movieType.top_rated)}
                {renderSection('Trending TV', category.tv, tvType.popular)}
                {renderSection('Top Rated TV', category.tv, tvType.top_rated)}
            </div>
        </>
    );
};

export default Home;
