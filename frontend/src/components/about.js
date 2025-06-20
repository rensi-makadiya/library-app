// React Component (About.js)
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <br />
      <h1 className="text-uppercase fw-bold font-monospace text-center">About us</h1>
      <div className='about-content'>
        <div className='about-item'>
          <h3><span>--01</span></h3>
          "Experience the kaleidoscope of emotions within our pages,<br></br> where laughter, tears, and everything in between dance in harmony."
        </div>
        <div className='about-item'>
          <h3><span>--02</span></h3>
          "Step into the labyrinth of our stories, where twists and turns<br></br> await at every corner, guiding you to unexpected destinations."
        </div>
        <div className='about-item'>
          <h3><span>--03</span></h3>
          "Savor the exquisite flavors of our prose, where vivid descriptions<br></br> and lyrical language tantalize the senses, leaving an imprint on your soul."
        </div>
        <div className='about-item'>
          <h3><span>--04</span></h3>
          "Engage with the intricate web of our plots, where each thread meticulously<br></br> woven leads to a breathtaking tapestry of narrative."
        </div>
      </div>
    </div>
  );
};

export default About;
