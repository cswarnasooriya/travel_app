import React,{useEffect} from 'react';
import './blog.css';
import {BsArrowRightShort} from 'react-icons/bs';


import Aos from 'aos';
import 'aos/dist/aos.css';
//import images
import img1 from '../../Assets/pexels-susanne-jutzeler-sujufoto-1292006.jpg';
import img2 from '../../Assets/pexels-guduru-ajay-bhargav-1076081.jpg';
import img3 from '../../Assets/shashank-hudkar-KYBc1eq0dJo-unsplash.jpg';
import img4 from '../../Assets/pexels-pixabay-236973.jpg';

//here also we are going to the map method to display our posts.

const Posts = [
  {
    id:1,
    postImage: img1,
    title: 'Beautiful Samanala wewa in Sabaragamuwa Province as great nature experience in Sri Lanka.',
    desc: ' The Samanalawewa Huge Lake.'
  },
  {
    id:2,
    postImage: img2,
    title: 'Gathering hiking with your lovers for you free treat as soon as pleasure.',
    desc: ' The Hagala rock in Sabaragamuwa Province.'
  },
  {
    id:3,
    postImage: img3,
    title: 'Free tour of King Kasyapa treasure rock.',
    desc: ' Great Lions mouth of Sigiriya.'
  },
  {
    id:4,
    postImage: img4,
    title: 'Enjoy your free day with your lovers in Kanneliya sri lanka at horton places. With regard and safe environment.',
    desc: ' The wisdom of Wet season in Sri Lanka.'
  }

  
  
]

const Blog = ()=> {
  
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000"className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world.
          </p>

        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id, postImage, title,desc})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2000"className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title}/>
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">
                      {title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="4000">
                      {desc}
                  

                    </p>

                  </div>
                  <a href='#' className='flex' data-aos="fade-up" data-aos-duration="4500">
                      <BsArrowRightShort className="icon"/>
                      Read More!
                  </a>

                  </div>
              )
            })
          }
          

            
          </div>

        </div>
      
    </section>
  
  
  )
}

export default Blog