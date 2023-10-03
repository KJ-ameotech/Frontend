import { setLocalStorage } from "../../Utils/LocalStorage"
import { COMMUNITIES_FAILURE, COMMUNITIES_REQUEST, COMMUNITIES_SUCCESS, FORGOTPASSWORD_FAILURE, FORGOTPASSWORD_REQUEST, FORGOTPASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RELIGION_FAILURE, RELIGION_REQUEST, RELIGION_SUCCESS } from "../Constants"

let initialState = {
    registrationRequest: "",
    registerLoading: false,
    loginRequest: "",
    loginLoading: false,
    religionData: "",
    religionLoading: false,
    forgetPasswordRes: "",
    forgetPasswordloading: false,
    communitiesData: [],
    communitiesDataloading: false
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
            }
        case REGISTER_SUCCESS:

            return {
                ...state,
                registerLoading: false,
                registrationRequest: action.payload,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registerLoading: false,
                registrationRequest: action.payload,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loginLoading: true,
            }
        case LOGIN_SUCCESS:

            return {
                ...state,
                loginLoading: false,
                loginRequest: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginRequest: action.payload,
            }
        case RELIGION_REQUEST:
            return {
                ...state,
                religionLoading: true,
            }
        case RELIGION_SUCCESS:

            return {
                ...state,
                religionLoading: false,
                religionData: action.payload,
            }
        case RELIGION_FAILURE:
            return {
                ...state,
                religionLoading: false,
                religionData: action.payload,
            }
        case FORGOTPASSWORD_REQUEST:
            return {
                ...state,
                forgetPasswordloading: true,
            }
        case FORGOTPASSWORD_SUCCESS:

            return {
                ...state,
                forgetPasswordloading: false,
                forgetPasswordRes: action.payload,
            }
        case FORGOTPASSWORD_FAILURE:
            return {
                ...state,
                forgetPasswordloading: false,
                forgetPasswordRes: action.payload,
            }
        case COMMUNITIES_REQUEST:
            return {
                ...state,
                communitiesDataloading: true,
            }
        case COMMUNITIES_SUCCESS:
            return {
                ...state,
                communitiesDataloading: false,
                communitiesData: [...action.payload],
            }
        case COMMUNITIES_FAILURE:
            return {
                ...state,
                communitiesDataloading: false,
                communitiesData: action.payload,
            }


        default:
            return state
    }
}
export { AuthReducer }