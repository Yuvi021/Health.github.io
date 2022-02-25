import React from "react"; 
import Footer from "./Footer";
import "./Product.css";



const product = () => {
return(

<>
<section  className="section bg-c-light border-top backgroundcolor">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-4 text-center">
                <h1 className="ourproductheading">Our Products</h1>
                <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 text-center productcontainer">
                    <div className="card shadow">
                        <img src="" className="card-img-top" height="200px" alt ="Image cap" />
                        <div className="card-body ">
                            <h5 className="card-title">Search Doctor</h5>
                            <div>
                            <p>Lorem lpsum is simply dummy text of the printing and typresetting industry</p>
                             <button type="button" class="btn btn-secondary">Buy Now</button>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center productcontainer">
                    <div className="card shadow">
                        <img src="" className="card-img-top" height="200px" alt ="Image cap" />
                        <div className="card-body ">
                            <h5 className="card-title">Search Doctor</h5>
                            <div>
                            <p>Lorem lpsum is simply dummy text of the printing and typresetting industry</p>
                             <button type="button" class="btn btn-secondary">Buy Now</button>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center productcontainer">
                    <div className="card shadow">
                        <img src="" className="card-img-top" height="200px" alt ="Image cap"/>
                        <div className="card-body ">
                            <h5 className="card-title">Search Doctor</h5>
                            <div>
                            <p>Lorem lpsum is simply dummy text of the printing and typresetting industry</p>
                             <button type="button" class="btn btn-secondary">Buy Now</button>
                            </div>
                            
                        </div>
                    </div>
                    </div>
        </div>
    </div>
</section>
</>   
); 
};

export default product;