import React from 'react'
import './costmer.css'
import co1 from '../img/co1.avif';
import co2 from '../img/co2.jpg';
import co3 from '../img/co3.jpg';
import co4 from '../img/co4.webp';
import co5 from '../img/co2.jpg';
function Costmorr() {
  return (
   <div class="coms"><br></br>
     <h1 className="text-uppercase fw-bold font-monospace text-center">Customer Review</h1><br></br>
<div class="container">
	<div class="row">
		<div class="col-md-8 col-center m-auto"></div>

    <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    <div className="carousel-inner">
        <div className="item carousel-item active">
            <div className="img-box"><img src={co1} alt="" /></div>
            <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
            <p className="overview"><b>Jennifer Smith</b>, Office Worker</p>
            
        </div>
        <div className="item carousel-item">
            <div className="img-box"><img src={co2} alt="" /></div>
            <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
            <p className="overview"><b>Dauglas McNun</b>, Financial Advisor</p>
        </div>
        <div className="item carousel-item">
            <div className="img-box"><img src={co3} alt="" /></div>
            <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
            <p className="overview"><b>Hellen Wright</b>, Athelete</p>
        </div>
        <div className="item carousel-item">
            <div className="img-box"><img src={co4} alt="" /></div>
            <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
            <p className="overview"><b>Rensi makadiya</b>, Athelete</p>
        </div>
        <div className="item carousel-item">
            <div className="img-box"><img src={co5} alt="" /></div>
            <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
            <p className="overview"><b>charmi radadiya</b>, Athelete</p>
        </div>
    </div>
    <div ></div>
     <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
<span className="carousel-control-prev-icon con" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
<span className="carousel-control-next-icon con" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>

   </div> 
   </div> 
     </div>                    
  )
}

export default Costmorr
