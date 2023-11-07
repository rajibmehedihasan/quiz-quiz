import resultImg from "../../images/success.png";
import Question from "../quiz/question";

function Result() {
    return (
        <>
            <div className="mx-auto flex w-[80%] justify-between">
                <div className="relative grid w-1/2 place-items-center justify-center">
                    <p className="w-[400px] text-center text-xl font-semibold">
                        Your score is 5 out of 10
                    </p>
                </div>

                <div className="flex h-[300px] items-center justify-center p-4 text-center">
                    <img
                        className="h-full w-full object-cover"
                        src={resultImg}
                        alt="Result Image"
                    />
                </div>
            </div>

            <div className="my-8 mx-auto">
                <h1>Question Analysis</h1>
                <h4>You answerd 5 out of 10 questions correctly</h4>
                <Question />
            </div>
        </>
    );
}

export default Result;
