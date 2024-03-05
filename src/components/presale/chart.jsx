import { global } from "~/common/global";

export default function Chart() {
    return (
        <>
            <div className="chart-bg w-[1020px] h-[540px] me-[13px] flex flex-col items-center mt-8 sm:mt-0">
                <div className="flex flex-col items-center font-bold text-[#ffffff] mt-6 w-full">
                    <img src={`assets/images/priceTitle.png`} alt="" className="w-80" />
                    <div className="text-2xl my-4"><span className="text-[#00ce2d]">0.11$</span> | 25/MARCH/2024</div>
                </div>
                <img src={`assets/images/chart1.png`} alt="" className="hidden sm:block w-[35rem] md:w-[45rem] lg:w-[52rem]" />
                <img src={`assets/images/chart2.png`} alt="" className="block sm:hidden w-[23rem]" />
            </div>
            <img src={`assets/images/characters/character-3.png`} alt="" className="absolute scale-x-[-1] sm:scale-100 bottom-[-15rem] sm:-bottom-6 left-[33rem] sm:left-[-23rem] w-[25rem] sm:w-[28rem]" />
        </>
    )
}