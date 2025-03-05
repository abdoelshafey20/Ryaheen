import React from 'react'

function Content() {
  return (
    <div>

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                {/* <img src="assets/images/single-property.jpg" alt="" /> */}
              </div>
              <div className="main-content">
                <span className="category">About</span>
                <h4>Ryaheen Damascus
                  in a few lines. <br></br> <span>Have a nice shopping trip</span></h4>


                <p>Rayahin Damascus Trading Company started its activity in 2013 in Riyadh through wholesale food trade on Al-Hair Road. It opened its first retail and wholesale branch in Al-Khalidiyah district in Riyadh. Then, branches and expansions continued until it reached 15 branches currently around the Kingdom, within an expansion plan that will reach 100 branches, and more within the company’s strategic plan. The products offered have been increased to more than 6,000 different items, in addition to an ambitious vision for development and the beginning of the transformation into comprehensive markets in all branches, in addition to establishing our own production lines, private brands and a special department for wholesale.</p>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      +11
                      years of experience


                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      very High quality products
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                      Products manufactured specifically for the company
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    A world of diversity at your fingertips
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                      Pioneers in the field of food
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    A world of diversity at your fingertips
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <img src="assets/images/info-icon-01.png" alt="" style={{ maxWidth: "52px" }} />
                    <h4>Planning<br /><span>step one</span></h4>
                  </li>
                  <li>
                    <img src="assets/images/info-icon-02.png" alt="" style={{ maxWidth: "52px" }} />
                    <h4>processing<br /><span>Step two</span></h4>
                  </li>
                  <li>
                    <img src="assets/images/info-icon-03.png" alt="" style={{ maxWidth: "52px" }} />
                    <h4>Quality<br /><span>Step three</span></h4>
                  </li>
                  <li>
                    <img src="assets/images/info-icon-04.png" alt="" style={{ maxWidth: "52px" }} />
                    <h4>Distribution<br /><span>Step Four</span></h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content