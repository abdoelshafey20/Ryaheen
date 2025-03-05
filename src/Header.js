import React from 'react'

import { useLocation } from 'react-router-dom';

import { Link } from 'react-scroll'

function Header() {


    const location = useLocation();


    return (
        <div>
            {/* <header classNameName="header-area header-sticky">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-12">
                            <nav classNameName="main-nav">
                         
                                <Link to="/" classNameName="logo">
                                    <h1>Ryaheen Damascus</h1>
                                </Link>
                          

                           
                                <ul classNameName="nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/branches">Branches</Link></li>
                                    <li><Link to="/details">Details</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                
                                    <li><Link to="#features">Our Brands</Link></li>
                                    <li><Link to="#"><i classNameName="fa fa-calendar"></i> Store</Link></li>
                                    <img src="/assets/images/logo.png" alt="Ryaheen" width="15px" />
                                </ul>
                           

                                <a classNameName='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header> */}




            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="logo" href="/"><img src="/assets/images/logo.png" alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/branches">Branches</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/details">Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                        {location.pathname === '/' && (
                            <li className="nav-item">
                                <Link className="nav-link" to="features" smooth={true} offset={-120} duration={1000}>Our Brands</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                    </ul>
                </div>
                <div className="login_text"><a href="/">Ryaheen Damascus</a></div>
            </nav>


        </div>
    )
}

export default Header
