import questionIcon from "../../images/icons/question.svg";

function Question() {
    return (
        <div className="my-4 rounded bg-white p-2.5">
            <div className="flex items-center gap-[5px] font-semibold text-primary-color">
                <img src={questionIcon} alt="Question Icon" />
                Here goes the question from Learn with Sumit?
            </div>

            <div className="my-8 grid grid-flow-col grid-rows-[repeat(5,auto)] gap-10">
                <label
                    className="flex h-[58px] w-full cursor-pointer items-center rounded bg-[#e4e8ee] px-[1.1rem] font-medium"
                    htmlFor="option1"
                >
                    A New Hope 1
                </label>
            </div>
        </div>
    );
}

export default Question;
