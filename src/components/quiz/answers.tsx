import CheckBox from "./checkbox";

function Answers() {
    return (
        <div className="my-8 grid grid-flow-col grid-rows-[repeat(5,_auto)] gap-2.5">
            <CheckBox text="Checkbox 1" />
            <CheckBox className="wrong" text="Checkbox 2" />
            <CheckBox className="correct" text="Checkbox 3" />
        </div>
    );
}

export default Answers;
