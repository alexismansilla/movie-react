import React from 'react';
import useFetch from '../hooks/useFetch';
import { Row, Col } from 'antd';
import { URL_API, API } from '../utils/contants';
import MovieList from '../components/MovieList';
import SliderMovies from '../components/SliderMovies';

export default function Home() {
  const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);
  const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);
  const topRated = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`);

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList movies={popularMovies} title="Popular Movies" />
        </Col>
        <Col span={12}>
          <MovieList movies={topRated} title="Top Rated" />
        </Col>
      </Row>
    </>
  );
}
