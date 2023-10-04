import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { acceptRequest, getAllNotification } from '../../Redux/Actions/ProfileActions'
import { getLocalStorage } from '../../Utils/LocalStorage'
import './notification.css'
import { BsFillBellFill } from 'react-icons/bs'

const Notification = () => {
    const notificationState = useSelector(state => state.Profile.allNotificationData)
    const [notificationData, setNotificationData] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch()
    const handleAccept = (item) => {
        item.approved = true;
        dispatch(acceptRequest(item))
    }

    const handleClose = () => {
        setIsShown(false)
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
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <BsFillBellFill />
            </div>
            {isShown && (
                <div className='notification-box' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                    {notificationData && notificationData?.map((item) => {
                        return (
                            <>
                                <div>{item.user} wants to be your friend</div>
                                <div>
                                    <button style={{ margin: '5px', padding: '5px', border: 'solid 1px black' }} onClick={() => handleAccept(item)}>Accept</button>
                                    <button style={{ margin: '5px', padding: '5px', border: 'solid 1px black' }} onClick={handleClose}>Close</button>
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