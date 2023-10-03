import React, { useEffect, useState } from 'react';
import "./Profile.css"
import Layout from '../../Layout';
import { firstNameAndLastNameValidation } from '../../Utils/Validation';
import defaultImage from "../../assets/images/background/bg.jpg"
import { IoIosAlert } from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from '../../Utils/LocalStorage';
import { getuser, ProfilePost, uploadProfileImage } from '../../Redux/Actions/ProfileActions';
import { toast } from 'react-toastify';
import { header, toastify } from '../../Utils/Function';
import axios from 'axios';
const ProfileUserDetail = () => {
    const dispatch = useDispatch()
    const profileState = useSelector((state) => state.Profile)
    const { uploadImageRes: { response } } = profileState
    const [profileData, setProfileData] = useState({
        height: "",
        weight: "",
        marital_status: "",
        hobbies: {},
        headline: "",
        caste: "",
        about_me: "",
        occupation: "",
        user: +getLocalStorage("user_id"),
        income: "",
        education: ""

    })
    const [hobbies, setHobbies] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState(false)
    const [hobbiesList, setHobbiesList] = useState([])
    const handleProfilePersonalInfo = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => {
            return {
                ...prev,
                [name]: name === "weight" ? +value : name === "height" ? +value : value
            }
        })
    }
    const handleProfleInfo = (e) => {
        e.preventDefault()
        if (
            !!(profileData.height + "")?.length
            && !!(profileData.weight + "").length
            && !!profileData.about_me?.length
            && !!profileData.caste?.length
            && !!profileData.headline?.length
            && !!profileData.marital_status?.length
            && !!profileData.occupation?.length &&
            !!profileData.education?.length &&
            !!profileData.income?.length) {
            if ((profileData.height + "")?.length > 1
                && (profileData.weight + "")?.length > 1
                && profileData.about_me?.length > 4
                && profileData.caste?.length > 4
                && profileData.headline?.length > 5
                && profileData.occupation?.length > 4) {
                dispatch(ProfilePost(profileData))
            } else {
                setError(true)
            }

        } else {
            setError(true)
        }
    }
    const handleProfileImage = (e) => {
        let { files } = e.target;
        const imageType = files[0].name.split(".")[1]
        if (imageType === "JPEG" ||
            imageType === "PNG" ||
            imageType === "png" ||
            imageType === "jpeg" ||
            imageType === "jpg" ||
            imageType === "JPG" ||
            imageType === "gif") {
            let image = files[0]
            dispatch(uploadProfileImage(image))
            setFile(URL.createObjectURL(image));

        } else {
            toastify(toast.info, 'Please select valid image.')
        }

    }

    const handleHobbies = () => {
        if (!!hobbies.length) {
            setHobbiesList((prev) => [...prev, hobbies])
            setHobbies("")
        }
    }

    useEffect(() => {
        const obj = { ...hobbiesList }
        setProfileData({ ...profileData, hobbies: { ...obj } })
    }, [hobbiesList])
    // useEffect(())

    console.log(response, "profileState");
    return (
        <Layout>
            <div className='user_profile' style={{ padding: "100px 0" }}>
                <div class="auto-container mb-5">
                    <div class="image-container">
                        <h1>Profile Image Upload
                        </h1>
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input type='file' id="imageUpload" accept="image/*" onChange={handleProfileImage} />
                                <label for="imageUpload">   <IoIosAlert className='pensil' /></label>
                            </div>
                            <div class="avatar-preview">
                                <div id="imagePreview" style={{ backgroundImage: `url(${file || defaultImage})` }}>
                                </div>
                            </div>
                        </div>
                        <p className="form-text " style={{ color: "red" }}>{(!profileData.profile_picture && error) ? "Profile Image is Required" : ""}</p>
                    </div>
                    <div className="contact-form">

                        <form method="post" action="emailsend" id="contact-form" onSubmit={(e) => handleProfleInfo(e)} encType="multipart/form-data">
                            <div className="row clearfix">

                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="number" maxlength="35" placeholder="Height" name="height" tabindex="3" onChange={(e) => handleProfilePersonalInfo(e)} />
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.height && error) ? "Height is Required" : ((profileData.height + "")?.length == 1 && error) ? "Invalid Height." : ""}</p>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="number" name="weight" maxlength="70" placeholder="Weight" tabindex="4" onChange={(e) => handleProfilePersonalInfo(e)} />
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.weight && error) ? "Weight is Required" : ((profileData.weight + "").length == 1 && error) ? "Invalid Weight." : ""}</p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <select className="custom-select-box" name="marital_status" tabindex="7" id="MaritalStatus" onChange={(e) => handleProfilePersonalInfo(e)}>
                                        <option value="" disabled selected hidden>Marital Status</option>
                                        <option value="single">Single</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Separated">Separated</option>
                                        <option value="Registered partnership">Registered partnership</option>
                                    </select>
                                </div>
                                <p className="form-text " style={{ color: "red" }}>{(!profileData.marital_status?.length && error) ? "Marital Status is Required" : ""}</p>
                                <div className="col-lg-8 col-md-8 col-sm-12 form-group">
                                    <input type="text" name="hobbies" maxlength="70" placeholder="Hobbies(Optional)" tabindex="4" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                                    <input type="button" value="Add Hobbies" style={{ width: "100%", height: "100%" }} onClick={(e) => handleHobbies(e)} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="headline" maxlength="70" placeholder="Headline" tabindex="4" onChange={(e) => handleProfilePersonalInfo(e)} />
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.headline.length && error) ? "Headline is Required" : (profileData.headline.length < 6 && error) ? "Invalid Headline." : ""}</p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="caste" maxlength="70" placeholder="Caste" tabindex="4" onChange={(e) => handleProfilePersonalInfo(e)} />
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.caste.length && error) ? "Caste is Required" : (profileData.caste.length < 4 && error) ? "Invalid caste." : ""}</p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="occupation" maxlength="70" placeholder="Occupation" tabindex="4" onChange={(e) => handleProfilePersonalInfo(e)} />
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.occupation.length && error) ? "Occupation is Required" : (profileData.occupation.length < 5 && error) ? "Invalid Occupation." : ""}</p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="education" maxlength="70" placeholder="Education" tabindex="4" onChange={(e) => handleProfilePersonalInfo(e)} />
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.education.length && error) ? "education is Required" : ""}</p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="number" name="income" maxlength="70" placeholder="Income" tabindex="4" onChange={(e) => handleProfilePersonalInfo(e)} />
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.income.length && error) ? "income is Required" : ""}</p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="about_me" maxlength="250" placeholder="About me" tabindex="5" onChange={(e) => handleProfilePersonalInfo(e)}></textarea>
                                    <p className="form-text " style={{ color: "red" }}>{(!profileData.about_me.length && error) ? "About Me is Required" : (profileData.about_me.length < 5 && error) ? "Invalid About Me." : ""}</p>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <a><button className="theme-btn btn btn-style-one mt-4 mb-4" type="submit" name="submit" style={{ width: "100%" }}> <span tabindex="11" className="btn-title">Submit  </span></button></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default ProfileUserDetail;