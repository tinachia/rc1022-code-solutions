import React from 'react';
import ReactDom from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    img: 'https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg'
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmshxlxPc81NcwqCEWK8XKmdcPo_4qeYiU5KiVye7eQUyqOgGb_drrMRc2639qwUsmvYI&usqp=CAU'
  },
  {
    id: 3,
    img: 'https://www.thefactsite.com/wp-content/uploads/2021/05/the-hulk-facts-740x370.webp'
  },
  {
    id: 4,
    img: 'https://comics2film.com/images/1056/594/1/thor-the-dark-world-chris-hemsworth-marvel-studios-wallpaper.jpg'
  },
  {
    id: 5,
    img: 'https://i.insider.com/5315eccc6da811344934503c?width=1000&format=jpeg&auto=webp'
  }
];

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<Carousel imgSrc={images} />);
