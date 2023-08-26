import React from 'react';
import './popular.css';

import {BsArrowLeftShort, BsDot} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';


import img from '../../Assets/pexels-alfonso-escalante-2533090.jpg';


const Popular = ()=> {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className='textDiv'>
            <h2 className='seccTitle'>
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!

            </p>
          </div>

          <div className='iconsDiv flex'>
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon'/>
          </div>





        </div>

        <div className='mainContent grid'>
          <div className="singleDistination">
            <div className="destImage">
              <img src={img} alt='Imagetitle'/>

              <div className="overlayInfo">
                <h3>some text</h3>
                <p>
                  Lorem ipsum dolor sit amet.
                </p>

                <BsArrowRightShort className='icon'/>
              </div>

            </div>

            <div className='destFooter'>
              <div className="number">
                01
              </div>


              <div className='destText flex'>
                <h6>London</h6>
                <span className='flex'>
                  <span className='dot'>
                    <BsDot className='icon'/>


                  </span>
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular