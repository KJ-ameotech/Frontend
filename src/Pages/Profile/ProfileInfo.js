import React from 'react'
import { calculateAge } from '../../Utils/Function'

const ProfileInfo = ({ profileUserData }) => {
    console.log(calculateAge(null), "profileUserData");

    return (
        <div class="information-card my-4 px-4 py-4">
            <div class="d-flex  mb-4 border-bottom-line">
                <span class="mr-3 mb-2"><i class="fa fa-info-circle" aria-hidden="true"></i>
                </span>
                <h6 class="mb-2">profile</h6>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="info-profile-one">
                        <ul>
                            <li>{profileUserData?.first_name && profileUserData?.last_name && "Name"}</li>
                            <li>{profileUserData.gender && "Gender"}</li>
                            <li>{profileUserData.date_of_birth && "Between age"}</li>
                            <li>{profileUserData?.looking_for && "Looking for"}</li>
                            <li>{profileUserData.marital_status && "Marital Status"}</li>
                            <li>{profileUserData.caste && "Caste"}</li>
                            <li>{profileUserData.community && "Community"}</li>
                            <li>{profileUserData.income && "Income"}</li>
                            <li>{profileUserData.living_in && "Living in"}</li>
                            <li>{profileUserData.height && "Height"}</li>
                            <li>{profileUserData.weight && "Weight"}</li>
                            <li>{profileUserData.education && "Education"}</li>
                        </ul>
                    </div>

                </div>
                <div class="col-lg-8">
                    <div class="info-profile-one">
                        <ul>
                            <li>{profileUserData && profileUserData?.first_name?.charAt(0)?.toUpperCase() + profileUserData?.first_name?.slice(1) + " " + profileUserData?.last_name}</li>
                            <li>{profileUserData.gender}</li>
                            <li>{calculateAge(profileUserData.date_of_birth)}</li>
                            {/* <li>{'girl'}</li> */}
                            <li>{profileUserData.marital_status}</li>
                            <li>{profileUserData.caste}</li>
                            <li>{profileUserData.community}</li>
                            <li>{profileUserData.income}</li>
                            <li>{profileUserData.living_in}</li>
                            <li>{profileUserData.height}</li>
                            <li>{profileUserData.weight}</li>
                            <li>{profileUserData?.education}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo