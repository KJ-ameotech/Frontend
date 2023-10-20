import react, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCustomSearchProfile } from '../Redux/Actions/ProfileActions';
import { getLocalStorage } from '../Utils/LocalStorage';

const Search = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isOpened, setIsOpened] = useState(false);
    const id = useId();
    const [input, setInput] = useState('');

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }

    const handleSearchSubmit = (val) => {
        if (val.length > 9) {
            let id = getLocalStorage("user_id")
            const quary = `?user_id=${id}&custom_id=${val}`
            // dispatch(getCustomSearchProfile(quary))
            navigate("/searchprofiles", { state: { searchById: quary } })
        }
    }

    return (
        <>
            <div className="search-box-btn">
                {isOpened && (
                    <input id="text" className='search-text' placeholder='User Id' type="text" onChange={(evt) => { handleSearchSubmit(evt.target.value); }} />
                )}
                <span className="flaticon-search" onClick={toggle}></span>
            </div>
        </>
    )
}

export default Search;