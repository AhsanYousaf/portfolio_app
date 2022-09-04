import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//import Swiper core and required modules

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

//import Swiper styles

import 'swiper/css'
import 'swiper/css/pagination'



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt='' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae. Vero, neque. Possimus quo repellendus vitae unde, nostrum doloremque perspiciatis nemo, tempore nam laboriosam officia eius accusantium fugit quae quod.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt='' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae. Vero, neque. Possimus quo repellendus vitae unde, nostrum doloremque perspiciatis nemo, tempore nam laboriosam officia eius accusantium fugit quae quod.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt='' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae. Vero, neque. Possimus quo repellendus vitae unde, nostrum doloremque perspiciatis nemo, tempore nam laboriosam officia eius accusantium fugit quae quod.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt='' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae. Vero, neque. Possimus quo repellendus vitae unde, nostrum doloremque perspiciatis nemo, tempore nam laboriosam officia eius accusantium fugit quae quod.
          </small>
        </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonials
