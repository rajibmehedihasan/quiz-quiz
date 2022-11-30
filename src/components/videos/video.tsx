import videoImg from "../../images/3.jpg";

function Video() {
    return (
        <a href="quiz.html">
            <div className="h-fit max-w-[400px] cursor-pointer rounded border border-[#e5e5e5] bg-white p-2.5 pb-4 hover:shadow-[0_0_15px_0_#e5e5e5]">
                <img src={videoImg} alt="Video Image" />
                <p className="my-2 font-medium line-clamp-3">
                    #23 React Hooks Bangla - React useReducer hook Bangla
                </p>
                <div className="flex items-center justify-between text-[15px]">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
}

export default Video;
