import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light px-3" style={{backgroundColor:"#e19052"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold" href="index.html">CCC</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about-us">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Search Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Announcements</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                            <a href="landingpage.html" className="btn btn-outline-dark">Login</a>
                        </div>
                    </div>
                </nav>

                {/* Search Form */}
                <div className="container my-5 px-md-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center">Connect with Your Cultural Heritage</h1>
                            <div className="container  mb-5 px-md-4">
                                <form id="search-form" action="#" method="post" noValidate="noValidate">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-12 p-0">
                                            <input type="text" className="form-control search-slt" placeholder="Interest"/>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12 p-0">
                                            <input type="text" className="form-control search-slt" placeholder="Genre"/>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12 p-0">
                                            <button id="search" type="button" className="form-control btn btn-outline-dark">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="container my-5 px-md-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center">Welcome to the Cultural Connect Circle</h1>
                            <p className="fs-5 my-4">CulturalConnectCircle is your portal to a richer cultural journey within Northeastern university. Engage, explore, and contribute to the cultural tapestry of campus life through our platform. Stay in tune with the diverse cultural landscape of our university community! Uncover and share cultural events, traditions, and everyday cultural experiences with peers, enriching the campus atmosphere with a mosaic of global cultures.</p>
                            <div className="d-flex justify-content-center">
                                <img src="images/logo.jpg" className="img-fluid mt-4 rounded" style={{maxWidth: "800px", height: "auto"}}  alt="CCC Image"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Us */}
                <div id="about-us" className="container my-5 px-md-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center">About Us</h1>
                            <p className="fs-5 my-4">CulturalConnectCircle is a platform specifically designed to enhance cultural engagement within a university setting. It serves as a dynamic space for students to actively participate in, share, and delve into the diverse cultural landscape that a global community offers.</p>
                            <p className="fs-5 my-4">The core aim of CulturalConnectCircle is to maintain a vibrant connection among students through various cultural events, personal narratives, and contemporary cultural dialogues. By doing so, it seeks to cultivate an active, engaged cultural community within the campus, thereby enriching the overall university experience. Through this platform, students have the opportunity to not only learn about but also celebrate the myriad of cultures that make up their community, fostering a sense of unity and mutual appreciation among the student body.</p>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card firstcard">
                                <div className="card-body">
                                    <h5 className="card-title">Create an Account</h5>
                                    <p className="card-text">Sign up for a CulturaSphere account to dive into a world of cultural exploration, connect with like-minded individuals, and discover a wide array of cultural events and resources.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card firstcard">
                                <div className="card-body">
                                    <h5 className="card-title">Voluteering Oppurtunities</h5>
                                    <p className="card-text">Explore a realm of cultural enrichment and community service with our volunteering opportunities. </p>
                                </div>
                            </div>
                            </div>
            <div className="col-md-4">
                <div className="card firstcard">
                    <div className="card-body">
                        <h5 className="card-title">Connect with your cultural community</h5>
                        <p className="card-text">Seize the chance to engage with a vibrant network of peers who share your passion for cultural diversity on Cultural Connect. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container text-center my-5">
        <div className="row">
            <div className="col-md-4">
                <h3>Events 2023</h3>
                <p className="display-4">350+</p>
            </div>
            <div className="col-md-4">
                <h3>Number of Volunteers</h3>
                <p className="display-4">1000+</p>
            </div>
            <div className="col-md-4">
                <h3>Engagement opportunities</h3>
                <p className="display-4">90%</p>
            </div>
        </div>
    </div>

    
    <div className="container my-5">
        <div className="col-lg-12">
            <h1 className="text-center">Upcoming Events</h1>
        </div>
        <div className="companies">
            <div className="company rounded">
                <div className="row">
                    <div className="col-md-2 col-sm-2 text-center">
                        <div className="company-logo">
                            <img src="images/dance.jpg" className="img-responsive" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-10">
                        <div className="company-content">
                            <h3>Flashmob<span className="full-time">Flashmob</span></h3>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-briefcase"></i>Dance</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-map-marker
                                    "></i>Curry Center, Ground Floor, Northeastern University, Boston</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <a href="#" className="btn btn-outline-dark">Register Now</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-calendar-days"></i>Posted: 2 days ago</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-user"></i>Applicants: 300+</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-money-bill"></i>Certificate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="company rounded">
                <div className="row">
                    <div className="col-md-2 col-sm-2 text-center">
                        <div className="company-logo">
                            <img src="images/Marathon.jpg" className="img-responsive" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-10">
                        <div className="company-content">
                            <h3>Marathon<span className="full-time">Marathon</span></h3>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-briefcase"></i>Sports</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-map-marker
                                    "></i>07th Avenue, Boston, MA, United States</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <a href="#" className="btn btn-outline-dark">Register Now</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-calendar-days"></i>Posted: 4 days ago</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-user"></i>Applicants: 400+</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-money-bill"></i>Medals for first 5 and certificate for all</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="company rounded">
                <div className="row">
                    <div className="col-md-2 col-sm-2 text-center">
                        <div className="company-logo">
                            <img src="images/CDrive.jpg" className="img-responsive" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-10">
                        <div className="company-content">
                            <h3>Cleanliness Drive<span className="full-time">Cleanliness Drive</span></h3>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-briefcase"></i>Environment</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-map-marker
                                    "></i>Cabot , Boston, MA, United States</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-money-bill"></i>$22,000-$50,000</p>
                                    <a href="#" className="btn btn-outline-dark"> Register Now</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-calendar-days"></i>Posted: 2 days ago</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-user"></i>Applicants: 50+</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <p><i className="fa fa-money-bill"></i>Certificate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="container my-5">
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/images.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <img src="images/Person1.jpg" className="reviewimg"></img>
              <h5 className="reviewtext">"Sumanth Vakulabharanam"</h5>
              <p className="reviewtext">Worked as the Cultural Secretary to organize a Singing Concert</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/images.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <img src="images/Person1.jpg" className="reviewimg"></img>
              <h5 className="reviewtext">"Vedantini Gaikwad"</h5>
              <p className="reviewtext">Volunteered for Intercollege Sports festival</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/images.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <img src="images/Person1.jpg" className="reviewimg"></img>
              <h5 className="reviewtext">"Amruta Muzumdar"</h5>
              <p className="reviewtext">Winner at Literary Debate competition among a great competitive people.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/images.jpg" className="d-block w-100 " alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <img src="images/Person1.jpg" className="reviewimg"></img>
              <h5 className="reviewtext">"Krima Modi"</h5>
              <p className="reviewtext">Organized inter college marathon.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/images.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <img src="images/Person1.jpg" className="reviewimg"></img>
              <h5 className="reviewtext">"Arpita Bhagat"</h5>
              <p className="reviewtext">Played a crucial part in flashmob and won it</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

</>
        );

}

export default App;
