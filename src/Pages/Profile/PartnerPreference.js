import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getLocalStorage } from '../../Utils/LocalStorage';
import { addUserPreferences, getUserPreferences } from '../../Redux/Actions/ProfileActions';

const PartnerPreference = ({ userPreferencesList }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)
    const [userPrefId, setUserPrefId] = useState(0)

    const [userPreference, setUserPreferences] = useState({
        min_age: '',
        max_age: '',
        min_height: '',
        max_height: '',
        religion_preference: '',
        caste_preference: '',
        marital_status_preference: '',
        education_preference: '',
        occupation_preference: '',
        country_of_residence: '',
        drinking_habits: '',
        diet: '',
        personal_value: '',
        any_disabblity: '',
        family_value: '',
        prefered_state: '',
        complexion: '',
        with_children_accpetance: '',
        smoking_habits: '',
        body_type: '',
        manglik: '',
        mother_tongue: '',
        prefered_country: '',
        prefered_status: '',
        user: getLocalStorage("user_id")
    })

    const handleUserPreferences = (e) => {
        const { name, value } = e.target;
        setUserPreferences((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSavePreferences = () => {
        const id = getLocalStorage("user_id");
        const isUpdate = userPrefId > 0 ? true : false;
        console.log("test", userPreference, isUpdate)
        setIsEdit(false);
        dispatch(addUserPreferences(id, userPreference, isUpdate))
        dispatch(getUserPreferences(id));
    }

    useEffect(() => {
        if (userPreferencesList?.length > 0) {
            setUserPreferences(userPreferencesList[0])
            setUserPrefId(userPreferencesList[0]?.id)
        }
    }, [userPreferencesList])

    return (
        <div class="information-card my-4 px-4 py-4">
            <div class="d-flex mb-4 border-bottom-line">
                <span class="mr-3 mb-2"><i class="fa fa-info-circle" aria-hidden="true"></i>
                </span>
                <h6 class="mb-1">Partner Preferences <button style={{ fontSize: '14px', marginLeft: '5px' }} onClick={() => { setIsEdit(!isEdit) }}>Edit Preference</button></h6>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="info-profile-one">
                        <ul>
                            <li>Min Age</li>
                            <li>Min Height</li>
                            <li>Religion Preference</li>
                            <li>Marital Status</li>
                            <li>Occupation Preference</li>
                            <li>Drinking Habits</li>
                            <li>Country Of Residence</li>
                            <li>Personal Value</li>
                            <li>Any Disabblity</li>
                            <li>Family Value</li>
                            <li>Prefered State</li>
                            <li>Smoking Habits</li>
                            <li>Manglik</li>
                            <li>Mother Tongue</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="info-profile-one">
                        <ul>
                            <li>{isEdit ?
                                <>
                                    <input type="number" name="min_age" placeholder='Enter Min Age' value={userPreference?.min_age} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.min_age}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="number" name="min_height" placeholder='Enter Min Height' value={userPreference?.min_height} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.min_height}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="religion_preference" placeholder='Enter Religion Preference' value={userPreference?.religion_preference} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.religion_preference}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="marital_status_preference" placeholder='Enter Martial Status' value={userPreference?.marital_status_preference} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.marital_status_preference}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="occupation_preference" placeholder='Enter Occupation' value={userPreference?.occupation_preference} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.occupation_preference}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="drinking_habits" placeholder='Enter Drinking Habits' value={userPreference?.drinking_habits} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.drinking_habits}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="country_of_residence" value={userPreference?.country_of_residence} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.country_of_residence}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="personal_value" value={userPreference?.personal_value} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.personal_value}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="any_disabblity" value={userPreference?.any_disabblity} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.any_disabblity}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="family_value" value={userPreference?.family_value} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.family_value}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="prefered_state" value={userPreference?.prefered_state} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.prefered_state}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="smoking_habits" value={userPreference?.smoking_habits} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.smoking_habits}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="manglik" value={userPreference?.manglik} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.manglik}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="mother_tongue" value={userPreference?.mother_tongue} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.mother_tongue}</>}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="info-profile-one">
                        <ul>
                            <li>Max Age</li>
                            <li>Max Height</li>
                            <li>Caste</li>
                            <li>Education</li>
                            <li>Diet</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="info-profile-one">
                        <ul>
                            <li>{isEdit ?
                                <>
                                    <input type="number" name="max_age" value={userPreference?.max_age} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.max_age}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="number" name="max_height" value={userPreference?.max_height} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.max_height}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="caste_preference" value={userPreference?.caste_preference} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.caste_preference}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="education_preference" value={userPreference?.education_preference} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.education_preference}</>}</li>
                            <li>{isEdit ?
                                <>
                                    <input type="text" name="diet" value={userPreference?.diet} onChange={(e) => handleUserPreferences(e)} />
                                </> : <>{userPreference?.diet}</>}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {isEdit && <div className='border border-warning text-center'>
                <button className='mx-2' onClick={handleSavePreferences}>Save</button>
                <button className='mx-2' onClick={() => { setIsEdit(false) }}>Cancel</button>
            </div>}
        </div>
    )
}

export default PartnerPreference