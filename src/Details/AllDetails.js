import React from 'react'
import SubHeader from '../SubHeader'
import Header from '../Header'
import Footer from '../Footer'
import DetailsHeader from './DetailsHeader'
import Content from './Content'
import Deal from './Deal'
import Link from '../Home/Link'
import Preloader from '../Preloader'

function AllDetails() {
  return (
    <div>
      <Preloader />
      <SubHeader />
      <Header />
      <DetailsHeader />
      <Content />
      <Deal />
      {/* <Link/> */}
      <Footer />
    </div>
  )
}

export default AllDetails