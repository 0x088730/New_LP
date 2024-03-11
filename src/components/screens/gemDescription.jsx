import { useTranslation } from "react-i18next";
import Claim from "./claim";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../lazyImage";

const GemDescription = (props) => {
    const { t, i18n } = useTranslation();
    const count = [1, 2, 3];
    const [showClaimWindowFlag, setShowClaimWindowFlag] = useState(false)

    return (
        <>
            <div className="relative md:hidden md:w-full xl:h-[1428px] flex flex-col justify-center items-center mt-[47rem] sm:mt-[43rem] md:mt-[-22rem]">
                <LazyImage
                    src="assets/images/backgrounds/gemdescription.svg"
                    onLoad={() => props.handleImageLoad("assets/images/backgrounds/gemdescription.svg")}
                    className="background-position-center-absolute w-[1920px] h-[1428px] 2xl:w-full 2xl:h-full"
                />
            </div>
            <div className="relative md:w-full xl:h-[1428px] flex flex-col justify-center items-center mt-0 sm:mt-4 md:mt-[12rem] lg:mt-[10rem] xl:mt-[-22rem]">
                <LazyImage
                    src="assets/images/backgrounds/gemdescription.svg"
                    onLoad={() => props.handleImageLoad("assets/images/backgrounds/gemdescription.svg")}
                    className="background-position-center-absolute w-[1920px] h-[1428px] 2xl:w-full 2xl:h-full"
                />
                <LazyImage
                    src="assets/images/characters/character-4.svg"
                    onLoad={() => props.handleImageLoad("assets/images/characters/character-4.svg")}
                    className="absolute -right-8 top-[-55rem] md:top-[-32rem] lg:top-[-35rem] xl:top-[-19rem] w-[85%] sm:w-[65%] md:w-[55%] lg:w-[500px] xl:w-[600px]"
                />
                <LazyImage
                    src="assets/images/rock6.svg"
                    onLoad={() => props.handleImageLoad("assets/images/rock6.svg")}
                    className="absolute right-0 sm:-right-40 top-[-31rem] md:top-[-9rem] lg:top-[-9rem] xl:top-60 w-[90%] md:w-[73%] lg:w-[60%]"
                />
                <LazyImage
                    src="assets/images/rock7.svg"
                    onLoad={() => props.handleImageLoad("assets/images/rock7.svg")}
                    className="absolute -right-40 top-[-6rem] w-[33%] -z-10"
                />
                <div className="w-[1300px] flex flex-col justify-start items-center translate-y-[-27rem] md:translate-y-[-5rem] xl:translate-y-[-20rem]">
                    <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-center xl:text-left text-gradient-shadow-stroke w-full">{t("Gem")}<br /><span style={{ WebkitTextFillColor: "white" }}>{t("description")}</span></div>
                    <div className="flex flex-col xl:flex-row mt-20 gap-y-20 md:gap-x-6">
                        <div className="flex flex-col md:flex-row gap-x-6 gap-y-20">
                            <div className="relative w-[350px] md:w-[310px] h-[270px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute -top-10 md:-top-12 w-[19%] md:w-[30%]">
                                    <LazyImage
                                        src="assets/images/gem-1.svg"
                                        onLoad={() => props.handleImageLoad("assets/images/gem-1.svg")}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #727C007a, transparent)" }}>
                                    <div className="text-[18px] md:text-[22px]">{t("CRITICAL")}</div>
                                    <div className="text-center text-[13px] md:text-[15px]">{t("This gem increases chance of critical attack if equipped on a character.")}</div>
                                    {count.map((number) => (
                                        <div key={number} className="text-[15px] md:text-[17px] flex justify-between border-b-2 border-white my-2 w-full">
                                            <div>{t(`${number} LVL GEM GIVE`)}</div>
                                            <div className="percent-text">+{5 * number}%</div>
                                        </div>
                                    ))}
                                    <div className="text-[15px] md:text-[18px] flex justify-between my-2 w-full">
                                        <div className="tracking-[-1px]">{t("INITIAL CRIT CHANCE")}</div>
                                        <div className="percent-text">+10%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute -top-10 md:-top-12 w-[19%] md:w-[30%]">
                                    <LazyImage
                                        src="assets/images/gem-2.svg"
                                        onLoad={() => props.handleImageLoad("assets/images/gem-2.svg")}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #727C007a, transparent)" }}>
                                    <div className="text-[18px] md:text-[22px]">{t("HP")}</div>
                                    <div className="text-center text-[13px] md:text-[15px]">{t("This gem increases hp if equipped on a character.")}</div>
                                    {count.map((number) => (
                                        <div key={number} className={`text-[15px] md:text-[17px] flex justify-between ${number === 3 ? "" : "border-b-2"} border-white my-2 w-full`}>
                                            <div>{t(`${number} LVL GEM GIVE`)}</div>
                                            <div className="percent-text">+{50 * number} HP</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-6 gap-y-20">
                            <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute -top-10 md:-top-12 w-[19%] md:w-[30%]">
                                    <LazyImage
                                        src="assets/images/gem-3.svg"
                                        onLoad={() => props.handleImageLoad("assets/images/gem-3.svg")}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #727C007a, transparent)" }}>
                                    <div className="text-[18px] md:text-[22px]">{t("ATTACK")}</div>
                                    <div className="text-center text-[13px] md:text-[15px]">{t("This gem increases attack damage if equipped on a character.")}</div>
                                    {count.map((number) => (
                                        <div key={number} className={`text-[15px] md:text-[17px] flex justify-between ${number === 3 ? "" : "border-b-2"} border-white my-2 w-full`}>
                                            <div>{t(`${number} LVL GEM GIVE`)}</div>
                                            <div className="percent-text">+{10 * number}{t(" DAMAGE")}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute -top-16 md:-top-12 w-[25%] md:w-[30%]">
                                    <LazyImage
                                        src="assets/images/gem-4.svg"
                                        onLoad={() => props.handleImageLoad("assets/images/gem-4.svg")}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #8900637a, transparent)" }}>
                                    <div className="text-[18px] md:text-[22px]">{t("CHEST")}</div>
                                    <div className="text-center text-[13px] md:text-[15px]">{t("Crystals can only be obtained from chests. Crystals drop from chests randomly and have 3 types of rarity")}</div>
                                    <div className="cursor-pointer mt-6 md:mt-[3.5rem] w-[55%] md:w-[65%]">
                                        <LazyImage
                                            src="assets/images/test-btn.svg"
                                            onLoad={() => props.handleImageLoad("assets/images/test-btn.svg")}
                                            className="w-full h-full"
                                            onClick={() => {
                                                setShowClaimWindowFlag(true);
                                                document.body.style.overflowY = "hidden";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showClaimWindowFlag && <Claim setShowClaimWindowFlag={setShowClaimWindowFlag} />}
            </div>
        </>
    );
}

export default GemDescription;