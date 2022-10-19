import videoImg from "../../images/3.jpg";

function Video() {
    return (
        <a href="quiz.html">
            <div className="max-w-[400px] h-fit bg-white border border-dark rounded p-2.5 cursor-pointer pb-4 hover:shadow-[0_0_15px_0_#e5e5e5]">
                <img src={videoImg} alt="Video Image" />
                <p className="font-medium my-2 line-clamp-3">
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

// font-size: 16px;
// font-weight: 500;
// margin: 0.5rem 0;
// display: -webkit-box;
// -webkit-box-orient: vertical;
// -webkit-line-clamp: 3;
// overflow: hidden;
