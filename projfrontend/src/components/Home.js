import React from 'react';
import './style.css';
import WeShop from '../assets/WeShop.png';
import MacBook from '../assets/MacBook.png';

const Home=()=>{
    return(<div>
        <section class="homepage">
        <section id="title">
            <div class="container-fluid top-title">
                
                <nav class="navbar navbar-expand-md navbar-dark">
                    <a class="navbar-brand" href="/">
						<img src={WeShop} alt="WeShop Logo"/>
						<h1>WeShop</h1>
					</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    >
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/dashboard"
                                    >Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/sign-in">Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/sign-up"
                                    >Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                
                <div class="row title-row">
                    <div class="flex-column1">
                        <h1 class="big-heading">
                            Safe, secure, collaborative Shopping.
                        </h1>
                    </div>
                    <div class="flex-column2">
                        <img
                            class="title-image"
                            src={MacBook}
                            alt="weshop-mockup"
                        />
                    </div>
                </div>
            </div>
        </section>

        

        <section id="testimonials">
            <div
                id="testimonial-carousel"
                class="carousel slide"
                data-ride="false"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active container-fluid">
                        <h2 class="testimonial-text">
                            "The best way to shop is to shop together!"
                        </h2>
                        <em
                            >- Help your friends get what they need fast and at the best rates.</em>
                    </div>
                    <div class="carousel-item container-fluid">
                        <h2 class="testimonial-text">
                            "Don't ever miss out any tasty ingredients ever again!"
                        </h2>
                        <em
                            >By letting your needs know to your friends get the stuff that you might have forgotten on your way shopping.</em>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#testimonial-carousel"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#testimonial-carousel"
                    role="button"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>

        

        <section id="features">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 feature-col">
                        <i class="fas fa-check-circle fa-4x"></i>
                        <h3 class="feature">Easy to use.</h3>
                        <p>So easy to use, everyone can keep a track.</p>
                    </div>

                    <div class="col-lg-4 feature-col">
                        <i class="fas fa-comments fa-4x"></i>
                        <h3 class="feature">Collaborate and shop</h3>
                        <p>
                            Pool in your needs with your friends 
                        </p>
                    </div>

                    <div class="col-lg-4 feature-col">
                        <i class="fas fa-key fa-4x"></i>
                        <h3 class="feature">Safe and Secure.</h3>
                        <p>
                            We also allow you to safely pay your friends online to avoid any further contact! 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        

        <section id="cta">
            <div class="container-fluid">
                <h3>
                    Join today to make your shopping quick, easy and fun.
                </h3>
            </div>
        </section>
    </section>
    </div>);
}
export default Home;