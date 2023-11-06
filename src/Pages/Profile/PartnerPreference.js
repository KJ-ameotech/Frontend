import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const PartnerPreference = ({ userPreferencesList }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)

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
        prefered_status: ''
    })

    useEffect(() => {
        console.log("test", userPreferencesList)
        if (userPreferencesList?.length > 0) {
            setUserPreferences(userPreferencesList[0])
        }
    }, [userPreferencesList])
    return (
        <div class="information-card my-4 px-4 py-4">
            <div class="d-flex  mb-4 border-bottom-line">
                <span class="mr-3 mb-2"><i class="fa fa-info-circle" aria-hidden="true"></i>
                </span>
                <h6 class="mb-1">Partner Preferences</h6>
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
                            <li>{userPreference?.min_age}</li>
                            <li>{userPreference?.min_height}</li>
                            <li>{userPreference?.religion_preference}</li>
                            <li>{userPreference?.marital_status_preference}</li>
                            <li>{userPreference?.occupation_preference}</li>
                            <li>{userPreference?.drinking_habits}</li>
                            <li>{userPreference?.country_of_residence}</li>
                            <li>{userPreference?.personal_value}</li>
                            <li>{userPreference?.any_disabblity}</li>
                            <li>{userPreference?.family_value}</li>
                            <li>{userPreference?.prefered_state}</li>
                            <li>{userPreference?.smoking_habits}</li>
                            <li>{userPreference?.manglik}</li>
                            <li>{userPreference?.mother_tongue}</li>
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
                            <li>{userPreference?.max_age}</li>
                            <li>{userPreference?.max_height}</li>
                            <li>{userPreference?.caste_preference}</li>
                            <li>{userPreference?.education_preference}</li>
                            <li>{userPreference?.diet}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerPreference