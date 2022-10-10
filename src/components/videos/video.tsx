import videoImg from "../../images/3.jpg";

function Video() {
    return (
        <a href="quiz.html">
            <div className="max-w-[400px] h-fit bg-white border border-dark rounded p-2.5 cursor-pointer pb-4">
                <img src={videoImg} alt="Video Image" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className="qmeta">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
}

export default Video;

// max-width: 400px;
//     height: fit-content;
//     background-color: #fff;
//     border: 1px solid #e5e5e5;
//     padding: 10px;
//     border-radius: 4px;
//     cursor: pointer;
//     padding-bottom: 1rem;
