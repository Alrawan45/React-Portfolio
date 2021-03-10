import React from 'react'
import './Footer.css'
import logo from '../../assets/al-logo2.jpg'

function Footer() {
    return (
        <>
            <footer className="footer-area" id="contact">
                <div className="container-fluid text-center">
                    <div className="logo-area py-5">
                        <a href="#home">
                            <img src={logo} alt="al-logo2"/>
                        </a>
                    </div>
                    <div className="contact-area">
                        <h6 className="text-uppercase">contact me</h6>
                        <a href="tel:+91 9487391727"> <span className="px-1"><i className="fas fa-phone"></i></span>+91 9487391727</a>
                    </div>
                    <div className="follow py-5">
                        <h6 className="text-uppercase py-3">follow me</h6>
                        <div className="fwl">
                        < a href = "https://www.facebook.com/RawanRohit.45" target="_blank" rel="noreferrer" > < i className = "fab fa-facebook-f" > < /i></a >
                        <a href="https://www.linkedin.com/in/mohamed-rawan-4495531aa"rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://wa.link/1qp1mi"><i className="fab fa-whatsapp" rel="noreferrer"></i></a>
                        <a href="https://www.instagram.com/invites/contact/?i=346e38i48os6&utm_content=1mofcsq" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="copyrights-area">
                        <p className="py-5 design">
                            copyright&copy;2020 all rights reserved | this template is designed by
                            <a href="#home"> Al-Rawan</a> 
                        </p>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
