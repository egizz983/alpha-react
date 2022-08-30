import React from 'react'
import Header from '../../layout/Header/Header'
import Banner from '../../components/landing/banner/Banner'
import WelcomeAlpha from '../../components/landing/welcomeAlpha/WelcomeAlpha'
import Achievement from '../../components/landing/achievement/Achievement'
import Presale from '../../components/landing/presale/Presale'
import NewGames from '../../components/landing/newGames/NewGames'
import RecentInformation from '../../components/landing/recentInformation/RecentInformation'
import NftToken from '../../components/landing/nftToken/NftToken'
import ESports from '../../components/landing/eSports/ESports'
import Store from '../../components/landing/store/Store'
import Alpha from '../../components/landing/alpha/Alpha'
import Faq from '../../components/landing/faq/Faq'
import Partners from '../../components/landing/partners/Partners'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../layout/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <WelcomeAlpha />
      <Achievement />
      <Presale />
      <NewGames />{/** 
      <RecentInformation />*/}
      <NftToken />
      {/* Road Map instead those 3 
      <ESports />
      <Store />
      <Alpha />*/}
      <Faq />
      {/* <Partners /> */}
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home
