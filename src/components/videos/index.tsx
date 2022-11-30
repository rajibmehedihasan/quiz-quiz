import Video from "./video";
import { Link } from "react-router-dom";

function Videos() {
    return (
        <div className="mx-auto my-12 grid grid-cols-5 gap-5">
            <Link to="/quiz">
                <Video />
            </Link>
        </div>
    );
}

export default Videos;
