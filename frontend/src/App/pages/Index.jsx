import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default () => {
    let navigate = useNavigate();

    const navigateToLogin = () =>  {
        navigate("/");
        window.location.reload();
    }

    return (
        <>
            <div className="container text-center">

<div className="row align-items-center">

    <div className="col-md-6">
        <h1 className="text-white"><strong>Cultural Connect Circle</strong></h1>
        <h1 className="custom-heading">Join Cultural Connect Today</h1>
        <h2 className="custom-subheading">Know What's Happening Now!</h2>
        <div className="d-grid gap-3 col-9 mx-auto my-4">
            <button className="btn btn-light custom-rounded-button" type="button">
                <i className="fab fa-google button-google-sign-in"></i> <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">Sign up with Google</a>
            </button>
            <button className="btn btn-light custom-rounded-button" type="button">
                <i className="fab fa-apple button-apple-sign-in"></i> <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#"> Sign up with Apple</a>
            </button>
        </div>
        <hr/>
        <div className="d-grid gap-3 col-9 mx-auto my-4">
            <button className="btn btn-light custom-rounded-button" type="button" ><a className="link-underline">Create an account</a></button>
            <p className="text-start text-left mt-2">
                By signing up, you agree to the <a className="link-light link-offset-2 link-underline link-underline-opacity-50" href="#" data-bs-toggle="offcanvas" data-bs-target="#termsOfServiceOffcanvas">Terms of Service</a>
                and <a className="link-light link-offset-2 link-underline link-underline-opacity-50" href="#" data-bs-toggle="offcanvas" data-bs-target="#privacyPolicyOffcanvas">Privacy Policy</a>, including Cookie Use.
            </p>
            
            
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="termsOfServiceOffcanvas" aria-labelledby="termsOfServiceLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-decoration-underline" id="termsOfServiceLabel">Terms of Service</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Published: February 10, 2024. <br/><br/>

                    These Terms of Service (“Terms”) apply when you use our sites, mobile and tablet apps, and other online 
                    products and services that link to these Terms (collectively, the “Services”). These terms are a legal 
                    contract between you and WP Company LLC (“The Washington Post,” “we” or “us”) so it is important that you 
                    review them carefully before using the Services. Your use of the Services indicates that you agree to 
                    follow and be bound by the Terms, which include the Discussion and Submission Guidelines. If you do not 
                    agree to the Terms, do not access or use the Services.
                </div>
            </div>
            
            
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="privacyPolicyOffcanvas" aria-labelledby="privacyPolicyLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-decoration-underline" id="privacyPolicyLabel">Privacy Policy</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    At Cultural Connect Circle, we believe that privacy is a right. We want to empower our users to be the masters of their identity.
                    In this privacy policy, we want to help you understand how and why Cultural Connect Circle. ("Cultural Connect Circle," "we" or "us") collects, 
                    uses, and shares information about you when you use our websites, mobile apps, widgets, APIs, emails, and other 
                    online products and services (collectively, the "Services") or when you otherwise interact with us or receive a 
                    communication from us. <br/><br/>
                
                    We want this privacy policy to empower you to make better choices about how you use Cultural Connect Circle. We'd love for you to 
                    read the whole policy, but if you don't, here is the TL;DR:
                </div>
            </div>


        </div>
        <h4 className="text-start mx-auto text-center">Already have an account?</h4>
        <div className="d-grid gap-3 col-9 mx-auto my-4">
            <button className="btn btn-light custom-rounded-button" type="button" onClick={navigateToLogin}> <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" >Login</a></button>
        </div>
    </div>

    <br/><br/><br/><br/>

    <div className="col-md-6">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/holi.jpg" className="d-block w-100" alt="Cultural Connect Circle"/>
              </div>
              <div className="carousel-item">
                <img src="images/neu.jpg" className="d-block w-100" alt="Audi Image"/>
              </div>
              <div className="carousel-item">
                <img src="images/india.jpg" className="d-block w-100" alt="Fall Fest Image"/>
              </div>
              <div className="carousel-item">
                <img src="images/dance.jpg" className="d-block w-100" alt="Neu Fest Image"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

</div>
</div>
        </>
    );
};