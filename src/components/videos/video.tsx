import videoImg from "../../images/3.jpg";
import { VideoType } from "../../hooks/useVideoList";

function Video({ title, youtubeID, noq }: VideoType) {
    return (
        <div className="h-fit max-w-[400px] cursor-pointer rounded border border-[#e5e5e5] bg-white p-2.5 pb-4 hover:shadow-[0_0_15px_0_#e5e5e5]">
            <img src={`//img.youtube.com/vi/${youtubeID}/0.jpg`} alt="Video Image" />
            <p className="my-2 font-medium line-clamp-3">{title}</p>
            <div className="flex items-center justify-between text-[15px]">
                <p>{noq} Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    );
}

export default Video;
