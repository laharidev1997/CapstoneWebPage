import React from 'react'
import '../App.css'
import './mentor.css'
const Mentor = () => {
    return (
        <div className='container mt-3-custom'>
            <h1>Mentors</h1>
                    <div className="float-container-mentor">
                        <div className="card col-lg-4 col-md-2 col-12">
                            <img src="/profile.png" className="card-img-top" alt="profile"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                        <div className="card col-lg-4 col-md-2 col-12">
                            <img src="/profile.png" className="card-img-top" alt="profile"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                        <div className="card col-lg-4 col-md-2 col-12">
                            <img src="/profile.png" className="card-img-top" alt="profile"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>

                    </div>
        </div>
    )
}
export default Mentor