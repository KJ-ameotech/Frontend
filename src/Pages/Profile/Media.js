import React from 'react'
import { useSelector } from 'react-redux'
import { baseUrl } from '../../Utils/ApiUrl'
import AddImages from './AddImages'

const Media = () => {
    const data = useSelector(state => state)
    const { Profile: { userImagesList } } = data
    return (
        <section className="second-section">

            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-8">
                        <div>Add Images
                            <AddImages />
                        </div>
                        <div className="media-content-images">
                            <h3 className="mt-3">All Images</h3>
                            <ul>
                                {userImagesList?.length > 0 && userImagesList?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img className="media-content-img mt-4" src={item?.image ? baseUrl + item?.image :
                                                "/assets/images/background/bg.jpg"} alt="user_image" />
                                        </li>
                                    )
                                })
                                }
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Media