import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
         <div class="container-fluid bg-footer text-dark mt-5 pt-5">
        <div class="row mr-3 ml-3 pt-5">
            <div class="col-lg-4 col-md-12 mb-5 ">
                <a href="shopper" class="footer-e-shop-head-container text-decoration-none">
                    <h1 class="mb-4 Shopper-header"><span class="E-heading">E</span>Shopper</h1>
                </a>
                <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                <p class="mb-2"><i class="fas fa-map-marker-alt mr-3 icon-color"></i>123 Street, New York, USA</p>
                <p class="mb-2"><i class="fas fa-envelope mr-3 icon-color"></i>info@example.com</p>
                <p class="mb-0"><i class="fas fa-phone-alt mr-3 icon-color"></i>+012 345 67890</p>
            </div>
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h5 class="quick-links-head mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark mb-2" href="home"><i class="fa fa-angle-right mr-2"></i>Home</a>
                            <a class="text-dark mb-2" href="shop"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a class="text-dark mb-2" href="details"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a class="text-dark mb-2" href="cart"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a class="text-dark mb-2" href="checkout"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a class="text-dark" href="contact"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="quick-links-head mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark mb-2" href="home1"><i class="fa fa-angle-right mr-2"></i>Home</a>
                            <a class="text-dark mb-2" href="shop1"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a class="text-dark mb-2" href="details1"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a class="text-dark mb-2" href="cart1"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a class="text-dark mb-2" href="checkout1"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a class="text-dark" href="contact1"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="quick-links-head mb-4">Newsletter</h5>
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control py-4" placeholder="Your Name" required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control py-4" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button class="newsletter-button" type="submit">Subscribe Now</button>
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