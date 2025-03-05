import React from 'react'
import { Link } from 'react-router'

function ContactHeader() {
  return (
    <div>
          <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="breadcrumb"><Link to="/">Home</Link>  /  Contact Us</span>
          <h3>Contact Us</h3>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default ContactHeader