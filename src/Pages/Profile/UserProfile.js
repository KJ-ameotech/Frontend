import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../../Utils/ApiUrl'
import { useNavigate } from 'react-router-dom'
import { getUserPictures } from '../../Redux/Actions/ProfileActions'

const UserProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profile = useSelector(state => state.Profile)
    const { searchByIdRes, profilePicturesData } = profile;

    useEffect(() => {
        if (searchByIdRes == null) {
            navigate('/')
        }
        else {
            dispatch(getUserPictures(searchByIdRes[0].user_id))
        }
    }, [searchByIdRes])

    console.log("data", profilePicturesData)

    return (
        <Layout>
            {searchByIdRes?.length > 0 &&
                <>
                    <div class="main-content d-flex">
                        <div class="img-content mx-auto">
                            <img id="myImg" width="500" height="300" className="story-img img-fluid image-wrap" src={searchByIdRes[0].profile_picture ? baseUrl + searchByIdRes[0].profile_picture : "/assets/images/background/bg.jpg"} alt="" />
                        </div>
                    </div>


                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="information-card my-4 px-4 py-4">
                                    <div class="d-flex  mb-4 border-bottom-line">
                                        <span class="mr-3 mb-2"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="mb-2">Profile</h6>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>Name</li>
                                                    <li>Email</li>
                                                    <li>Age</li>
                                                    <li>Distance</li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div class="col-lg-3">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>{searchByIdRes[0].first_name} {searchByIdRes[0].last_name}</li>
                                                    <li>{searchByIdRes[0].email}</li>
                                                    <li>{searchByIdRes[0].age}</li>
                                                    <li>{searchByIdRes[0].distance}</li>

                                                </ul>
                                            </div>

                                        </div>
                                        <div class="col-lg-3">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>Education</li>
                                                    <li>Occupation</li>
                                                    <li>Income</li>
                                                    <li>Family status</li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div class="col-lg-3">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>MCA</li>
                                                    <li>Developer</li>
                                                    <li>11(l.p.a)</li>
                                                    <li>Joint</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Profile Images */}
                            {profilePicturesData?.image &&
                                <>
                                    <h6 class="ml-3">Profile Images</h6>
                                    <div class="col-lg-12 m-2">
                                        <div class="image-gallery">
                                            <img className='m-2' src={profilePicturesData.image} alt="Image 1" />
                                            <img className='m-2' src={profilePicturesData.image} alt="Image 1" />
                                            <img className='m-2' src={profilePicturesData.image} alt="Image 1" />
                                            <img className='m-2' src={profilePicturesData.image} alt="Image 1" />
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </>
            }
        </Layout>
    )
}

export default UserProfile