import React,{useState} from 'react';
import Login from '../components/LoginPage/Login';
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
import ShopDetail from '../components/ShopDetails/ShopDetail';
const Home = () => {
  const [loginmodal, setLoginModal] = useState(false);
  const modalClose =(info)=>{
    setLoginModal(info)
  }
  return (
    <div>
		 <button onClick={()=>setLoginModal(!loginmodal)}>Login</button> 
         <div>{loginmodal && <Login modalClose={modalClose} />}</div>
		 <TopNavbar/>
        <Navbar/>
        <Trandy />
        <Subscriber />
        <JustArrived />
        <OwlDemo/>
		<Feature/>
        <ProductsSection/>
        <Offersection/>
        <Footer/>
        <ShopDetail/>
		</div>
  )
}
export default Home;