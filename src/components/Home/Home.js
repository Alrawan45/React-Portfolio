import React from 'react'
import logo from '../../assets/about1.jpeg'
import alpdf from '../../assets/al.pdf'
import './Home.css'

function About() {
    return (
        <>
            <section className="site-banner " id="home">
                <div className="container-fluid ">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 site-title ">
                        <h3 className="title-text text-lowercase">Hey,</h3>
                        <h1 className="title-text ">I am Rawan.</h1>
                        <h4 className="title-text ">ReactJs developer.
                           <sup> <span className="badge badge-pill badge-danger badge-text">fresher</span></sup>
                       </h4>
                     <div className="site-button">
                            <div>
                                <a href={alpdf} download >
                                <button type="button" className="btn btn-outline-danger text-uppercase">download cv</button>
                                </a>
                                </div>
                                <div>
                            <a href="https://www.linkedin.com/in/mohamed-rawan-4495531aa" target="_blank" rel="noreferrer"> 
                                <button type="button" className="btn btn-outline-danger text-uppercase">linkedin link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div className="col-lg-6 col-md-12 ">
                     <img src={logo} alt="banner" className="img-fluid"/>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
