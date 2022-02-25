import React from "react";
import "./Expertdoc.css";
import expertdoc from "../images/expertdoc.jpg"

const Expertdoc = () =>{
    return(
        <>
            <section className="section bg-c-light border-top ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h1 className="experdocheading">Meet Our Expert Doctors</h1>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-3 text-center expertdoccontainer">
                    <div className="card shadow">
                        <img src={expertdoc} className="card-img-top" alt="" height="200px"/>
                        <div className="card-body ">
                            <h5 className="card-title">Dr. Ayush Khatun </h5>
                            <div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Neuro Surgeon</li>
                              </ul>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                     <div className="col-md-3 text-center expertdoccontainer">
                    <div className="card shadow">
                        <img src={expertdoc} className="card-img-top" alt="" height="200px"/>
                        <div className="card-body ">
                            <h5 className="card-title">Dr. Ayush Khatun </h5>
                            <div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Neuro Surgeon</li>
                              </ul>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                     <div className="col-md-3 text-center expertdoccontainer">
                    <div className="card shadow">
                        <img src={expertdoc} className="card-img-top" alt="" height="200px"/>
                        <div className="card-body ">
                            <h5 className="card-title">Dr. Ayush Khatun </h5>
                            <div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Neuro Surgeon</li>
                              </ul>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                     <div className="col-md-3 text-center expertdoccontainer ">
                    <div className="card shadow">
                        <img src={expertdoc} className="card-img-top" alt="" height="200px"/>
                        <div className="card-body ">
                            <h5 className="card-title">Dr. Ayush Khatun </h5>
                            <div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Neuro Surgeon</li>
                              </ul>
                            <h7>Lorem lpsum is simply dummy text of the printing and typresetting industry</h7>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <button type="button" class="btn btn-secondary docbutton">See all doctors</button>
                        <div className="underline mx-auto"></div>
                    </div>
                    </div>
            
        </section>
        </>
    )
}


export default Expertdoc;