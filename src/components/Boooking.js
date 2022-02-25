import React from "react";
import "./Booking.css";

const  Booking = () =>{
return(
    <>
        <section id="header" className="d-flex-align-items--center booking-section">
                <div className="container-fluid row">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row booking-card">
                            <div className="col-md-6  pt-lg-0 order-2 order-lg-1 booking-text">
                            <h5 className="tx1" >Book Appoinment</h5>
                            <h1 className="tx2">
                                Get 20% discount on your booking
                            </h1>
                            <div>
                                <h7 className="tx3">Lorem lpusm is simply dummy text of the printing and typresetting industry. Lorem lpusm has been the industry's.</h7>
                            </div>
                            
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 login-sec">
                                <h2> Login </h2>
                                <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" /> 
                                </div>
                                </div>
                               <div class="row">
                                <div class="col">
                                    <input type="number" class="form-control" placeholder="Date of birth" aria-label="First name " />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Gender" aria-label="Last name" /> 
                                </div>
                                </div>
                                <div class="row">
                                <div class="col">
                                    <input type="number" class="form-control" placeholder="Phone number" aria-label="First name " />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Last name" />
                                </div>
                                </div>
                                <div class="col-12 col">
                                    <label for="inputAddress2" class="form-label"></label>
                                    <input type="text" class="form-control"  placeholder="Address" />
                                </div>
                                <div class="col-md-2 col">
                                    <label for="inputZip" class="form-label"></label>
                                    <input type="text" class="form-control" id="inputZip" placeholder="Zipcode" />
                                </div>
                                <button type="button" class="btn btn-secondary subbtn">Submit form</button>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
)
}

export default Booking;