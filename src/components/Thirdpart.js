import React from "react";
import docotorimg from "../images/doctor.jpg";
import "./Thirdpart.css";

function Thirdpart (){
    return(
        <>
            <section id="header" className="d-flex-align-items--center mainsection">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row main-card">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 text">
                            <h1>
                                Any time and any where you can ask to our experts
                            </h1>
                            <div>
                                <h7>Lorem lpusm is simply dummy text of the printing and typresetting industry. Lorem lpusm has been the industry's.</h7>
                            </div>
                            
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={docotorimg} className="header-img"  />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thirdpart;