import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
         <div className="container-fluid bg-footer text-dark mt-5 pt-5">
        <div className="row mr-3 ml-3 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 ">
                <a href="shopper" className="footer-e-shop-head-container text-decoration-none">
                    <h1 className="mb-4 Shopper-header"><span className="E-heading">E</span>Shopper</h1>
                </a>
                <p className='para'>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                <p className="mb-2 footer-icon"><i className="fas fa-map-marker-alt mr-3 icon-color"></i>123 Street, New York, USA</p>
                <p className="mb-2 footer-icon"><i className="fas fa-envelope mr-3 icon-color"></i>info@example.com</p>
                <p className="mb-0 footer-icon"><i className="fas fa-phone-alt mr-3 icon-color"></i>+012 345 67890</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="quick-links-head mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark footer-link mb-2" href="home"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-dark footer-link mb-2" href="shop"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a className="text-dark footer-link mb-2" href="details"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a className="text-dark footer-link mb-2" href="cart"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a className="text-dark footer-link mb-2" href="checkout"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a className="text-dark footer-link" href="contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="quick-links-head mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark footer-link mb-2" href="home1"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-dark footer-link mb-2" href="shop1"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a className="text-dark  footer-link mb-2" href="details1"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a className="text-dark  footer-link mb-2" href="cart1"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a className="text-dark  footer-link mb-2" href="checkout1"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a className="text-dark footer-link" href="contact1"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="quick-links-head mb-4">Newsletter</h5>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className= "input-field " placeholder="Your Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="input-field" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button className="newsletter-button" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Footer;