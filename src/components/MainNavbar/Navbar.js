import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: "65px",backgroundColor:"#D19C97", marginTop: "-1px", padding: "0 30px", ariaExpanded:"true"}}>
                    <h6 className="m-4 text-dark heading-text">Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 collapse show" id="navbar-vertical">
                    <div className="navbar-nav w-100 overflow-hidden" style={{height: "497px"}}>
                        <div className="nav-item dropdown">
                            <a href="#k" className="nav-link  d-flex align-items-center justify-content-between" data-toggle="dropdown" aria-expanded="false"   style={{height: "50px" , marginTop: "-1px", padding: "0 30px"}}><span className='m-4'>Dresses </span><i className="fa fa-angle-down float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute border-0 rounded-0 w-100 m-0" style={{backgroundColor:"#EDF1FF"}}>
                                <a href="kd" className="dropdown-item">Men's Dresses</a>
                                <a href="kd" className="dropdown-item">Women's Dresses</a>
                                <a href="kd" className="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <div style={{paddingLeft:"42px"}}>
                        <a href="kd" className="nav-item nav-link text-color">Shirts</a>
                        <a href="kd" className="nav-item nav-link text-color">Jeans</a>
                        <a href="kd" className="nav-item nav-link text-color">Swimwear</a>
                        <a href="kd" className="nav-item nav-link text-color">Sleepwear</a>
                        <a href="kd" className="nav-item nav-link text-color">Sportswear</a>
                        <a href="kd" className="nav-item nav-link text-color">Jumpsuits</a>
                        <a href="kd" className="nav-item nav-link text-color">Blazers</a>
                        <a href="kd" className="nav-item nav-link text-color">Jackets</a>
                        <a href="kd" className="nav-item nav-link text-color">Shoes</a>
                    </div>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="kd" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="E-text font-weight-bold border px-3 mr-1">E</span><span className="heading">Shopper</span></h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between d-lg-block" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link items">Home</a>
                            <a href="shop.html" className="nav-item nav-link items">Shop</a>
                            <a href="detail.html" className="nav-item nav-link items">Shop Detail</a>
                            <div className="nav-item dropdown">
                                <a href="#k" className="nav-link dropdown-toggle items" data-toggle="dropdown" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="cart.html" className="dropdown-item items">Shopping Cart</a>
                                    <a href="checkout.html" className="dropdown-item items">Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link items">Contact</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <a href="kd" className="nav-item nav-link items">Login</a>
                            <a href="kd" className="nav-item nav-link items">Register</a>
                        </div>
                    </div>
                </nav>

               
<div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner " role="listbox">
                        <div className="carousel-item active" >
                            <img className="img-fluid image-container" src="https://technext.github.io/eshopper/img/carousel-1.jpg" alt=""/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-container">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-6 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <a href="kd" className="btn btn-light text-dark py-2 px-3 shop-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img className="img-fluid image-container" src="https://technext.github.io/eshopper/img/carousel-2.jpg" alt=""/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-container">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h4 className="text-light text-uppercase  mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-6 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                    <a href className="btn btn-light text-dark py-2 px-3 shop-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark ml-3">
                            <span className="carousel-control-prev-icon"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark mr-3">
                            <span className="carousel-control-next-icon"></span>
                        </div>
                    </a>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;