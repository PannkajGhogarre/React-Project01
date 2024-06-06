import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <div className="footer-head">
                    <i class="ri-briefcase-line"></i>
                    <h1>Preferable</h1>
                </div>
                <div className="footer-box">
                    <h3>Placements</h3>
                    <a href="">Freshers</a>
                    <a href="">Working Professional</a>
                </div>
                <div className="footer-box">
                    <h3>Company</h3>
                    <a href="">About us</a>
                    <a href="">Blogs</a>
                    <a href="">Parent Company</a>
                    <a href="">Terms of Use</a>
                    <a href="">Privecy Policy</a>
                    <a href="">contact us</a>
                </div>
                <div className="footer-box">
                    <h3>Follow Us!</h3>
                    <div className="social">
                        <a href=""><i class="ri-youtube-line"></i></a>
                        <a href=""><i class="ri-whatsapp-line"></i></a>
                        <a href=""><i className="ri-instagram-line"></i></a>
                        <a href=""><i className="ri-github-fill"></i></a>
                        <a href=""><i className="ri-twitter-line"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer