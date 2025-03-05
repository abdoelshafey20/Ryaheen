import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Banner() {
    return (
        <div>

            <div className="main-banner">
                <OwlCarousel className="owl-carousel  owl-banner" loop nav items={1} touchDrag center={true}
                    autoplay={true} autoplayTimeout={2000} autoplayHoverPause={true}>
                    <div className="item item-1">
                        <div className="header-text hidden">
                            <span className="category">Ryaheen Damascus, <em>KSA</em></span>
                            <h2>A world of <br></br> diversity <br></br> at your <br></br> fingertips</h2>
                        </div>
                    </div>
                    <div className="item item-2">
                        <div className="header-text hidden">
                            <span className="category">Ryaheen Damascus, <em>KSA</em></span>
                            <h2>A world of <br></br> diversity at your <br></br> fingertips</h2>
                        </div>
                    </div>
                    <div className="item item-3 ">
                        <div className="header-text hidden">
                            <span className="category">Ryaheen Damascus, <em>KSA</em></span>
                            <h2> <br></br>Lots of <br></br> great <br></br> offers</h2>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

        </div>
    )
}

export default Banner