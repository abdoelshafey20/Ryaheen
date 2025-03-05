import React from 'react'

function Deal() {
  return (
    <div>

      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>| Our Business Plan</h6>
                <h2>High quality products</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">

                  <div className="nav-wrapper ">

                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">1\ Planning</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="villa-tab" data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false">2\ Processing</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false">3\ Quality</button>
                      </li>


                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="distribution-tab" data-bs-toggle="tab" data-bs-target="#distribution" type="button" role="tab" aria-controls="distribution" aria-selected="false">4\ Distribution</button>
                      </li>


                    </ul>
                  </div>


                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                          <ul>
                              <li> natural products <span>100%</span></li>
                              <li> Price <span>Competitive prices</span></li>
                              <li>Number of branches <span>14</span></li>
                              <li>Delivery <span>Yes</span></li>
                              <li>Payment<span>Bank/Cash</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src="/assets/images/planning1.jpg" alt="" />
                        </div>
                        <div className="col-lg-3 artical">
                          <p>First Step </p>

                          <h4>Planning for work</h4>
                          <p>
                            First, farmers who meet strict production requirements of high quality are selected, after which the harvest and preparation for the second phase takes place</p>


                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                          <ul>
                              <li> natural products <span>100%</span></li>
                              <li> Price <span>Competitive prices</span></li>
                              <li>Number of branches <span>14</span></li>
                              <li>Delivery <span>Yes</span></li>
                              <li>Payment<span>Bank/Cash</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src="/assets/images/processing2.jpg" alt="" />
                        </div>
                        <div className="col-lg-3 artical">

                          <p>Step Two </p>

                          <h4>
                            Manufacturing and processing</h4>
                          <p>
                            Manufactured and prepared according to the highest quality standards, under the supervision of production specialists, to obtain the best flavour while maintaining packaging, packing and transport safety</p>

                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          
                          <div className="info-table">
                            <ul>
                              <li> natural products <span>100%</span></li>
                              <li> Price <span>Competitive prices</span></li>
                              <li>Number of branches <span>14</span></li>
                              <li>Delivery <span>Yes</span></li>
                              <li>Payment<span>Bank/Cash</span></li>
                            </ul>
                          </div>
                        
                        </div>
                        <div className="col-lg-6">
                          <img src="/assets/images/planning2.jpg" alt="" />
                        </div>
                        <div className="col-lg-3 artical">

                          <p>Step Three </p>
                          <h4>Quality Tests</h4>

                          <p>At the final stage, all products are stored in our standard warehouses, which are refrigerated and have a high level of cleanliness, in preparation for distribution to merchants and points of sale in all our branches around the Kingdom, so that they reach you fresh and of high quality.

                          </p>


                        </div>




                      </div>
                    </div>
                 
                 
                    <div className="tab-pane fade" id="distribution" role="tabpanel" aria-labelledby="distribution-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                          <ul>
                              <li> natural products <span>100%</span></li>
                              <li> Price <span>Competitive prices</span></li>
                              <li>Number of branches <span>14</span></li>
                              <li>Delivery <span>Yes</span></li>
                              <li>Payment<span>Bank/Cash</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src="/assets/images/car.jpg" alt="" />
                        </div>
                        <div className="col-lg-3 artical">
                          <p>Step Four </p>
                          <h4>Distribution to points of sale</h4>
                          <p>All our products undergo rigorous quality tests before being distributed to the market or to the final consumer to ensure product quality, safety, and distinctive flavour.</p>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Deal



