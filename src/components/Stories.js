import { memo } from "react";
import './Stories.css'

const Stories = ({ storiesList }) => {
    console.log("test", storiesList);

    return (
        <>
            <h3 className="mt-4">Success Stories</h3>
            {storiesList?.length > 0 &&
                <>
                    <div>test is done</div>
                </>
            }
        </>
    )
}

export default memo(Stories)