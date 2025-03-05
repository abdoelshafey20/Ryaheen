import React from 'react'

function Contact() {
  return (
    <div>

      <div className="contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.909886822059!2d46.757737025129565!3d24.557775957303626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f090000a04013%3A0xebfeadddfb7516f0!2z2KXYr9in2LHYqSDYtNix2YPYqSDYsdmK2KfYrdmK2YYg2K_Zhdi02YIg2KfZhNiv2KfYsSDYp9mE2KjZiti22KfYoQ!5e0!3m2!1sar!2ssa!4v1739201162032!5m2!1sar!2ssa" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="item phone">
                    <img src="assets/images/phone-icon.png" alt="" style={{ maxWidth: "52px" }} />
                    <h6><a href="tel:+(966)550367024" class="info-box_link">+(966)550367024</a><br /><span>Phone Number</span></h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item email">
                    <img src="assets/images/email-icon.png" alt="" style={{ maxWidth: "52px" }} />
                    <h6>

                      <a href="ryaheensocial@gmail.com" target="_blank" > info@ryaheen.com</a><br /><span>Business Email</span></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <form id="contact-form" action="#" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="name">Full Name</label>
                      <input type="name" name="name" id="name" placeholder="Your Name..." autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="email">Email Address</label>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="subject">Subject</label>
                      <input type="subject" name="subject" id="subject" placeholder="Subject..." autocomplete="on" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="message">Message</label>
                      <textarea name="message" id="message" placeholder="Your Message"></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact