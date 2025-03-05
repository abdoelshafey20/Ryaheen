import React from 'react'
import SubHeader from '../SubHeader'
import Header from '../Header'
import Footer from '../Footer'
import Touch from './Touch'
import ContactHeader from './ContactHeader'
import Link from '../Home/Link'
import Preloader from '../Preloader'

function AllContact() {
    return (
        <div>
            <Preloader />
            <SubHeader />
            <Header />
            <ContactHeader/>
            <Touch />
            {/* <Link/> */}
            <Footer />
        </div>
    )
}

export default AllContact