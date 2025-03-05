import React from 'react'
import Header from '../Header'
import SubHeader from '../SubHeader'
import Preloader from '../Preloader'
import Footer from '../Footer'
import Container from './Container'
import Branch from './Branch'
import Link from '../Home/Link'

function AllBranches() {
  return (
    <div>
          <Preloader />
            <SubHeader />
            <Header />
            <Container/>
            <Branch/>
            {/* <Link/> */}
            <Footer/>
    </div>
  )
}

export default AllBranches