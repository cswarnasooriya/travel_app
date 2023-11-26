import React,{useEffect} from 'react';
import './offers.css';

import {MdKingBed} from 'react-icons/md';
import {MdBathtub} from 'react-icons/md';
import {FaWifi} from 'react-icons/fa';
import {MdAirportShuttle} from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';
import {BsArrowRightShort} from 'react-icons/bs';


import img11 from '../../Assets/pexels-sudipta-mondal-1603650.jpg';
import img12 from '../../Assets/pexels-oleksandr-p-2166553.jpg';
import img13 from '../../Assets/pexels-kin-pastor-777059.jpg';
import img14 from '../../Assets/pexels-pixabay-290386.jpg';
import img15 from '../../Assets/pexels-yovan-verma-2082103.jpg';
import img16 from '../../Assets/pexels-hristofor-stoyanov-17887056.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Offer =[
    {   id:1,
        imgSrc: img11,
        destTitle:"Ankor Wat",
        location:'Canada',
        price:'$1,980'
        },

    {   id:2,
        imgSrc: img12,
        destTitle:'Malfonia',
        location:'Sydney',
        price:'$2,100'
    },

    {   id:3,
        imgSrc: img13,
        destTitle:'Kalton',
        location:'Punnar',
        price:'$1,500'
    },

    {   id:4,
        imgSrc: img14,
        destTitle:'Hawai',
        location:'Rankot',
        price:'$1,450'
    },

    {   id:5,
        imgSrc: img15,
        destTitle:'Pissa',
        location:'Chundai',
        price:'$1,800'
    },
    {   id:6,
        imgSrc: img16,
        destTitle:'Moore',
        location:'Chunari',
        price:'$1,200'
    },

]

const Offers = ()=> {

    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])


  return (
   <section className='offer container section'>
    <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
            <h2 className='secTitle'>
                Special Offers
            </h2>

            <p>
                From historical cities to natural specteculars, come see the best of the world!

            </p>
        </div>

        <div className="mainContent grid">


           {
            Offer.map(({id,location,imgSrc,destTitle,price})=>{
                return(
                    <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                        <div className="destImage">
                            <img src={imgSrc} alt={destTitle}/>
    
                            <span className='discount'>
                                30% Off
    
                            </span>
                        </div>
    
                        <div className="offerBody">
                            <div className="price flex">
                                <h4>
                                    {price}
                                </h4>
                                <span className='status'>
                                    For Rent
                                </span>
                            </div>
    
                            <div className="amenities flex">
                                <div className="singleAmenity flex">
                                    <MdKingBed className='icon'/>
                                    <small>2 Beds</small>
                                </div>
        
                                <div className="singleAmenity flex">
                                    <MdBathtub className='icon'/>
                                    <small>1 Bath</small>
                                </div>
        
                                <div className="singleAmenity flex">
                                    <FaWifi className='icon'/>
                                    <small>Wi-Fi</small>
                                </div>
        
                                <div className="singleAmenity flex">
                                    <MdAirportShuttle className='icon'/>
                                    <small>Shuttle</small>
                                </div>
        
                            </div>
        
                            <div className="location flex">
                                <MdLocationOn className='icon'/>
                                <small>450 Vine #310, {location} </small>
        
                            </div>
        
                            <button className='btn flex'>
                                View Details
                                <BsArrowRightShort className='icon'/>
                            </button>
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

export default Offers;
