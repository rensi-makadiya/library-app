import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './about'
import Rating from './Rating';
import Costmerr from './Costmerr';
import Contact from './contact';

import img1 from '../img/im3.avif';
import e1 from '../img/e1.jpeg';
import e2 from '../img/e2.jpeg';
import e3 from '../img/e3.jpeg';
import r1 from '../img/r1.jpeg';
import r2 from '../img/r3.webp';
import r3 from '../img/r4.webp';
import h1 from '../img/h1.jpeg';
import h2 from '../img/h2.jpeg';
import h3 from '../img/h3.jpeg';
import b1 from '../img/b1.jpeg';
import b2 from '../img/b2.jpeg';
import b3 from '../img/b3.jpeg';
import m1 from '../img/m1.jpeg';
import m2 from '../img/m2.jpeg';
import m3 from '../img/m3.jpeg';
import p1 from '../img/p1.jpeg';
import p2 from '../img/p2.jpeg';
import p3 from '../img/p3.jpeg';

import Footer from './Footer';
import './home.css';





function Home() {
 
  return (
    <>
   {/* First Carousel */}
   <div className='home'>
<div className='row'>
  <div className='col text'> 
      <h1>Laibary</h1>
      <h6>Learning is a lifetime journey. To make this journey enjoyable, we, Noble<br></br>

Library, situated at Malad West, Mumbai, Maharashtra, provide an extensive<br></br> list of books that you will find informative and mind-changing all at once.<br></br> Reading is the best way to pass time and what better way than to<br></br> borrow/purchase books from our library and liberate your mind altogether.<br></br> We provide a safe, comfortable and friendly environment that enables<br></br> learning and advancement of knowledge, and promotes discovery and<br></br> scholarship. Sit down with a cup of coffee and unwind at our book store with<br></br> a book of your choice!</h6>
  
  </div>
  <div className='col'><img src={img1} alt="" /></div>
</div>
</div>




  <br></br><hr></hr><br></br>



<br></br>

<div className='container add1'>

 
  {/* second Carousel */}
  <div className='m1' style={{ margin: '20px', padding: '20px' }}>
  <div className="d-flex position-relative">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ width: '250px' }}>
        <div className="carousel-item active" data-bs-interval="1000" key={1}>
          <img src={e1} className="d-block" alt="..." style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={e2} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={e3} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
      </div>
    </div>

    <div className=" text1"style={{ marginLeft: '30px' }}>
      <div>
        <h3 className="mt-0">Education</h3>
        <p className='text2'>This illuminating book delves into the intricacies of education, covering topics such as pedagogy, curriculum design, assessment strategies, and fostering a culture of lifelong Seeing. Drawing on research and practical insights, it provides educators with the tools and knowledge to create enriching Seeing environments for all students.This illuminating book delves into the intricacies of education, covering topics such as pedagogy, curriculum design, assessment strategies, and fostering a culture of lifelong Seeing. Drawing on research and practical insights, it provides educators with the tools and knowledge to create enriching Seeing environments for all students.</p>
        <button type='button' className='btn btn-outline-dark'>
          <NavLink to='/eduction' style={{ textDecoration: 'none', color: 'inherit' }}>See More</NavLink>
        </button>
      </div>
    </div>
  </div>
</div>

{/* third */}

<div className='m2' style={{ margin: '20px', padding: '20px' }}>
  <div className="d-flex position-relative">
  <div style={{ marginLeft: '30px' }}>
      <div>
        <h3 className="mt-0">Romantic</h3>
        <p>Set in a quaint seaside town, this enchanting novel follows the journey of two souls drawn together by fate. Amidst picturesque landscapes and charming encounters, they navigate the complexities of love, unveiling secrets, overcoming obstacles, and discovering the true essence of romance.Set in a quaint seaside town, this enchanting novel follows the journey of two souls drawn together by fate. Amidst picturesque landscapes and charming encounters, they navigate the complexities of love, unveiling secrets, overcoming obstacles, and discovering the true essence of romance.</p>
        <button type='button' className='btn btn-outline-dark'>
          <NavLink to='/romantic' style={{ textDecoration: 'none', color: 'inherit' }}>See More</NavLink>
        </button>
      </div>
    </div>

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ width: '250px' }}>
        <div className="carousel-item active" data-bs-interval="1000" key={1}>
          <img src={r1} className="d-block" alt="..." style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={r2} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={r3} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
      </div>
    </div>

   
  </div>
</div>
    {/*forth*/}
    <div className='m1' style={{ margin: '20px', padding: '20px' }}>
  <div className="d-flex position-relative">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ width: '250px' }}>
        <div className="carousel-item active" data-bs-interval="1000" key={1}>
          <img src={h1} className="d-block" alt="..." style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={h2} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={h3} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
      </div>
    </div>

    <div style={{ marginLeft: '30px' }}>
      <div>
        <h3 className="mt-0">Horror</h3>
        <p>In the eerie silence of a remote forest, a group of friends stumble upon an ancient burial ground, unleashing a sinister force beyond comprehension. Trapped in a nightmarish reality, they must confront their darkest demons as they fight for survival against an entity hell-bent on devouring their souls.In the eerie silence of a remote forest, a group of friends stumble upon an ancient burial ground, unleashing a sinister force beyond comprehension. Trapped in a nightmarish reality, they must confront their darkest demons as they fight for survival against an entity hell-bent on devouring their souls.</p>
        <button type='button' className='btn btn-outline-dark'>
          <NavLink to='/horror' style={{ textDecoration: 'none', color: 'inherit' }}>See More</NavLink>
        </button>
      </div>
    </div>
  </div>
</div>
    {/*fifth*/}
    <div className='m2' style={{ margin: '20px', padding: '20px' }}>
  <div className="d-flex position-relative">
  <div style={{ marginLeft: '30px' }}>
      <div>
        <h3 className="mt-0">Mystery</h3>
        <p> When renowned detective Sarah Blackwood is called to investigate a series of perplexing disappearances at the historic Midnight Manor, she uncovers a tangled web of secrets, lies, and betrayal. As she delves deeper into the case, Sarah must navigate through a maze of clues and red herrings to unmask the elusive culprit before they strike again.When renowned detective Sarah Blackwood is called to investigate a series of perplexing disappearances at the historic Midnight Manor, she uncovers a tangled web of secrets, lies, and betrayal. As she delves deeper into the case, Sarah must navigate through a maze of clues and red herrings to unmask the elusive culprit before they strike again.</p>
        <button type='button' className='btn btn-outline-dark'>
          <NavLink to='/mystery' style={{ textDecoration: 'none', color: 'inherit' }}>See More</NavLink>
        </button>
      </div>
    </div>

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ width: '250px' }}>
        <div className="carousel-item active" data-bs-interval="1000" key={1}>
          <img src={m1} className="d-block" alt="..." style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={m2} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={m3} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
      </div>
    </div>

   
  </div>
</div>
          {/*sixth*/}
          <div className='m1' style={{ margin: '20px', padding: '20px' }}>
  <div className="d-flex position-relative">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ width: '250px' }}>
        <div className="carousel-item active" data-bs-interval="1000" key={1}>
          <img src={b1} className="d-block" alt="..." style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={b2} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={b3} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
      </div>
    </div>

    <div style={{ marginLeft: '30px' }}>
      <div>
        <h3 className="mt-0">Biography</h3>
        <p>This compelling biography chronicles the remarkable life of [Name], from their humble beginnings to their extraordinary achievements. Through triumphs and tribulations, [Name] perseveres, demonstrating resilience, courage, and unwavering determination. Their journey serves as an inspiration to all who seek to overcome adversity and pursue their dreams.This compelling biography chronicles the remarkable life of [Name], from their humble beginnings to their extraordinary achievements. Through triumphs and tribulations, [Name] perseveres, demonstrating resilience, courage, and unwavering determination. Their journey serves as an inspiration to all who seek to overcome adversity and pursue their dreams.</p>
        <button type='button' className='btn btn-outline-dark'>
          <NavLink to='/biography' style={{ textDecoration: 'none', color: 'inherit' }}>See More</NavLink>
        </button>
      </div>
    </div>
  </div>
</div>
          {/*seventh*/}
          
          <div className='m2' style={{ margin: '20px', padding: '20px' }}>
  <div className="d-flex position-relative">
  <div style={{ marginLeft: '30px' }}>
      <div>
        <h3 className="mt-0">Poetry</h3>
        <p>"Whispers of the Soul" is a collection of evocative poetry that delves into the depths of human emotions and experiences. Through lyrical verses and vivid imagery, the poet explores themes of love, loss, hope, and resilience, inviting readers on a journey of self-discovery and introspection. Each poem is a heartfelt expression of the beauty and complexity of life, resonating with readers long after the final stanza."Whispers of the Soul" is a collection of evocative poetry that delves into the depths of human emotions and experiences. Through lyrical verses and vivid imagery, the poet explores themes of love, loss, hope, and resilience, inviting readers on a journey of self-discovery and introspection. Each poem is a heartfelt expression of the beauty and complexity of life, resonating with readers long after the final stanza.</p>
        <button type='button' className='btn btn-outline-dark'>
          <NavLink to='/poetry' style={{ textDecoration: 'none', color: 'inherit' }}>See More</NavLink>
        </button>
      </div>
    </div>

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ width: '250px' }}>
        <div className="carousel-item active" data-bs-interval="1000" key={1}>
          <img src={p1} className="d-block" alt="..." style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={p2} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src={p3} className="d-block" alt="..." key={1} style={{ width: '250px', height: '300px' }} />
        </div>
      </div>
    </div>

   
  </div>
</div>
</div><br></br><hr></hr><br></br>

<Costmerr />
<br></br><hr></hr><br></br>

<Rating />
<br></br>
<hr></hr>
<br></br>


<About />
<br></br>
<hr></hr>
<Contact />

<Footer />   
<br></br>
    
    </>
  );
}

export default Home;