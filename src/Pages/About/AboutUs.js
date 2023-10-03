import React from 'react'
import Layout from '../../Layout'
import "./About.css"

import image from "../../assets/images/background/5.jpg"
const AboutUs = () => {
    return (
        <Layout>
            <div style={{ paddingTop: "80px" }}>
                <section class="page-title" style={{ backgroundImage: `url(${image})` }} >
                    <div class="auto-container">
                        <h1 class="d-none d-lg-block d-xl-block d-md-block">About Us</h1>
                        <ul class="bread-crumb clearfix">
                            <li><a href="index">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </section>
                <section className="about-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="anim-icons full-width">
                                <span className="icon icon-circle-blue wow fadeIn"></span>

                                <span className="icon icon-circle-1 wow zoomIn"></span>
                            </div>
                            <div className="content-column col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="title">ABOUT US</span>
                                        <h2>Welcome to matrimonysoftware.in </h2>
                                        <div className="text"><p>Ready Matrimonial is one of the professional and highly experienced Matrimonial Website Development Companies in India. As one of the leading matrimonial software development organizations in India, we have maintained a strong team of PHP Developers with us, who work in a synchronized manner to provide you the perfect Matrimony Software at a reasonable cost.</p>

                                            <p>So if you are planning to start a matrimonial website with excellent features, then Ready Matrimony is a perfect platform for you. Ready Matrimonial offers a great service in the design, development, programming, and marketing of your website. We are one of the professional and popular matrimony software development company in India since 2011. With the help of our matrimonial script application, many potential brides and grooms can build their profiles on it and find a suitable partner.</p></div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default AboutUs