export let baseUrl = "http://127.0.0.1:8000";
export let chatBaseUrl = "http://127.0.0.1:8001";
// const socket = io('http://your-server-url');
export const Api = {
    register: `${baseUrl}/register/`,
    login: `${baseUrl}/login/`,
    forgetPassword: `${baseUrl}/forget-password/`,
    religions: `${baseUrl}/religions/`,
    community: (id) => `${baseUrl}/community/${id}/religions/`,
    profile: (id) => `${baseUrl}/profiles/${id}/`,
    profilePost: `${baseUrl}/profiles/`,
    user: (id) => `${baseUrl}/api/user/${id}/`,
    profileImage: `${baseUrl}/profiles_picture/`,
    getProfile: (id) => `${baseUrl}/profiles_picture/${id}`,
    allProfile: `${baseUrl}/profiles/`,
    searchProfile: (quary) => `${baseUrl}/search/${quary}`,
    sendFriendRequest: `${baseUrl}/like/`,
    allNotification: (quary) => `${baseUrl}/api/notification/${quary}`,
    acceptFriendReq: (id) => `${baseUrl}/userlikes/${id}/`,
    // friendList: (id) => `${baseUrl}/followed-users/${id}/`,
    friendList: (id) => `${baseUrl}/liked-users-likes/${id}/`,
    createChatRoom: `${chatBaseUrl}/rooms/`,
}
