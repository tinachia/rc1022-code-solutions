import React from 'react';
import ReactDom from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  { id: 1, name: 'Captain America', details: 'Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.'},
  { id: 2, name: 'Iron Man', details: 'Genius. Billionaire. Philanthropist. Tony Stark\'s confidence is only matched by his high- flying abilities as the hero called Iron Man.' },
  { id: 3, name: 'Hulk', details: 'Dr.Bruce Banner lives a life caught between the soft-spoken scientist he\'s always been and the uncontrollable green monster powered by his rage.' }

]

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<Accordion topics={topics} />);
