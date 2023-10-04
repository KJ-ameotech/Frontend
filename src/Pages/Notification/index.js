import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { acceptRequest, getAllNotification } from '../../Redux/Actions/ProfileActions'
import { getLocalStorage } from '../../Utils/LocalStorage'
import './notification.css'
import { BsFillBellFill } from 'react-icons/bs'
import { baseUrl } from '../../Utils/ApiUrl'

const Notification = () => {
    const notificationState = useSelector(state => state.Profile.allNotificationData)
    const [notificationData, setNotificationData] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch()
    const handleAccept = (item) => {
        item.approved = true;
        dispatch(acceptRequest(item))
    }

    const handleHover = (e) => {
        if (notificationData?.length > 0) {
            setIsShown(e)
        }
    }

    useEffect(() => {
        if (notificationState) {
            setNotificationData(notificationState)
        }
    }, [notificationState])

    useEffect(() => {
        if (getLocalStorage("access_token") != null) {
            let quary = `?liked_user_id=${getLocalStorage("user_id")}`
            dispatch(getAllNotification(quary))
        }
    }, [])

    return (
        <div>
            <div className='notification'
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}>
                <BsFillBellFill />
            </div>
            {isShown && (
                <div className='notification-box' onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                    {notificationData && notificationData?.map((item) => {
                        return (
                            <>
                                <div className='request-box'>
                                    <img className='notification-img'
                                        src={item?.user_like?.profile_picture_image ?
                                            baseUrl + item?.user_like?.profile_picture_image :
                                            "/assets/images/background/bg.jpg"} alt="" />
                                    <span>{item.user_like?.first_name} {item.user_like?.last_name} wants to be your friend</span>
                                </div>
                                <div class="request-btn-row">
                                    <button class="friend-request accept-request" onClick={() => handleAccept(item)}>Accept</button>
                                    <button class="friend-request decline-request" onClick={() => handleHover(false)}>Decline</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Notification