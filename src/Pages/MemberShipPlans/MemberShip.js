import React from 'react';
import Layout from '../../Layout';
import "./MemberShipPlans.css";
import { useNavigate } from 'react-router-dom';

const MemberShip = () => {
    const navigate = useNavigate();

    const handlePayment = (e) => {
        navigate('/payment/' + e);
    }

    return (
        <Layout>
            <section className="cards-wrapper" style={{ padding: "150px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 col-lg-3 col-xl-3 col-sm-12 ">
                            <div className="card-one-silver">
                                <h4>silver</h4>
                                <h5>$10 / month</h5>
                                <div className="border-line">
                                </div>
                                <div className="inner-list">
                                    <ul>
                                        <li>
                                            <span><i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span><i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span><i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span><i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                    </ul>
                                </div>
                                <div className="last-button">
                                    <button type="button" onClick={() => handlePayment(10)}> All Promises</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 m-0">
                            <div className="card-one-silver">
                                <h4>gold</h4>
                                <h5>$30 / month</h5>
                                <div className="border-line">

                                </div>
                                <div className="inner-list">
                                    <ul>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>

                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>

                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>


                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                    </ul>
                                </div>
                                <div className="last-button">
                                    <button type="button" onClick={() => handlePayment(30)}> All Promises</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 m-0">
                            <div className="card-one-silver">
                                <h4>platinum</h4>
                                <h5>$50 / month</h5>
                                <div className="border-line">

                                </div>
                                <div className="inner-list">
                                    <ul>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>


                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span>  View members directory
                                        </li>
                                    </ul>
                                </div>
                                <div className="last-button">
                                    <button type="button" onClick={() => handlePayment(50)}>All Promises</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 m-0">
                            <div className="card-one-silver">
                                <h4>diamond</h4>
                                <h5>$100 / month</h5>
                                <div className="border-line">

                                </div>
                                <div className="inner-list">
                                    <ul>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>


                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span> <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                        <li>
                                            <span className="round">  <i className="fa fa-circle-o" aria-hidden="true"></i>
                                            </span> View members directory
                                        </li>
                                    </ul>
                                </div>
                                <div className="last-button">
                                    <button type="button" onClick={() => handlePayment(100)}> All Promises</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default MemberShip