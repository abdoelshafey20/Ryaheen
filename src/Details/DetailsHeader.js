import React from 'react'
import { Link } from 'react-router'

function DetailsHeader() {
  return (
    <div>

<div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="breadcrumb"><Link to="/">Home</Link>  / Details</span>
          <h3>Who we are</h3>
        </div>
      </div>
    </div>
  </div>


    </div>
  )
}

export default DetailsHeader