import React from "react";
import "./Home.css";
import Searchcard from "./Searchcard";
import Thirdpart from "./Thirdpart";
import Forthpart from "./Forthpart";
import Fifthpart from "./Fifthpart"
import Product from "./Product";
import Expertdoc from "./Expertdoc";
import Booking from "./Boooking";
import Footer from "./Footer";



const Home = () =>{
    return(
        <>
            <section id="header" className="bgimage">
            <div className="container-fluid nav_bg">
            <div className="row">
            <div className="col-12 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 maintext">
                <h1 className="maintext">
                    Lorem lpsum is simply dummy text of the printing
                </h1>
                <h2 className="my-3 ptext">
                Lorem lpsum is simply dummy text of the printing and typresetting industry. Lorem lpsum has been th industry's standard dummy text
                </h2>
                <div className="mt-3">
                    <button className="button" type="button" className="btn btn-secondary btn-lg">Start free online visit</button>
                </div>
                </div>
            </div>
            </div>
            </div>
            </section>
            <Searchcard />
            <Thirdpart />
            <Forthpart />
            <Fifthpart />
            <Product />
            <Expertdoc />
            <Booking />
            <Footer />
            
        </>
    );
};

export default Home;