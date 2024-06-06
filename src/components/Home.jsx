import React from 'react'
import './home.css'


const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-text">
                    <div className="naming">
                        <div className="head">
                            <h3>We Help needd<br /><span>You</span> Get The <br />Right <span>Job</span></h3>
                            <p>Join us and take your career to the next level.</p>
                        </div>

                        <div className="para">
                            <div className="par">
                            <p>How Does It Work?</p>
                            </div>
                             <button className='btn'> Get Started</button>
                        </div>
                    </div>
                    <div className="img">
                        <img src="..../image/Frame.png" alt="" />
                    </div>
                </div>
                <div className="cust">
                    <div className="comp">
                        <h3>1200+</h3>
                        <p>Job Available</p>
                    </div>
                    <div className="comp">
                        <h3>200+</h3>
                        <p>Top Componies</p>
                    </div>
                    <div className="comp">
                        <h3>2000+</h3>
                        <p>Candidates Hired</p>
                    </div>
                    <div className="comp1">
                        <h3>30+</h3>
                        <p>Class Available</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;