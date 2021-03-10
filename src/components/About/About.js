import React from 'react'
import logo from "../../assets/about1.jpeg"
import alpdf from "../../assets/al.pdf"
import './About.css'

function About() {
    return (
        <>
           <section className="about-area" id="about">
                 <div className="container-fluid">
                     <div className="row">
                        <div className="col-lg-6 col-md-12 about-intro">
                            <div className="about-title">
                                <h1 className="title-me">let me introduce myself</h1>
                            </div>
                            <ul className="paragraph p-5">
                                <li className="para">i am <b>MOHAMED RAWAN</b>.i did my graduation from <b>AALIM MUAHMMED SALEGH COLLEGE OF ENGINEERING</b> at chennai.
                                </li>
                                <li className="para"><b>MY STRENGTHS</b> carry a <b>POSSITIVE ATTITUDE</b>,<b>HARD WORK</b> and <b>SELF-MOTIVATED.</b> </li>
                                <li className="para"><b>MY WEAKNESS</b> is that <b>I TRUST PEOPLE EASILY.</b></li>
                            </ul>
                            <div className="cv-butt">
                            <a href={alpdf} download>
                            <button type="button" className="btn btn-danger text-uppercase ">download cv</button>
                            </a>
                            </div>
                           </div>
                            <div className="col-lg-6 col-md-12">
                                 <div className="about-image">
                                <img src={logo} alt="about" className="img-fluid"/>
                            </div>
                            </div>
                 </div>
                 </div>
             </section> 
        </>
    )
}

export default About
