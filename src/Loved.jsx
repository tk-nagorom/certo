import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Loved.css'; // Custom CSS file

// Import image assets
import svg from './CertoImage/son.svg';
import figure1 from './CertoImage/figure1.svg';
import new1 from './CertoImage/new1.svg';
import financial3 from './CertoImage/financial3.svg';
import readers33 from './CertoImage/readers33.svg';
import zd4 from './CertoImage/zd4.svg';
import wired66 from './CertoImage/wired66.svg';

const Loved = () => {
  return (
    <div className="loved-container">
      {/* Section Title */}
      <h2 className="loved-title">
        Loved by thousands of iPhone <br /> and Android users alike
      </h2>

      {/* Testimonials Section */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        className="testimonial-wrapper"
      >
        {/* Testimonial Slides */}
        {[
          {
            text: `My son who works in IT suggested I try this app after I was getting lots of strange 
                   messages and things happening on my phone. Since running it once a week, I have had no 
                   viruses or malware problems. I also got a VPN app, so I think with both, I'm all set!`,
            author: "",
          },
          {
            text: `Does exactly what it says. Clear to read and understand. This is now the second 
                   iPhone we’ve used it on and would certainly recommend this app.`,
            author: "colinandmandy94",
          },
          {
            text: `Love the ease and efficiency. Awesome app. Very informative and insightful if wanting 
                   to know more about your device. The added breach check is a great bonus. Check any 
                   email if they’ve ever been named in a data breach from years ago. Sweet tool. Love it 
                   highly recommend.`,
            author: "Jennifer Black",
          },
          {
            text: `This app is good if you need to identify certain vulnerabilities on your iPhone. If 
                   you have any issues, their customer service was quite helpful and responsive.`,
            author: "Jennifer Black",
          },
          {
            text: `I wish they had a VPN; I’d be signing up for that too. Apart from that, the app is 
                   top-notch. I had Certo on my last phone, and it was the first app I put on this phone 
                   when I got it from the store. The scanner and other parts of the app are really easy 
                   and simple to use, even for a non-techie like me.`,
            author: "Jennifer Black",
          },
        ].map((testimonial, index) => (
          <SwiperSlide className="testimonial-card" key={index}>
            <img className="user-avatar" src={svg} alt="User Avatar" />
            <p className="testimonial-text">{testimonial.text}</p>
            {testimonial.author && (
              <h4 className="testimonial-author">{testimonial.author}</h4>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Featured Section */}
      <div className="featured-section">
       
        <div className="image-container">
        <span className="featured-title">Featured in:</span>
          {[figure1, new1, financial3, readers33, zd4, wired66].map(
            (image, index) => (
              <img
                src={image}
                alt={`Featured ${index + 1}`}
                className="featured-image"
                key={index}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Loved;
