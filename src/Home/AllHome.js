import React from 'react'
import Preloader from '../Preloader'
import SubHeader from '../SubHeader'
import Header from '../Header'
import Banner from './Banner'
import Feature from './Feature'
import Video from './Video'
import Fun from './Fun'
import Section from './Section'
import Properties from './Properties'
import Contact from './Contact'
import Footer from '../Footer'
import Link from './Link'

function AllHome() {
    return (
        <div>
            <Preloader />
            <SubHeader />
            <Header />
            <Banner />
            <Properties/>
            <Video/>
            <Fun/>
            <Feature/>
            <Section/>
            <Contact/>
            {/* <Link/> */}
            <Footer/>
        </div>
    )
}

export default AllHome