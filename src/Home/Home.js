import React from 'react';
import JustArrived from '../components/JustArrived/JustArrived';
import Subscriber from '../components/Subscriber/Subscriber';
import Trandy from '../components/Trandy/Trandy';
import Footer from '../components/Footer/Footer';
import OwlDemo from '../components/Footer/OwlDemo';
import Feature from '../components/Features/Feature'
import Offersection from '../components/OffersSection/Offersection'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import Navbar from '../components/MainNavbar/Navbar'
import TopNavbar from '../components/TopNavbar/TopNavbar'
import Checkout from '../components/Checkout/Checkout'
const Home = () => {
 
  return (
    <div>
		 
		 <TopNavbar/>
        <Navbar/>
        <Feature/>
        <ProductsSection/>
        <Offersection/>
        <Trandy />
        <Subscriber />
        <JustArrived />
        <OwlDemo/>
		  <Footer/>
      <Checkout/>
		</div>
  )
}
export default Home;