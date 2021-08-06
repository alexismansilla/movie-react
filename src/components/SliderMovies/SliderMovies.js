import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

import './SliderMovies.scss';

export default function SliderMovies({movies: { result, loading } = {}}) {
  if (loading || !result) {
    return <Loading />;
  }

  const { results } = result || {};

  return (
    <Carousel autoplay className="slider-movies">
      { results.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie({ movie }) {
  const { id, title, overview, backdrop_path } = movie || {};
  const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`

  return (
    <div className="slider-movies__movie" style={{ backgroundImage: `url('${backdropPath}')`}}>
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">More Information</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
