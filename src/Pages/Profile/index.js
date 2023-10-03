import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../Layout';
import { getProfile, getProfileImage, getuser } from '../../Redux/Actions/ProfileActions';
import { getLocalStorage, setLocalStorage } from '../../Utils/LocalStorage';
import Media from './Media';
import "./Profile.css";
import ProfileInfo from './ProfileInfo';

const Profile = () => {
    const data = useSelector(state => state)
    const { Profile: { userData, profileData
        , profileImage } } = data
    const dispatch = useDispatch()
    const [profileTabs, setProfileTabs] = useState("info")
    const [profileUserData, setProfileUserData] = useState({})
    const handleProfileTabs = (data) => {
        setProfileTabs(data)
    }

    useEffect(() => {
        let id = getLocalStorage("user_id")
        dispatch(getuser(+id))
        dispatch(getProfile(+id))
        dispatch(getProfileImage(+id))
    }, [getLocalStorage("user_id")])

    useEffect(() => {
        if (!!profileData && !!userData) {
            setProfileUserData({ ...profileData, ...userData })
        }

    }, [userData, profileData])

    useEffect(() => {
        setLocalStorage("profileData", JSON.stringify(profileUserData))
    })
    console.log(profileImage.image, "datadata");
    return (
        <>
            <Layout>
                <div class="mainBannerSection" >

                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="main-content d-flex">
                                    <div class="img-content">
                                        <img class="image-wrap " src={profileImage.image} />
                                    </div>
                                    <div class="text-wrap ml-2">
                                        <div class="text-content d-flex">
                                            <h6 class="mr-2"> {profileUserData && profileUserData?.first_name?.charAt(0)?.toUpperCase() + profileUserData?.first_name?.slice(1) + " " + profileUserData?.last_name}</h6>
                                            <span class="mr-2 mt-2"><i class="fa fa-check-circle" style={{ fontSize: 20, color: "#e6d7da" }}></i></span>
                                            <span class="status mr-2 mt-2"> offline
                                            </span>
                                        </div>
                                        <div class="text-star d-flex">
                                            <ul >
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                            </ul>
                                            <span class="dott"></span>
                                            <h6 class="text-white">5 out of 5</h6>
                                            <span class="dott"></span>
                                            <h6 class="text-white">9 out of 9</h6>

                                        </div>
                                        <div class="third-content">
                                            <h6 class="text-white">{profileData.occupation}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="side-content ">

                                    <div class="dimo-wrap d-flex">
                                        <div class="dimo">
                                            <div class="dimo-one">
                                                10
                                            </div>
                                            <div class="dimo-two">
                                                views
                                            </div>
                                        </div>
                                        <div class="dimo">
                                            <div class="dimo-one">
                                                10
                                            </div>
                                            <div class="dimo-two">
                                                comments
                                            </div>
                                        </div>
                                        <div class="dimo">
                                            <div class="dimo-one">
                                                10
                                            </div>
                                            <div class="dimo-two">
                                                likes
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <section class="mid-sectiuon">
                    <div class="auto-container">
                        <div class="info-mid ">
                            <ul class="">
                                <li onClick={() => handleProfileTabs('info')}><a href='#'> <i class="fa fa-info-circle" aria-hidden="true" ></i> info</a></li>
                                <li onClick={() => handleProfileTabs('overview')}><a href="#"> <i class="fa fa-globe" aria-hidden="true"></i> overview 1</a></li>
                                <li onClick={() => handleProfileTabs('Media')}><a href="#"> <i class="fa fa-camera" aria-hidden="true"></i> Media </a></li>
                                <li onClick={() => handleProfileTabs('activity')}><a href="#"> <i class="fa fa-address-card" aria-hidden="true"></i> activity</a></li>
                                <li onClick={() => handleProfileTabs('posts')}><a href="#"> <i class="fa fa-clipboard" aria-hidden="true"></i> posts</a></li>
                            </ul>
                        </div>

                    </div>
                </section>
                {profileTabs == "Media" && <Media />}
                <section class="second-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-8">
                                {profileTabs == "info" && <ProfileInfo profileUserData={profileUserData} />}
                            </div>
                            <div class="col-lg-4">
                                <div class="one-card  my-4 d-flex justify-content-between">
                                    <div class="first-content d-flex">
                                        <img src="/assets/images/1.jpg" />
                                        <h6 class="text-white ml-2 mb-2 mt-2">sign in to account</h6>
                                    </div>
                                    <div class="second-content">
                                        <img src="/assets/images/1.jpg" />
                                    </div>
                                </div>
                                <div class="second-card">
                                    <div class="d-flex mx-4 mt-2 mb-2 pt-3">
                                        <span class="user-profile" > <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="ml-3">About me</h6>
                                    </div>
                                    <div class="border-bottom-line mx-4 my-4"></div>
                                    <div class="profile-image">
                                        <img src="/assets/images/1.jpg" />
                                        <h4>{profileUserData.about_me}</h4>
                                        <p class="m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>

                                        <div class="border-line">

                                        </div>
                                        <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis aperiam quod facilis consectetur, .</p>
                                    </div>
                                </div>
                                <div class="third-card mb-3">
                                    <div class="d-flex mx-4 mt-2 mb-2 pt-3">
                                        <span class="user-profile" > <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="ml-3">Friends</h6>

                                    </div>
                                    <div class="border-bottom-line mx-4 my-3"></div>
                                    <ul>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  </h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/background/bg.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  </h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="border-bottom-line mx-4 my-4"></div>
                                    <a href="show-all">
                                        " <h6 class="text-center mx-3 pb-2">show all friends(11)</h6></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </Layout>
        </>
    )
}

export default Profile;