import React from "react";
import Searchimg from "../images/icon3.png"
import "./Searchcard.css";

function Searchcard(){
    return(
        <section className="section bg-c-light border-top secoundbg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h1 className="main-heading">Easy Steps to get solution</h1>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-3 text-center cardcontainer">
                    <div className="card shadow">
                        <img src={Searchimg} className="searchimgc" alt="" />
                        <div className="card-body ">
                            <h5>Search Doctor</h5>
                            <div>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 text-center cardcontainer">
                    <div className="card shadow ">
                        <img src={Searchimg} className="searchimgc" alt="" />
                        <div className="card-body ">
                            <h5>Make Appoienment</h5>
                            <div>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 text-center cardcontainer">
                    <div className="card shadow">
                        <img src={Searchimg} className="searchimgc" alt="" />
                        <div className="card-body ">
                            <h5>Get solution</h5>
                            <div>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 text-center cardcontainer">
                    <div className="card shadow">
                        <img src={Searchimg} className="searchimgc" alt="fmind" />
                        <div className="card-body ">
                            <h5>Consultaion</h5>
                            <div>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Searchcard; 

