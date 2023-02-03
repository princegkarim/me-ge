import React, { useState, useEffect } from 'react';

export default function Meme() {
  const [data, setData] = useState([]);
  const [memeImage, setMemeImage] = useState('');

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data.memes);
      });
  }, []);

  const getMemeImage = () => {
    const randomNum = Math.floor(Math.random() * data.length);
    const { url } = data[randomNum];
    setMemeImage(url);
  };

  return (
    <main>
      <div className='form'>
        <input type='text' className='form--input' placeholder='Top text' />
        <input type='text' className='form--input' placeholder='Bottom text' />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img src={memeImage} className='meme--image' />
      </div>
    </main>
  );
}
