import React from "react";
import "./Fifthpart.css";
import docotorimg from "../images/doctor.jpg"

function Fifthpart (){
    return(
          <>
            <section id="header3" className="d-flex-align-items--center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row main-card">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 text3">
                            <h1>
                                Any time and any where you can ask to our experts
                            </h1>
                            <div>
                                <h7>Lorem lpusm is simply dummy text of the printing and typresetting industry. Lorem lpusm has been the industry's.</h7>
                            </div>
                            
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header3-img3">
                                <img src={docotorimg} className="header3-img3"  />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fifthpart;