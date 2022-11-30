import arrowLeft from "../../images/icons/arrow-left.svg";
import arrowRight from "../../images/icons/arrow-right.svg";
import Button from "../button";
import { Link } from "react-router-dom";

function ProgressBar() {
    return (
        <div className="fixed left-0 right-0 bottom-5 my-0 mx-auto grid h-16 w-[calc(100vw-100px)] grid-cols-[50px_1fr_auto] items-center justify-between gap-5 rounded-lg border border-[#e5e5e5] bg-white">
            <div className="ml-[10px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-lg bg-[#47f5901c] hover:bg-[#47f5953a] lg:h-[40px] lg:w-[40px]">
                <img className="h-6 w-6" src={arrowLeft} alt="arrow left" />
            </div>
            <div className="relative my-0 mx-auto w-full">
                <div className="absolute left-[calc(70%-65px)] top-[-70px] hidden w-[130px] rounded-lg bg-primary-color py-3 px-4 text-xs font-semibold text-white after:absolute after:bottom-0 after:left-1/2 after:h-[15px] after:w-[15px] after:-translate-x-1/2 after:translate-y-1/2 after:rotate-45 after:rounded after:bg-primary-color">
                    24% Cimplete!
                </div>
                <div className="mx-0 my-auto h-1 w-full rounded-[20px] border-none bg-[#e4e8ee] outline-none">
                    <div
                        className="relative h-1 bg-primary-color transition-[width_0.3s_ease] after:absolute after:top-1/2 after:right-0 after:h-3 after:w-3 after:-translate-y-1/2 after:cursor-pointer after:rounded-full after:bg-primary-color"
                        style={{ width: "20%" }}
                    ></div>
                </div>
            </div>

            <Link to="/result">
                <Button className="mr-2.5" btnText="Next Question" btnIcon={arrowRight} />
            </Link>
        </div>
    );
}

export default ProgressBar;
