import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Saas product</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web applications</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Database management</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>End to end development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Deployment</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Fully custom website</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom web development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>UI to UX conversion</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Api integration</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Performance optimization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Secure website</p>
            </li>
            

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Api creation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Database creation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Database connectivity</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Secure development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimize performance</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Deployment</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
