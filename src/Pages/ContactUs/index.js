import React from 'react'
import Layout from '../../Layout'
import image from "../../assets/images/background/5.jpg"
import { Link } from 'react-router-dom'
const Contactus = () => {
    return (
        <Layout >
            <div style={{ paddingTop: "80px" }}>
                <section className="page-title" style={{ backgroundImage: `url(${image})` }} >
                    <div className="auto-container">
                        <h1 className="d-none d-lg-block d-xl-block d-md-block">Contact Us</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to="/">Home</Link></li>
                            <li>Contact Us</li>

                        </ul>
                    </div>
                </section>
                <section className="newsletter-section contact-page-section">
                    <div className="auto-container">
                        <div className="row clearfix mt-3">

                            <div className="contact-column col-lg-3 col-md-12 col-sm-12 order-2 coninfo" >
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <h2>Contact Us</h2>
                                    </div>
                                    <ul className="contact-info">
                                        <li>
                                            <span className="icon fa fa-phone-volume"></span>
                                            <p><strong>Call Us</strong>
                                                7776938344<br /> </p>

                                        </li>

                                        <li>
                                            <span className="icon fa fa-envelope"></span>
                                            <p><strong>Mail Us</strong></p>
                                            <p>info@matrimonysoftware.in</p>
                                        </li>

                                        <li>
                                            <span className="icon fa fa-clock"></span>
                                            <p><strong>Office Time</strong></p>
                                            <p>Time:9 A.M. To 7 P.M.</p>
                                        </li>
                                    </ul>

                                    {/* <!-- <ul className="social-icon-two social-icon-colored">
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                        </ul>--> */}
                                </div>
                            </div>
                            <div className="form-column col-lg-9 col-md-12 col-sm-12">

                                <div className="envelope-image"></div>

                                <div className="form-inner">
                                    <div className="contact-form ">
                                        <div className="sec-title">
                                            <h2>Address</h2>
                                            <p className="mt-3">Near, T3B, 4th Fooor, Matoshree App, Railway Bridge, Vijaynagar, Sangli, Maharashtra 416416 </p>
                                        </div>



                                        <div className="contact-form">
                                            <div className="sec-title">
                                                <h2>Feedback</h2>
                                            </div>
                                            <form method="post" action="emailsend" id="contact-form">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" maxlength="40" name="name" placeholder="Name" tabindex="1" required />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" maxlength="10" name="phone" placeholder="Phone" tabindex="2" required />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" maxlength="35" placeholder="Email" tabindex="3" required="" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="subject" maxlength="70" placeholder="Subject" tabindex="4" required />
                                                    </div>

                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">

                                                        <textarea name="message" maxlength="250" placeholder="Message" tabindex="5"></textarea>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="map-section">
                    <div class="auto-container mb-4">
                        <p><iframe frameborder="0" height="450" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30546.57270317713!2d74.600819!3d16.859979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76d3c6745c2bda7b!2sReady%20Matrimonial!5e0!3m2!1sen!2sin!4v1613735289413!5m2!1sen!2sin" style={{ border: 0, tabindex: "0", width: "100%" }}></iframe></p>



                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Contactus