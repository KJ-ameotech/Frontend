import React, { useState } from 'react';
import { getLocalStorage } from '../../Utils/LocalStorage';
import { useDispatch } from 'react-redux';
import { getCustomSearchProfile } from '../../Redux/Actions/ProfileActions';
import { useNavigate } from 'react-router-dom';

const FriendInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [friendList, setFriendList] = useState(
        [
            { image: '/assets/images/1.jpg', name: "Paras Narang", id: "ID-5589364" },
            { image: '/assets/images/1.jpg', name: "Sahil Kumar", id: "ID-6466476" }
        ]);

    const goToProfile = (value) => {
        console.log("click", value)
        let id = getLocalStorage("user_id")
        const quary = `?user_id=${id}&custom_id=${value.id}`
        dispatch(getCustomSearchProfile(quary));
        navigate("/user-profile")
    }

    return (
        <>
            <ul>
                {friendList?.length > 0 && friendList.map((item, index) => {
                    return (
                        <>
                            <li key={index}>
                                <div className="third-image-content d-flex pb-3 pointer" onClick={() => goToProfile(item)}>
                                    <div className="third-image">
                                        <img src={item.image} />
                                    </div>
                                    <div className="third-content">
                                        <h5>{item.name}</h5>
                                        <h6>loreum ipsum</h6>
                                    </div>
                                </div>
                            </li>
                        </>
                    )
                })
                }
            </ul>
        </>
    )
}

export default FriendInfo