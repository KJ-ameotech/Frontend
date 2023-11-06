import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../../Utils/ApiUrl'
import { useNavigate } from 'react-router-dom'
import { getUserPictures, getUserPreferences } from '../../Redux/Actions/ProfileActions'

const UserProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profile = useSelector(state => state.Profile)
    const { searchByIdRes, profilePicturesData, userPreferencesList } = profile;

    useEffect(() => {
        if (searchByIdRes == null) {
            navigate('/')
        }
        else {
            dispatch(getUserPictures(searchByIdRes[0].user_id))
            dispatch(getUserPreferences(searchByIdRes[0].user_id))
        }
    }, [searchByIdRes])

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
                                        <div class="col-lg-6">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>{searchByIdRes[0].first_name && 'Name'}</li>
                                                    <li>{searchByIdRes[0].email && 'Email'}</li>
                                                    <li>{searchByIdRes[0].age && 'Age'}</li>
                                                    <li>{searchByIdRes[0].distance && 'Distance'}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>{searchByIdRes[0].first_name} {searchByIdRes[0].last_name}</li>
                                                    <li>{searchByIdRes[0].email}</li>
                                                    <li>{searchByIdRes[0].age}</li>
                                                    <li>{searchByIdRes[0].distance}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <h4>Preferences</h4>
                                        <div class="col-lg-6">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>{userPreferencesList[0]?.min_age && 'Age'}</li>
                                                    <li>{userPreferencesList[0]?.min_height && 'Height'}</li>
                                                    <li>{userPreferencesList[0]?.smoking_habits && 'Smoking Habits'}</li>
                                                    <li>{userPreferencesList[0]?.drinking_habits && 'Drinking Habits'}</li>
                                                    <li>{userPreferencesList[0]?.caste_preference && 'Caste'}</li>
                                                    <li>{userPreferencesList[0]?.education_preference && 'Education'}</li>
                                                    <li>{userPreferencesList[0]?.body_type && 'Body Type'}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>{userPreferencesList[0]?.min_age} - {userPreferencesList[0]?.max_age}</li>
                                                    <li>{userPreferencesList[0]?.min_height} - {userPreferencesList[0]?.max_height}</li>
                                                    <li>{userPreferencesList[0]?.smoking_habit}</li>
                                                    <li>{userPreferencesList[0]?.drinking_habits}</li>
                                                    <li>{userPreferencesList[0]?.caste_preference}</li>
                                                    <li>{userPreferencesList[0]?.education_preference}</li>
                                                    <li>{userPreferencesList[0]?.body_type}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {profilePicturesData?.length > 0 &&
                                <>
                                    <h6 class="ml-3">Profile Images</h6>
                                    <div class="col-lg-12 mb-4 ml-1">
                                        <div class="image-gallery">
                                            {profilePicturesData.map((item) => {
                                                return <>
                                                    <img className='m-2' style={{ width: '170px', height: '170px' }} src={item?.image ? baseUrl + item.image : "/assets/images/background/bg.jpg"} alt="" />
                                                </>
                                            })}
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