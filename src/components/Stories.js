import { memo } from "react";
import './Stories.css'
import { baseUrl } from "../Utils/ApiUrl";

const Stories = ({ storiesList }) => {
    console.log("test", storiesList);

    return (
        <>
            <h3 className="mt-4">Success Stories</h3>
            <div className="story">
                {storiesList?.length > 0 && storiesList?.map((item) => {
                    return (
                        <div className="item mr-4">
                            <div className="card pmd-card">
                                <div className="pmd-card-media">
                                    <img className="story-img img-fluid" src={item?.image ? baseUrl + item.image : "/assets/images/background/bg.jpg"} alt="" />
                                </div>

                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="card-text">{item.content}</p>
                                </div>

                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default memo(Stories)