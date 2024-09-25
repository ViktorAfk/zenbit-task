import React from 'react';
import { Description } from '../description/Description';
import { Title } from '../title/Title';
import './Hero-screen.css';
import { Link } from 'react-router-dom';

export const HeroScreen: React.FC = () => {
  return (
    <section className="hero-screen">
      <div className="container hero-container">
        <Title />
        <Description />
        <div className="hero-link-container">
          <Link className="hero-link merriweather-bold" to={'#'}>
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};
