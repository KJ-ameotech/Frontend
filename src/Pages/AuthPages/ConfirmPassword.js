import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Layout'

const ConfirmPassword = () => {
    return (
        <Layout>
            <section className="newsletter-section" style={{ padding: "150px 0" }}>
                <div className="anim-icons full-width">
                    <span className="icon icon-shape-3 wow fadeIn"></span>
                    <span className="icon icon-line-1 wow fadeIn"></span>
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4">
                        </div>
                        <div className="form-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="contact-form">
                                    <div className="sec-title text-center">
                                        <h2>Reset Password</h2>
                                        {/* <div className="text">Please enter your email address to search for your account..</div> */}
                                    </div>
                                    <form method="post" action="login_submit.php" className="form" id="contact-form">
                                        <div className="row clearfix">

                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="password" name="txtpassword" placeholder="New Password" maxlength="35" id="pass" tabindex="2" required value="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="password" name="txtpassword" placeholder="confirm Password" maxlength="35" id="pass" tabindex="2" required value="" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 mt-3 ">
                                                <div className="btn-box">
                                                    <a href="login" ><button className="theme-btn btn btn-style-one " tabindex="6" type="submit" name="submit" style={{ width: "100%" }}><span className="btn-title">Submit</span></button></a>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9 mt-3">
                                                <span className=""> New Candidate Register ?<Link to="/signup" tabindex="7"> SignUp</Link></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ConfirmPassword