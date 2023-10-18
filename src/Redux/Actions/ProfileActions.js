import axios from "axios"
import { Api } from "../../Utils/ApiUrl"
import { ACCEPT_FAILURE, ACCEPT_REQUEST, ACCEPT_SUCCESS, ADVANCE_SEARCH_PROFILE_FAILURE, ADVANCE_SEARCH_PROFILE_REQUEST, ADVANCE_SEARCH_PROFILE_SUCCESS, CONTACT_FAILURE, CONTACT_REQUEST, CONTACT_SUCCESS, CREATE_ROOM_FAILURE, CREATE_ROOM_REQUEST, CREATE_ROOM_SUCCESS, FRIEND_LIST_FAILURE, FRIEND_LIST_REQUEST, FRIEND_LIST_SUCCESS, FRIEND_REQUEST_FAILURE, FRIEND_REQUEST_REQUEST, FRIEND_REQUEST_SUCCESS, GET_ALL_PROFILE_FAILURE, GET_ALL_PROFILE_REQUEST, GET_ALL_PROFILE_SUCCESS, GET_PROFILE_IMAGE_FAILURE, GET_PROFILE_IMAGE_REQUEST, GET_PROFILE_IMAGE_SUCCESS, GET_SEARCH_PROFILE_FAILURE, GET_SEARCH_PROFILE_REQUEST, GET_SEARCH_PROFILE_SUCCESS, NOTIFICATION_FAILURE, NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, PROFILE_DATA_UPDATE_FAILURE, PROFILE_DATA_UPDATE_REQUEST, PROFILE_DATA_UPDATE_SUCCESS, PROFILE_FAILURE, PROFILE_IMAGE_UPDATE_FAILURE, PROFILE_IMAGE_UPDATE_REQUEST, PROFILE_IMAGE_UPDATE_SUCCESS, PROFILE_IMAGE_USER_FAILURE, PROFILE_IMAGE_USER_REQUEST, PROFILE_IMAGE_USER_SUCCESS, PROFILE_POST_FAILURE, PROFILE_POST_REQUEST, PROFILE_POST_SUCCESS, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_USER_FAILURE, PROFILE_USER_REQUEST, PROFILE_USER_SUCCESS, STRIPE_PAYMENT_FAILURE, STRIPE_PAYMENT_REQUEST, STRIPE_PAYMENT_SUCCESS, SUBSCRIPTION_FAILURE, SUBSCRIPTION_REQUEST, SUBSCRIPTION_SUCCESS } from "../Constants";
import { header } from "../../Utils/Function"
import { getLocalStorage } from "../../Utils/LocalStorage";

const ProfileRequest = () => ({ type: PROFILE_REQUEST })

const ProfileSuccess = data => ({
    type: PROFILE_SUCCESS,
    payload: data,
}
)

const ProfileFailure = error => ({
    type: PROFILE_FAILURE,
    payload: error,
    error: true,
})
export const getProfile = (id) => {
    return async (dispatch) => {
        dispatch(ProfileRequest())
        axios.get(Api.profile(id))
            .then((response) => {
                dispatch(ProfileSuccess(response.data))
            })
            .catch((error) => {
                dispatch(ProfileFailure(error))
            })
    }
}


const ProfilePostRequest = () => ({ type: PROFILE_POST_REQUEST })

const ProfilePostSuccess = data => ({
    type: PROFILE_POST_SUCCESS,
    payload: data,
}
)

const ProfilePostFailure = error => ({
    type: PROFILE_POST_FAILURE,
    payload: error,
    error: true,
})
export const ProfilePost = (data) => {
    return async (dispatch) => {
        dispatch(ProfilePostRequest())
        axios(Api.profilePost, header("POST", data))
            .then((response) => {
                dispatch(ProfilePostSuccess(response.data))
            })
            .catch((error) => {
                dispatch(ProfilePostFailure(error))
            })
    }
}


const userRequest = () => ({ type: PROFILE_USER_REQUEST })

const userSuccess = data => ({
    type: PROFILE_USER_SUCCESS,
    payload: data,
}
)

const userFailure = error => ({
    type: PROFILE_USER_FAILURE,
    payload: error,
    error: true,
})
export const getuser = (id) => {
    return async (dispatch) => {
        dispatch(userRequest())
        axios.get(Api.user(id))
            .then((response) => {
                dispatch(userSuccess(response.data))
            })
            .catch((error) => {
                dispatch(userFailure(error))
            })
    }
}




const profileImageRequest = () => ({ type: PROFILE_IMAGE_USER_REQUEST })

const profileImageSuccess = data => ({
    type: PROFILE_IMAGE_USER_SUCCESS,
    payload: data,
}
)

const profileImageFailure = error => ({
    type: PROFILE_IMAGE_USER_FAILURE,
    payload: error,
    error: true,
})
export const uploadProfileImage = (image) => {
    return async (dispatch) => {
        dispatch(profileImageRequest())
        const formData = new FormData();
        formData.append('image', image);
        formData.append("user", getLocalStorage("user_id"))
        const requestOptions = {
            method: 'POST',
            data: formData, // Use 'data' to send the FormData
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct content type
            },
        };
        axios.post(Api.profileImage, formData, requestOptions)
            .then((response) => {
                dispatch(profileImageSuccess(response.data))
            })
            .catch((error) => {
                dispatch(profileImageFailure(error))
            })
    }
}



const getProfileRequest = () => ({ type: GET_PROFILE_IMAGE_REQUEST })

const getProfileSuccess = data => ({
    type: GET_PROFILE_IMAGE_SUCCESS,
    payload: data,
}
)

const getProfileFailure = error => ({
    type: GET_PROFILE_IMAGE_FAILURE,
    payload: error,
    error: true,
})
export const getProfileImage = (id) => {
    return async (dispatch) => {
        dispatch(getProfileRequest())
        axios.get(Api.getProfile(id))
            .then((response) => {
                dispatch(getProfileSuccess(response.data))
            })
            .catch((error) => {
                dispatch(getProfileFailure(error))
            })
    }
}




const getAllProfileRequest = () => ({ type: GET_ALL_PROFILE_REQUEST })

const getAllProfileSuccess = data => ({
    type: GET_ALL_PROFILE_SUCCESS,
    payload: data,
}
)

const getAllProfileFailure = error => ({
    type: GET_ALL_PROFILE_FAILURE,
    payload: error,
    error: true,
})
export const getAllProfileUser = () => {
    return async (dispatch) => {
        let id = getLocalStorage("user_id")
        let quary = `?user_id=${id}`;
        dispatch(getAllProfileRequest())
        axios.get(Api.allProfile(quary))
            .then((response) => {
                dispatch(getAllProfileSuccess(response.data))
            })
            .catch((error) => {
                dispatch(getAllProfileFailure(error))
            })
    }
}


const searchProfileRequest = () => ({ type: GET_SEARCH_PROFILE_REQUEST })

const searchProfileSuccess = data => ({
    type: GET_SEARCH_PROFILE_SUCCESS,
    payload: data,
}
)

const searchProfileFailure = error => ({
    type: GET_SEARCH_PROFILE_FAILURE,
    payload: error,
    error: true,
})
export const getSearchProfileUser = (quary) => {
    return async (dispatch) => {
        dispatch(searchProfileRequest())
        axios.get(Api.searchProfile(quary))
            .then((response) => {
                dispatch(searchProfileSuccess(response.data))
            })
            .catch((error) => {
                dispatch(searchProfileFailure(error))
            })
    }
}

const friendRequest = () => ({ type: FRIEND_REQUEST_REQUEST })

const friendRequestSuccess = data => ({
    type: FRIEND_REQUEST_SUCCESS,
    payload: data,
}
)

const friendRequestFailure = error => ({
    type: FRIEND_REQUEST_FAILURE,
    payload: error,
    error: true,
})
export const sendFriendRequest = (linked_id) => {

    return async (dispatch) => {
        const formData = new FormData();
        formData.append('liked_user', linked_id);
        formData.append("user", getLocalStorage("user_id"))
        const requestOptions = {
            method: 'POST',
            data: formData, // Use 'data' to send the FormData
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct content type
            },
        };
        dispatch(friendRequest())
        axios.post(Api.sendFriendRequest, formData, requestOptions)
            .then((response) => {
                dispatch(friendRequestSuccess(response.data))
            })
            .catch((error) => {
                dispatch(friendRequestFailure(error))
            })
    }
}


const notificationRequest = () => ({ type: NOTIFICATION_REQUEST })

const notificationSuccess = data => ({
    type: NOTIFICATION_SUCCESS,
    payload: data,
})

const notificationFailure = error => ({
    type: NOTIFICATION_FAILURE,
    payload: error,
    error: true,
})

export const getAllNotification = (quary) => {
    return async (dispatch) => {
        dispatch(notificationRequest())
        axios.get(Api.allNotification(quary))
            .then((response) => {
                dispatch(notificationSuccess(response.data))
            })
            .catch((error) => {
                dispatch(notificationFailure(error))
            })
    }
}


const acceptFriendRequest = () => ({ type: ACCEPT_REQUEST })

const acceptFriendSuccess = data => ({
    type: ACCEPT_SUCCESS,
    payload: data,
})
const acceptFriendFailure = error => ({
    type: ACCEPT_FAILURE,
    payload: error,
    error: true,
})

export const acceptRequest = (item) => {
    console.log("item", item);
    return async (dispatch) => {
        dispatch(acceptFriendRequest())
        axios.put(Api.acceptFriendReq(item.id), item)
            .then((response) => {
                dispatch(acceptFriendSuccess(response.data))
            })
            .catch((error) => {
                dispatch(acceptFriendFailure(error))
            })
    }
}

const friendListRequest = () => ({ type: FRIEND_LIST_REQUEST })

const friendListSuccess = data => ({
    type: FRIEND_LIST_SUCCESS,
    payload: data,
}
)

const friendListFailure = error => ({
    type: FRIEND_LIST_FAILURE,
    payload: error,
    error: true,
})
export const getFriendList = (id) => {
    return async (dispatch) => {
        dispatch(friendListRequest())
        axios.get(Api.friendList(id))
            .then((response) => {
                dispatch(friendListSuccess(response.data))
            })
            .catch((error) => {
                dispatch(friendListFailure(error))
            })
    }
}

const createRoomRequest = () => ({ type: CREATE_ROOM_REQUEST })

const createRoomSuccess = data => ({
    type: CREATE_ROOM_SUCCESS,
    payload: data,
})

const createRoomFailure = error => ({
    type: CREATE_ROOM_FAILURE,
    payload: error,
    error: true,
})
export const createRoom = (slug) => {
    return async (dispatch) => {
        dispatch(createRoomRequest());

        const formData = new FormData();
        formData.append('name', slug);
        formData.append("slug", slug)

        const requestOptions = {
            method: 'POST',
            data: formData, // Use 'data' to send the FormData
            headers: {
                'Content-Type': 'application/json', // Set the correct content type
            },
        };

        axios.post(Api.createChatRoom, formData, requestOptions)
            .then((response) => {
                dispatch(createRoomSuccess(response.data))
            })
            .catch((error) => {
                dispatch(createRoomFailure(error))
            })
    }
}
const profileImageUpdateRequest = () => ({ type: PROFILE_IMAGE_UPDATE_REQUEST })

const profileImageUpdateSuccess = data => ({
    type: PROFILE_IMAGE_UPDATE_SUCCESS,
    payload: data,
})

const profileImageUpdateFailure = error => ({
    type: PROFILE_IMAGE_UPDATE_FAILURE,
    payload: error,
    error: true,
})

export const updateProfileImage = (id, image) => {
    return async (dispatch) => {
        dispatch(profileImageUpdateRequest())
        const formData = new FormData();
        formData.append('image', image);
        formData.append('user', id)
        try {
            const response = await axios.put(Api.profilePictureUpdate(id), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(profileImageUpdateSuccess(response.data));
        } catch (error) {
            dispatch(profileImageUpdateFailure(error));
        }
    };
}


const profileUpdateRequest = () => ({ type: PROFILE_DATA_UPDATE_REQUEST })

const profileUpdateSuccess = data => ({
    type: PROFILE_DATA_UPDATE_SUCCESS,
    payload: data,
})

const profileUpdateFailure = error => ({
    type: PROFILE_DATA_UPDATE_FAILURE,
    payload: error,
    error: true,
})

export const updateProfileData = (id, editProfileData) => {
    return async (dispatch) => {
        dispatch(profileUpdateRequest())
        const formData = new FormData();
        formData.append('first_name', editProfileData?.name.split(" ")[0])
        formData.append('last_name', editProfileData?.name.split(" ")[1]);
        formData.append('date_of_birth', editProfileData.date_of_birth)
        formData.append('email', editProfileData.email)
        formData.append('gender', editProfileData.gender)
        formData.append('living_in', editProfileData.living_in)
        formData.append('mobile_number', editProfileData.mobile_number)
        formData.append('profile_for', editProfileData.profile_for)
        formData.append('religion', editProfileData.religion)
        formData.append('username', editProfileData.username)
        try {
            const response = await axios.put(Api.profileDataUpdate(id), formData);
            dispatch(profileUpdateSuccess(response.data));
        } catch (error) {
            dispatch(profileUpdateFailure(error));
        }
    };
}

const advanceSearchRequest = () => ({ type: ADVANCE_SEARCH_PROFILE_REQUEST })

const advanceSearchSuccess = data => ({
    type: ADVANCE_SEARCH_PROFILE_SUCCESS,
    payload: data,
}
)

const advanceSearchFailure = error => ({
    type: ADVANCE_SEARCH_PROFILE_FAILURE,
    payload: error,
    error: true,
})
export const advanceSearchh = (quary) => {
    return async (dispatch) => {
        dispatch(advanceSearchRequest())
        axios.get(Api.advanceSearch(quary))
            .then((response) => {
                dispatch(advanceSearchSuccess(response.data))
            })
            .catch((error) => {
                dispatch(advanceSearchFailure(error))
            })
    }
}

const stripePaymentRequest = () => ({ type: STRIPE_PAYMENT_REQUEST })

const stripePaymentSuccess = data => ({
    type: STRIPE_PAYMENT_SUCCESS,
    payload: data,
})

const stripePaymentFailure = error => ({
    type: STRIPE_PAYMENT_FAILURE,
    payload: error,
    error: true,
})
export const stripePayment = (formData) => {
    return async (dispatch) => {
        dispatch(stripePaymentRequest);

        try {
            const response = await axios.post(Api.stripePaymentAPI, formData);
            dispatch(stripePaymentSuccess(response.data));
        } catch (error) {
            dispatch(stripePaymentFailure(error));
        }
    }
}


//Subscription

const subscriptionRequest = () => ({ type: SUBSCRIPTION_REQUEST })

const subscriptionSuccess = data => ({
    type: SUBSCRIPTION_SUCCESS,
    payload: data,
})

const subscriptionFailure = error => ({
    type: SUBSCRIPTION_FAILURE,
    payload: error,
    error: true,
})
export const getsubscription = () => {
    return async (dispatch) => {
        dispatch(subscriptionRequest);
        try {
            const response = await axios.get(Api.getSubscriptionAPI);
            dispatch(subscriptionSuccess(response.data));
        } catch (error) {
            dispatch(subscriptionFailure(error));
        }
    }
}

//Contact

const contactRequest = () => ({ type: CONTACT_REQUEST })

const contactSuccess = data => ({
    type: CONTACT_SUCCESS,
    payload: data,
})

const contactFailure = error => ({
    type: CONTACT_FAILURE,
    payload: error,
    error: true,
})
export const getContact = () => {
    return async (dispatch) => {
        dispatch(contactRequest);
        try {
            const response = await axios.get(Api.getContactAPI);
            dispatch(contactSuccess(response.data));
        } catch (error) {
            dispatch(contactFailure(error));
        }
    }
}

