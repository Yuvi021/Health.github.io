import React from "react";
import docotorimg from "../images/doctor.jpg";
import "./Forthpart.css";

function Thirdpart (){
    return(
        <>
            <section id="header2" className="d-flex-align-items--center mainsection2">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row main-card">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-2 text2 ">
                            <h1>
                                connect online & get best solution from our experties
                            </h1>
                            <div>
                                <h7>Lorem lpusm is simply dummy text of the printing and typresetting industry. Lorem lpusm has been the industry's.</h7>
                            </div>
                            
                            </div>
                            <div className="col-lg-6  order-1 order-lg-1 header2-img2 ">
                                <img src={docotorimg} className="header2-img2"  />
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