import React from 'react'

function Video() {
  return (
    //       <div> 
    //           <div className="video section">
    //           <div className="container">
    //               <div className="row">
    //                   <div className="col-lg-4 offset-lg-4">
    //                       <div className="section-heading text-center">
    //                           <h6>| Video View</h6>
    //                           <h2>Get Closer View & Different Feeling</h2>
    //                       </div>
    //                   </div>
    //               </div>
    //           </div>
    //       </div>

    // <div className="video-content">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-10 offset-lg-1">
    //         <div className="video-frame">
    //           <img src="assets/images/banner1.jpg" alt=""/>
    //           <a href="https://www.tiktok.com/@ryaheendamascus" target="_blank"><i class="fa fa-play"></i></a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //       </div>


    <div>
      <div className="video section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Video View</h6>
                <h2>Get Closer View & Different Feeling</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="video-frame">
                
                <video controls muted loop autoPlay width="100%"  height="500px">
                  <source src="path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              
                <source src="/assets/video.mp4" >
              
                </source>
                <i class="fa fa-play"></i>
                </video>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Video