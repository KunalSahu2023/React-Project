import React from 'react';
import './About.css';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';
import about from '../../../assets/about-2.jpg';
import kunal from '../../../assets/member-1.jpeg';
import naman from '../../../assets/member-2.jpeg';
import guide from '../../../assets/guide.jpeg';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram } from 'react-icons/fa';
const About = () => {
  return (
    <>
    <Nav />
        <div id="about-container">
       <div className="about-box">
       <h2>About Us</h2>
       </div>
       <div id="img-content">
       <img src={about} alt="about-img" />
       <div className="goal-content-box">
               <div className="contents">
                   <div className="box">
                       <h3>Our Misson</h3>
                       <p>"Our mission is to empower individuals and communities through innovative technology solutions that address pressing societal challenges. 
                       <br /> We aim to build a more equitable and resilient future for all. Together, we envision a world where every individual has access to the tools and opportunities they need to thrive
                   </p>
                   </div>
                   <div className="box">
                       <h3>Our Goal</h3>
                       <p>"Our goal is to develop and deploy innovative agricultural technology solutions that increase crop yield, optimize resource utilization, and promote sustainable farming practices. <br />
                       Through collaborative partnerships with farmers, research institutions, and industry stakeholders, we aspire to drive positive change in the agricultural sector, contributing to food security, environmental conservation, and economic prosperity."
                   </p>
                   </div>
                   <div className="box">
                       <h3>Our Purpose</h3>
                       <p>"Our purpose is to revolutionize the agricultural industry through innovative technology solutions that optimize resource efficiency, enhance productivity, and promote sustainability. <br />
                       We envision a future where agriculture is not only more productive but also more environmentally sustainable and socially equitable."
                   </p>
                   </div>
               </div>
       </div>
   </div>
   </div>
   
   <div id="our-team-container">
       <h2>Meet Our Team</h2>
   
       <div className="cards-box">
         
           <div className="card-ks card">
               <img src={kunal} alt="ks-img" />
               <h4>Kunal Sahu</h4>
               <p>Front End Developer</p>
               <div className="team-social">
               <Link to=""><FaInstagram className='fa insta' /></Link>
                <Link to=""><FaGithub className='fa github' /></Link>
               </div>
           </div>
          
           <div className="card-nj card">
               <img src={naman} alt="nj-img" />
                   <h4>Naman Jha</h4>
                   <p>Back End Developer</p>
                   <div className="team-social">
                   <Link to=""><FaInstagram className='fa insta' /></Link>
                <Link to=""><FaGithub className='fa github' /></Link>
                   </div>
               </div>
              
               <div className="card-guide card">
                   <img src={guide} alt="guide-img" />
                   <h4>Er.Yashwant Dev</h4>
                   <p>Project Guide</p>
                   <div className="team-social">
                   <Link to=""><FaInstagram className='fa insta' /></Link>
                <Link to=""><FaGithub className='fa github' /></Link>
                   </div>
                   </div>
            
   </div>
   </div>
   <Footer />
    </>
  )
}

export default About
