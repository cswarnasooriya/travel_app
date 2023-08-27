import React from 'react';
import './popular.css';

import {BsArrowLeftShort, BsDot} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';


import img1 from '../../Assets/pexels-alfonso-escalante-2533090.jpg';
import img2 from '../../Assets/pexels-cátia-matos-984864.jpg';
import img3 from '../../Assets/pexels-oleksandr-p-1008155.jpg';
import img4 from '../../Assets/pexels-te-lensfix-1371360.jpg';
import img5 from '../../Assets/pexels-chanaka-madushan-sugathadasa-999068.jpg';


const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle:'Rough Tour',
    location:'Samanala Wewa',
    grade: 'HARD RELAX',
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:'City Visiting',
    location:'Galle',
    grade: 'SHOPPING RELAX',
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Travel Today',
    location:'Kandy',
    grade: 'HOLIDAY RELAX',
  },

  {
    id:4,
    imgSrc:img4,
    destTitle:'Boat Safari',
    location:'Maadu River',
    grade: 'REAL RELAX',
  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Along Holiday',
    location:'Sigiriya',
    grade: 'Exited RELAX',
  },




]

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
          

          {
            Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
                <div className="singleDistination">
                      <div className="destImage">

                        <img src={imgSrc} alt='Imagetitle'/>

                        <div className="overlayInfo">
                          <h3>{destTitle}</h3>
                          <p>
                            {location}
                          </p>

                          <BsArrowRightShort className='icon'/>
                        </div>

                      </div>

                <div className='destFooter'>
                  <div className="number">
                    0{id}
                  </div>


                  <div className='destText flex'>
                    <h6>{location}</h6>
                    <span className='flex'>
                      <span className='dot'>
                        <BsDot className='icon'/>


                      </span>
                    </span>

                  </div>
                </div>
          </div>

              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Popular