import Answers from "../quiz/answers";
import MiniPlayer from "../quiz/mini-player";
import ProgressBar from "../quiz/progress-bar";

function Quiz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </>
    );
}

export default Quiz;
