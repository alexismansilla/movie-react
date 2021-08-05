import React from 'react';
import { Carousel, Button } from 'antd';

import './SliderMovies';

export default function SliderMovies(props) {
  const { movies } = props;
  const { result, loading } = movies;

  if(loading || result ) {
    return "Loading...";
  }

  return (
    <Carousel autoplay className="slider-movies">
      <p>Waiting...</p>
    </Carousel>
  );
}
