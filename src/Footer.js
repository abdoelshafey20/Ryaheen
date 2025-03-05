import React from 'react'

function Footer() {
  return (
    <div>
      {/* 
      <footer>
        <div className="container">

          <div className="col-lg-8">
            <p>   All rights reserved ©

              <a rel="nofollow" href="/" target="_self"> Ryaheen Damascus  </a> 2025.</p>
          </div>
        </div>
      </footer> */}


      <footer>
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
               <a href='/'>  <img class="logo1" src="/assets/images/logo.png" alt="Ryaheen" width="200px" /></a>
                <ul class="social_icon">
                  <li><a href="https://www.facebook.com/ryaaheendamascus/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="https://whatsapp.com/channel/0029VakPyFbJf05fS7lNmb3A" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.youtube.com/@ryaheendamascus" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.snapchat.com/add/ryaheendamascus?share_id=GEMbnCeNcV8&locale=en-SA" target="_blank"><i class="fa fa-snapchat" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/ryaheendamascus/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.tiktok.com/@ryaheendamascus" target="_blank"><i class="fa fa-tiktok" aria-hidden="true"></i></a></li>
                  <li><a href="https://linktr.ee/ryaheendamascus" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" height="20" style={{display: "block", width: "auto"}}><title>Linktree Logo</title><desc>Linktree Logo Symbol</desc><path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" fill="#000000"></path></svg><i class="fa fa-linktree" aria-hidden="true"></i></a></li>




                </ul>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3>About Us</h3>
                <ul class="about_us">
                  <li>Ryaheen Damascus <br></br> Trading Company <br></br>
                    Commercial Register <br></br> No. 1010508716
                    Tax No. 311332210700003</li>
                </ul>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h3>Contact Us</h3>
                <ul class="conta">
                  <li><i className="fa fa-envelope"></i><a href="ryaheensocial@gmail.com" target="_blank" > info@ryaheen.com</a></li>


                  <li><i className="fa fa-phone"></i><a href="tel:+(966)550367024" class="info-box_link">+(966)550367024</a>

                    <li><i className="fa fa-location-dot"></i>
                      Factories, Riyadh, Al-Hair Road 14717</li>

                  </li>


                </ul>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <form class="bottom_form">
                  <h3> Quick Links</h3>
                  <ul className="links">
                    <li><a href="/details" target="_self" >Who we are <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    <li><a href="#" target="_self" >Privacy and  Terms of Use <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    <li><a href="/branches" target="_self">Our branches <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    <li><a href="/contact" target="_self">Contact us <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    <li><a href="https://linktr.ee/ryaheendamascus" target="_blank">Our Linktree <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                  </ul>
                  <input class="enter" placeholder="Enter your email" type="text" name="Enter your email/" required />

                  <button class="sub_btn">subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <p>All rights reserved ©
                    <a href="/" target="_self">Ryaheen Damascus</a> <span id="current-year"></span>.
                  </p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer

