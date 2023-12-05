import React from 'react';
import * as config from '../../utils/config.json'
import '../../styles/Record.css'

const {MOVIE_API} = config

function Record({ record }) {
  const imageUrl = record.poster_path ? `${MOVIE_API.base_url}${record.poster_path}` : 'placeholder_image_url';
  // console.log(imageBaseUrl);
  return (
    <div className='record-box'>
      <img src={imageUrl} alt="Record"></img>
      <h3>{record.title}</h3>
    </div>
  );
}

export default Record;
