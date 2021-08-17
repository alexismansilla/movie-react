import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';

import './MovieCatalog.scss';

export default function MovieCatalog(props) {
  const { movies: { results } } = props;

  return results.map(movie => (
    <Col xs={{ span: 5, offset: 1}} className='movie-catalog'>
      <MovieCard movie={movie} />
    </Col>
  ));
}

function MovieCard({movie: {id, title, poster_path}}) {
  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{width: 240}}
        cover={<img alt={title} src={posterPath} />}
        actions={["Ver"]} >
        <Meta title={title} />
      </Card>
    </Link>
  );
}
