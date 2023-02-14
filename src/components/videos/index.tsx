import Video from "./video";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";

interface iVideo {
    title: string;
    youtubeID: string;
    noq: number;
}

function Videos() {
    const { loading, error, videos } = useVideoList();

    return (
        <div className="mx-auto my-12 grid grid-cols-5 gap-5">
            {videos.map((video: iVideo, index: number) =>
                video.noq ? (
                    <Link to="/quiz" key={index}>
                        <Video video={video} />
                    </Link>
                ) : (
                    <Video video={video} key={index} />
                )
            )}
        </div>
    );
}

export default Videos;
