// Record.js
import React, { useState, useEffect } from 'react';
import * as config from '../../utils/config.json';
import Cookies from 'js-cookie';
import '../../styles/Record.css';

const { MOVIE_API } = config;

function Record({ record }) {
  const imageUrl = record.poster_path ? `${MOVIE_API.base_url}${record.poster_path}` : 'placeholder_image_url';
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const initialLikedStatus = Cookies.get(`liked_${record.id}`);
    if (initialLikedStatus === 'true') {
      setLiked(true);
    }
  }, [record.id]);

  const handleLikeClick = () => {
    setLiked((prevLiked) => {
      const newLikedStatus = !prevLiked;
      Cookies.set(`liked_${record.id}`, newLikedStatus, { expires: 7 });
      return newLikedStatus;
    });
  };

  return (
    <div className={`record-box ${liked ? 'liked' : ''}`}>
      <img src={imageUrl} alt="Record" />
      <div className="record-details">
        <h3>{record.title}</h3>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
          ❤️
        </button>
      </div>
    </div>
  );
}

export default Record;
