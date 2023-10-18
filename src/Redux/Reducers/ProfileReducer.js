import { ACCEPT_FAILURE, ACCEPT_REQUEST, ACCEPT_SUCCESS, ADVANCE_SEARCH_PROFILE_FAILURE, ADVANCE_SEARCH_PROFILE_REQUEST, ADVANCE_SEARCH_PROFILE_SUCCESS, CREATE_ROOM_FAILURE, CREATE_ROOM_REQUEST, CREATE_ROOM_SUCCESS, FRIEND_LIST_FAILURE, FRIEND_LIST_REQUEST, FRIEND_LIST_SUCCESS, FRIEND_REQUEST_FAILURE, FRIEND_REQUEST_REQUEST, FRIEND_REQUEST_SUCCESS, GET_ALL_PROFILE_FAILURE, GET_ALL_PROFILE_REQUEST, GET_ALL_PROFILE_SUCCESS, GET_PROFILE_IMAGE_FAILURE, GET_PROFILE_IMAGE_REQUEST, GET_PROFILE_IMAGE_SUCCESS, GET_SEARCH_PROFILE_FAILURE, GET_SEARCH_PROFILE_REQUEST, GET_SEARCH_PROFILE_SUCCESS, NOTIFICATION_FAILURE, NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, PROFILE_DATA_UPDATE_FAILURE, PROFILE_DATA_UPDATE_REQUEST, PROFILE_DATA_UPDATE_SUCCESS, PROFILE_FAILURE, PROFILE_IMAGE_UPDATE_FAILURE, PROFILE_IMAGE_UPDATE_REQUEST, PROFILE_IMAGE_UPDATE_SUCCESS, PROFILE_IMAGE_USER_FAILURE, PROFILE_IMAGE_USER_REQUEST, PROFILE_IMAGE_USER_SUCCESS, PROFILE_POST_FAILURE, PROFILE_POST_REQUEST, PROFILE_POST_SUCCESS, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_USER_FAILURE, PROFILE_USER_REQUEST, PROFILE_USER_SUCCESS, STRIPE_PAYMENT_FAILURE, STRIPE_PAYMENT_REQUEST, STRIPE_PAYMENT_SUCCESS, SUBSCRIPTION_FAILURE, SUBSCRIPTION_REQUEST, SUBSCRIPTION_SUCCESS } from "../Constants"
let initialState = {
    profileData: null,
    profileLoading: false,
    postProfileData: "",
    profilePostDataLoading: false,
    userData: "",
    userLoading: false,
    uploadImageLoading: false,
    uploadImageRes: "",
    profileImage: "",
    profileLoading: false,
    allProfileLoading: false,
    allProfile: null,
    allSearchData: null,
    allSearchLoading: false,
    sendRequestLoading: false,
    sendRequest: null,
    allNotificationData: null,
    notificationLoading: false,
    acceptFriendRequestRes: null,
    acceptFriendLoading: false,
    friendListLoading: false,
    friendList: null,
    chatRoomLoading: false,
    chatRoomList: null,
    profileImageUpdate: "",
    profileImageUpdateLoading: false,
    profileDataUpdateLoading: false,
    advanceSearchLoading: false,
    advanceSearchRes: null,
    stripePaymentLoading: false,
    stripePaymentRes: null,
    subsriptionLoading: false,
    subsriptionRes: null,
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                ...state,
                registerLoading: true,
            }
        case PROFILE_SUCCESS:

            return {
                ...state,
                profileLoading: false,
                profileData: action.payload,
            }
        case PROFILE_FAILURE:
            return {
                ...state,
                profileLoading: false,
                profileData: action.payload,
            }
        case PROFILE_POST_REQUEST:
            return {
                ...state,
                profilePostDataLoading: true,
            }
        case PROFILE_POST_SUCCESS:

            return {
                ...state,
                profilePostDataLoading: false,
                postProfileData: action.payload,
            }
        case PROFILE_POST_FAILURE:
            return {
                ...state,
                profilePostDataLoading: false,
                postProfileData: action.payload,
            }

        case PROFILE_USER_REQUEST:
            return {
                ...state,
                userLoading: true,
            }
        case PROFILE_USER_SUCCESS:

            return {
                ...state,
                userLoading: false,
                userData: action.payload,
            }
        case PROFILE_USER_FAILURE:
            return {
                ...state,
                userLoading: false,
                userData: action.payload,
            }
        case PROFILE_IMAGE_USER_REQUEST:
            return {
                ...state,
                uploadImageLoading: true,
            }
        case PROFILE_IMAGE_USER_SUCCESS:

            return {
                ...state,
                uploadImageLoading: false,
                uploadImageRes: action.payload,
            }
        case PROFILE_IMAGE_USER_FAILURE:
            return {
                ...state,
                uploadImageLoading: false,
                uploadImageRes: action.payload,
            }
        case GET_PROFILE_IMAGE_REQUEST:
            return {
                ...state,
                profileLoading: true,
            }
        case GET_PROFILE_IMAGE_SUCCESS:

            return {
                ...state,
                profileLoading: false,
                profileImage: action.payload,
            }
        case GET_PROFILE_IMAGE_FAILURE:
            return {
                ...state,
                profileLoading: false,
                profileImage: action.payload,
            }
        case GET_ALL_PROFILE_REQUEST:
            return {
                ...state,
                allProfileLoading: true,
            }
        case GET_ALL_PROFILE_SUCCESS:

            return {
                ...state,
                allProfileLoading: false,
                allProfile: action.payload,
            }
        case GET_ALL_PROFILE_FAILURE:
            return {
                ...state,
                allProfileLoading: false,
                allProfile: action.payload,
            }
        case GET_SEARCH_PROFILE_REQUEST:
            return {
                ...state,
                allSearchLoading: true,
            }
        case GET_SEARCH_PROFILE_SUCCESS:

            return {
                ...state,
                allSearchLoading: false,
                allSearchData: action.payload,
            }
        case GET_SEARCH_PROFILE_FAILURE:
            return {
                ...state,
                allSearchLoading: false,
                allSearchData: action.payload,
            }
        case FRIEND_REQUEST_REQUEST:
            return {
                ...state,
                sendRequestLoading: true,
            }
        case FRIEND_REQUEST_SUCCESS:

            return {
                ...state,
                sendRequestLoading: false,
                sendRequest: action.payload,
            }
        case FRIEND_REQUEST_FAILURE:
            return {
                ...state,
                sendRequestLoading: false,
                sendRequest: action.payload,
            }
        case NOTIFICATION_REQUEST:
            return {
                ...state,
                notificationLoading: true,
            }
        case NOTIFICATION_SUCCESS:

            return {
                ...state,
                notificationLoading: false,
                allNotificationData: action.payload,
            }
        case NOTIFICATION_FAILURE:
            return {
                ...state,
                notificationLoading: false,
                allNotificationData: action.payload,
            }
        case ACCEPT_REQUEST:
            return {
                ...state,
                acceptFriendLoading: true,
            }
        case ACCEPT_SUCCESS:

            return {
                ...state,
                acceptFriendLoading: false,
                acceptFriendRequestRes: action.payload,
            }
        case ACCEPT_FAILURE:
            return {
                ...state,
                acceptFriendLoading: false,
                acceptFriendRequestRes: action.payload,
            }
        case FRIEND_LIST_REQUEST:
            return {
                ...state,
                friendListLoading: true,
            }
        case FRIEND_LIST_SUCCESS:

            return {
                ...state,
                friendListLoading: false,
                friendList: action.payload,
            }
        case FRIEND_LIST_FAILURE:
            return {
                ...state,
                friendListLoading: false,
                friendList: action.payload,
            }
        case CREATE_ROOM_REQUEST:
            return {
                ...state,
                chatRoomLoading: true,
            }
        case CREATE_ROOM_SUCCESS:
            return {
                ...state,
                chatRoomLoading: false,
                chatRoomList: action.payload,
            }
        case CREATE_ROOM_FAILURE:
            return {
                ...state,
                chatRoomLoading: false,
                chatRoomList: action.payload,
            }
        case PROFILE_IMAGE_UPDATE_REQUEST:
            return {
                ...state,
                profileImageUpdate: true,
            }
        case PROFILE_IMAGE_UPDATE_SUCCESS:
            return {
                ...state,
                profileImageUpdate: false,
                profileImage: action.payload,
            }
        case PROFILE_IMAGE_UPDATE_FAILURE:
            return {
                ...state,
                profileImageUpdate: false,
                profileImage: action.payload,
            }
        case PROFILE_DATA_UPDATE_REQUEST:
            return {
                ...state,
                profileDataUpdateLoading: true,
            }
        case PROFILE_DATA_UPDATE_SUCCESS:
            return {
                ...state,
                profileDataUpdateLoading: false,
                // profileData: action.payload,
            }
        case PROFILE_DATA_UPDATE_FAILURE:
            return {
                ...state,
                profileDataUpdateLoading: false,
                // profileData: action.payload,
            }
        case ADVANCE_SEARCH_PROFILE_REQUEST:
            return {
                ...state,
                advanceSearchLoading: true,
            }
        case ADVANCE_SEARCH_PROFILE_SUCCESS:
            return {
                ...state,
                advanceSearchLoading: false,
                advanceSearchRes: action.payload?.results,
            }
        case ADVANCE_SEARCH_PROFILE_FAILURE:
            return {
                ...state,
                advanceSearchLoading: false,
                advanceSearchRes: action.payload,
            }
        case STRIPE_PAYMENT_REQUEST:
            return {
                ...state,
                stripePaymentLoading: true,
            }
        case STRIPE_PAYMENT_SUCCESS:
            return {
                ...state,
                stripePaymentLoading: false,
                stripePaymentRes: action.payload,
            }
        case STRIPE_PAYMENT_FAILURE:
            return {
                ...state,
                stripePaymentLoading: false,
                stripePaymentRes: action.payload,
            }


        case SUBSCRIPTION_REQUEST:
            return {
                ...state,
                subsriptionLoading: true,
            }
        case SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                subsriptionLoading: false,
                subsriptionRes: action.payload,
            }
        case SUBSCRIPTION_FAILURE:
            return {
                ...state,
                subsriptionLoading: false,
                subsriptionRes: action.payload,
            }
        default:
            return state
    }
}
export { ProfileReducer }