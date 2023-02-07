import React, { useState, useEffect } from 'react';

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllMemeImages(data.data.memes);
      });
  }, []);

  const getMemeImage = () => {
    const randomNum = Math.floor(Math.random() * allMemeImages.length);
    const { url } = allMemeImages[randomNum];
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          className='form--input'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          className='form--input'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme--image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
