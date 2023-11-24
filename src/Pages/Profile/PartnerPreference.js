import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLocalStorage } from "../../Utils/LocalStorage";
import {
  addUserPreferences,
  getUserPreferences,
} from "../../Redux/Actions/ProfileActions";

const PartnerPreference = ({ userPreferencesList }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [userPrefId, setUserPrefId] = useState(0);

  const [userPreference, setUserPreferences] = useState({
    min_age: "",
    max_age: "",
    min_height: "",
    max_height: "",
    religion_preference: "",
    caste_preference: "",
    marital_status_preference: "",
    education_preference: "",
    occupation_preference: "",
    country_of_residence: "",
    drinking_habits: "",
    diet: "",
    personal_value: "",
    any_disabblity: "",
    family_value: "",
    prefered_state: "",
    complexion: "",
    with_children_accpetance: "",
    smoking_habits: "",
    body_type: "",
    manglik: "",
    mother_tongue: "",
    prefered_country: "",
    prefered_status: "",
    user: getLocalStorage("user_id"),
  });

  const handleUserPreferences = (e) => {
    const { name, value } = e.target;
    setUserPreferences((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSavePreferences = () => {
    const id = getLocalStorage("user_id");
    const isUpdate = userPrefId > 0 ? true : false;
    console.log("test", userPreference, isUpdate);
    setIsEdit(false);
    dispatch(addUserPreferences(id, userPreference, isUpdate));
    setTimeout(() => {
      dispatch(getUserPreferences(id));
    }, 800);
  };

  useEffect(() => {
    if (userPreferencesList?.length > 0) {
      setUserPreferences(userPreferencesList[0]);
      setUserPrefId(userPreferencesList[0]?.id);
    }
  }, [userPreferencesList]);

  return (
    <div class="information-card my-4 px-4 py-4">
      <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-line">
        <div className="d-flex align-items-center mb-3">
          <span class="mr-3 ifo-bg ">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </span>
          <h4 class="mb-1 heading">Partner Preferences </h4>
        </div>
        <div className="mb-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            Edit Preference
          </button>
        </div>
      </div>
      {isEdit ?
        <div class="row">
        <div class="col-lg-3">
          <div class="info-profile-one">
            <ul>
              <div className="profile-page-input">
                <label>Min-age</label>
                <input type="text" placeholder="Min age"></input>
              </div>
              <div className="profile-page-input">
                <label>Min-height</label>
                <input type="text" placeholder="Min-height"></input>
              </div>
              <div className="profile-page-input">
                <label>Religion_preference</label>
                <input type="text" placeholder="Religion_preference"></input>
              </div>
              <div className="profile-page-input">
                <label>Marital Status</label>
                <input type="text" placeholder="Marital Status"></input>
              </div>
              <div className="profile-page-input">
                <label>Occupation Preference</label>
                <input type="text" placeholder="Occupation Preference"></input>
              </div>
              <div className="profile-page-input">
                <label>Drinking Habits</label>
                <input type="text" placeholder="Drinking Habits"></input>
              </div>
              <div className="profile-page-input">
                <label>Country Of Residence</label>
                <input type="text" placeholder="Country Of Residence"></input>
              </div>
              <div className="profile-page-input">
                <label>Any Disablity</label>
                <input type="text" placeholder="Any Disablity"></input>
              </div>
              <div className="profile-page-input">
                <label>Family Value</label>
                <input type="text" placeholder="Family Value"></input>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="info-profile-one edit-partner-data">
          </div>
        </div>
        <div class="col-lg-2">
          <div class="info-profile-one ">
            <ul>
              <div className="profile-page-input">
                <label>Prefered State</label>
                <input type="text" placeholder="Prefered State"></input>
              </div>
              <div className="profile-page-input">
                <label>Smoking Habits</label>
                <input type="text" placeholder="Smoking Habits"></input>
              </div>
              <div className="profile-page-input">
                <label>Manglik</label>
                <input type="text" placeholder="Manglik"></input>
              </div>
              <div className="profile-page-input">
                <label>Mother Tongue</label>
                <input type="text" placeholder="Mother Tongue"></input>
              </div>
              <div className="profile-page-input">
                <label>Max-age</label>
                <input type="text" placeholder=" Max-age"></input>
              </div>
              <div className="profile-page-input">
                <label>Max-height</label>
                <input type="text" placeholder="Max-height"></input>
              </div>
              <div className="profile-page-input">
                <label>Caste</label>
                <input type="text" placeholder="Caste"></input>
              </div>
              <div className="profile-page-input">
                <label>Education</label>
                <input type="text" placeholder="Education"></input>
              </div>
              <div className="profile-page-input">
                <label>Diet</label>
                <input type="text" placeholder="Diet"></input>
              </div>
            </ul>
          </div>
        </div>
      </div>
      :
      <div class="row">
        <div class="col-lg-3">
          <div class="info-profile-one info-profile-data">
            <ul>
              <div className="profile-page-input">
                <label>Min-age</label>
                <input type="text" disabled value={userPreference?.min_age}></input>
              </div>
              <div className="profile-page-input">
                <label>Min-height</label>
                <input type="text" disabled value={userPreference?.max_age}></input>
              </div>
              <div className="profile-page-input">
                <label>Religion_preference</label>
                <input type="text" disabled value={userPreference?.religion_preference}></input>
              </div>
              <div className="profile-page-input">
                <label>Marital Status</label>
                <input type="text" disabled value={userPreference?.marital_status_preference}></input>
              </div>
              <div className="profile-page-input">
                <label>Occupation Preference</label>
                <input type="text" disabled value={userPreference?.occupation_preference}></input>
              </div>
              <div className="profile-page-input">
                <label>Drinking Habits</label>
                <input type="text" disabled value={userPreference?.drinking_habits}></input>
              </div>
              <div className="profile-page-input">
                <label>Country Of Residence</label>
                <input type="text" disabled value={userPreference?.country_of_residence}></input>
              </div>
              <div className="profile-page-input">
                <label>Any Disablity</label>
                <input type="text" disabled value={userPreference?.any_disabblity}></input>
              </div>
              <div className="profile-page-input">
                <label>Family Value</label>
                <input type="text" disabled value={userPreference?.family_value}></input>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="info-profile-one edit-partner-data">
          </div>
        </div>
        <div class="col-lg-2">
          <div class="info-profile-one info-profile-data">
            <ul>
              <div className="profile-page-input">
                <label>Prefered State</label>
                <input type="text" disabled value={userPreference?.prefered_state}></input>
              </div>
              <div className="profile-page-input">
                <label>Smoking Habits</label>
                <input type="text" disabled value={userPreference?.smoking_habits}></input>
              </div>
              <div className="profile-page-input">
                <label>Manglik</label>
                <input type="text" disabled value={userPreference?.manglik}></input>
              </div>
              <div className="profile-page-input">
                <label>Mother Tongue</label>
                <input type="text" disabled value={userPreference?.min_age}></input>
              </div>
              <div className="profile-page-input">
                <label>Max-age</label>
                <input type="text" disabled value={userPreference?.max_age}></input>
              </div>
              <div className="profile-page-input">
                <label>Max-height</label>
                <input type="text" disabled value={userPreference?.max_height}></input>
              </div>
              <div className="profile-page-input">
                <label>Caste</label>
                <input type="text" disabled value={userPreference?.caste_preference}></input>
              </div>
              <div className="profile-page-input">
                <label>Education</label>
                <input type="text" disabled value={userPreference?.education_preference}></input>
              </div>
              <div className="profile-page-input">
                <label>Diet</label>
                <input type="text" disabled value={userPreference?.diet}></input>
              </div>
            </ul>
          </div>
        </div>
      </div>}
      {isEdit && (
        <div className="text-center my-4">
          <button
            className="btn btn-primary mr-2"
            onClick={handleSavePreferences}
          >
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default PartnerPreference;
