import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../Layout';
import { getLikedUser, getProfile, getProfileImage, getuser, updateProfileImage } from '../../Redux/Actions/ProfileActions';
import { getLocalStorage, setLocalStorage } from '../../Utils/LocalStorage';
import Media from './Media';
import "./Profile.css";
import ProfileInfo from './ProfileInfo';
import profileDefaultImage from "../../assets/images/background/bg.jpg";
import { BiPencil } from "react-icons/bi"
import { toastify } from '../../Utils/Function';
import { toast } from 'react-toastify';
import defaultImage from "../../assets/images/background/bg.jpg"
import FriendInfo from './FriendInfo';

const Profile = () => {
    const inputRef = useRef(null)
    const data = useSelector(state => state)
    const { Profile: { userData, profileData
        , profileImage, likedUserList } } = data
    const dispatch = useDispatch()
    const [profileTabs, setProfileTabs] = useState("info")
    const [profileUserData, setProfileUserData] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [imageUpdateCount, setImageUpdateCount] = useState(0)

    const handleProfileTabs = (data) => {
        setProfileTabs(data)
    }
    const handleProfileImage = (e) => {
        let { files } = e.target;
        const imageType = files[0]?.name.split(".")[1]
        if (imageType === "JPEG" ||
            imageType === "PNG" ||
            imageType === "png" ||
            imageType === "jpeg" ||
            imageType === "jpg" ||
            imageType === "JPG" ||
            imageType === "gif") {
            let image = files[0]
            dispatch(updateProfileImage(getLocalStorage("user_id"), image))
            setImageUpdateCount(prev => prev + 1)
        } else {
            toastify(toast.info, 'Please select valid image.')
        }

    }

    useEffect(() => {
        let id = getLocalStorage("user_id")
        dispatch(getuser(+id))
        dispatch(getProfile(+id))
        dispatch(getProfileImage(+id))
        dispatch(getLikedUser(id))
    }, [getLocalStorage("user_id")])
    useEffect(() => {
        if (!!profileData && !!userData) {
            setProfileUserData({ ...profileData, ...userData })
        }
    }, [userData, profileData])
    useEffect(() => {
        if (profileImage.status_code === 200 && imageUpdateCount > 0) {
            toastify(toast.success, "Profile image update successful.")
        }
    }, [profileImage])

    return (
        <>
            <Layout>
                <div style={{ padding: "90px 0 0 0 " }}>
                    <div className="mainBannerSection">

                        <div className="auto-container" >
                            <div className="row">
                                <div className="col-lg-6">

                                    <div className="main-content d-flex">
                                        <div className="img-content mb-3">
                                            <img type='file'
                                                id="imageUpload"
                                                accept="image/*"
                                                className="image-wrap"
                                                src={profileImage?.image || profileDefaultImage}
                                            />
                                            {isEdit && <div class="avatar-edit">
                                                <input type='file' id="imageUpload" className='d-none' ref={inputRef} accept="image/*" onChange={handleProfileImage} />
                                                <label for="imageUpload" onClick={() => inputRef.current.click()}> <BiPencil className='pensil' /></label>
                                            </div>}

                                        </div>
                                        <div className="text-wrap ml-2">
                                            <div className="text-content d-flex">
                                                <h6 className="mr-2"> {profileUserData && profileUserData?.first_name?.charAt(0)?.toUpperCase() + profileUserData?.first_name?.slice(1) + " " + profileUserData?.last_name}</h6>
                                                <span className="mr-2 mt-2"><i className="fa fa-check-circle" style={{ fontSize: 20, color: "#e6d7da" }}></i></span>
                                                {/* <span className="status mr-2 mt-2"> offline
                                                </span> */}
                                            </div>
                                            <div className="text-star d-flex">
                                                <ul >
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span className="dott"></span>
                                                <h6 className="text-white">5 out of 5</h6>
                                                <span className="dott"></span>
                                                <h6 className="text-white">9 out of 9</h6>

                                            </div>
                                            <div className="third-content">
                                                <h6 className="text-white">{profileData?.occupation}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='text-end mt-4'>
                                        <button className='theme-btn btn btn-style-one' onClick={() => setIsEdit(true)}>
                                            Edit Profile
                                        </button>
                                    </div>

                                    {/* <div className="side-content ">

                                        <div className="dimo-wrap d-flex">
                                            <div className="dimo">
                                                <div className="dimo-one">
                                                    10
                                                </div>
                                                <div className="dimo-two">
                                                    views
                                                </div>
                                            </div>
                                            <div className="dimo">
                                                <div className="dimo-one">
                                                    10
                                                </div>
                                                <div className="dimo-two">
                                                    comments
                                                </div>
                                            </div>
                                            <div className="dimo">
                                                <div className="dimo-one">
                                                    10
                                                </div>
                                                <div className="dimo-two">
                                                    likes
                                                </div>
                                            </div>
                                        </div>

                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <section className="mid-sectiuon">
                        <div className="auto-container">
                            <div className="info-mid ">
                                <ul className="">
                                    <li onClick={() => handleProfileTabs('info')}><a href='#'> <i className="fa fa-info-circle" aria-hidden="true" ></i> Info</a></li>
                                    <li onClick={() => handleProfileTabs('overview')}><a href="#"> <i className="fa fa-globe" aria-hidden="true"></i> Overview</a></li>
                                    <li onClick={() => handleProfileTabs('Media')}><a href="#"> <i className="fa fa-camera" aria-hidden="true"></i> Media </a></li>
                                    <li onClick={() => handleProfileTabs('activity')}><a href="#"> <i className="fa fa-address-card" aria-hidden="true"></i> Activity</a></li>
                                    <li onClick={() => handleProfileTabs('posts')}><a href="#"> <i className="fa fa-clipboard" aria-hidden="true"></i> Posts</a></li>
                                </ul>
                            </div>

                        </div>
                    </section>
                    {profileTabs == "Media" && <Media />}
                    <section className="second-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    {profileTabs == "info" && <ProfileInfo profileUserData={profileUserData} isEdit={isEdit} />}
                                </div>
                                <div className="col-lg-4">
                                    <div className="second-card my-4 px-4 py-4">
                                        <div className="d-flex mx-4 mt-2 mb-2 pt-3">
                                            <span className="user-profile" > <i className="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                            <h6 className="ml-3">About me</h6>
                                        </div>
                                        <div className="border-bottom-line mx-4 my-4"></div>
                                        <div className="profile-image">
                                            <img src="/assets/images/1.jpg" />
                                            <h4>{profileUserData.about_me}</h4>
                                        </div>
                                    </div>

                                    {/* <div className="second-card my-4 px-4 py-4">
                                        <FriendInfo />
                                    </div> */}
                                    <div className="third-card mb-3">
                                        <div className="d-flex mx-4 mt-2 mb-2 pt-3">
                                            <span className="user-profile" > <i className="fa fa-user" aria-hidden="true"></i>
                                            </span>
                                            <h6 className="ml-3">Friends</h6>

                                        </div>
                                        <div className="border-bottom-line mx-4 my-3"></div>
                                        <FriendInfo likedUserList={likedUserList} />
                                        <div className="border-bottom-line mx-4 my-4"></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Profile;