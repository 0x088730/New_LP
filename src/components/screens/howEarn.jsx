import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../lazyImage";

const HowEarn = (props) => {
    let imagesCount = 6;
    const { t, i18n } = useTranslation();
    const characterList = [1, 2, 3, 4];
    const [currentCharacter, setCurrentCharacter] = useState(1)
    const characterData = [
        { header: "Sakura", detail: t("She comes from the distant lands of Aden, being a bounty hunter she is interested in the precious artifacts found in these lands. Sakura has high critical damage as well as instant damage abilities. Her weakness is fighting against water elemental creatures, especially if they have instant damage.") },
        { header: "Rena", detail: t("Rena is a water element character. She's been on these battlefields for what seems like an eternity, but we don't know exactly how long she's been here. Rena is an ancient water element creature with periodic damage and a high crit chance, but she is weak against opponents with the lightning element, especially if that creature has periodic damage.") },
        { header: "Motoko", detail: t("Motoko is a lightning element character. A wanderer who seems to have been everywhere, or nowhere? Has anyone seen him? Rumor has it that all creatures who have ever seen him were defeated by him in an instant. But what we do know is that this character can take a lot of instant damage and deal a lot of crushing damage. He doesn't have a lot of critical damage, but every attack he makes can be his enemy's last. His weakness is fighting against creatures with the wood element, especially if that creature has intermittent damage.") },
        { header: "Hayate", detail: t("Hayate is a wood element character. The huge castle of Altdream, more like a city, was once home to thousands of people. One day, one of the guards discovered the ability to control wooden objects and then the earth. One day, while practicing with the elements, not far from the castle, the knight sent the entire castle underground, destroying everyone in it. He became maddened by his own power and now constantly seeks out creatures to destroy. His strength is periodic damage. His weakness is fighting creatures with the element of fire, especially if those") }
    ]

    useEffect(() => {
        if (props.loadedImages >= imagesCount) {
            console.log(props.loadedImages)
            props.setLoaded(true)
        }
    }, [props.loadedImages]);

    const handleImageLoad = () => {
        props.setLoadedImages(prevState => prevState + 1);
    };

    return (
        <div className={`relative md:w-full ${props.loaded === true ? "xl:h-[1710px]" : "h-0"} flex justify-center mt-[64rem] sm:mt-[38rem] md:mt-[47rem] lg:mt-28 xl:mt-[-27rem]`}>
            <LazyImage
                src="assets/images/backgrounds/howEarn.png"
                onLoad={handleImageLoad}
                className="background-position-center-absolute w-[1920px] h-[1710px] 2xl:w-full 2xl:h-full"
            />
            <LazyImage
                src="assets/images/characters/character3.png"
                onLoad={handleImageLoad}
                className="absolute left-0 mt-40 sm:mt-0 top-[-99rem] sm:top-[-65rem] md:top-[-58rem] lg:top-[-22rem] xl:top-[-18rem] w-[66%] sm:w-[45%] md:w-[35%] lg:w-[33%] xl:w-[27%]"
            />
            <div className="main-bg-test absolute w-[1200px] h-[1000px] sm:h-[800px] top-[-70rem] sm:top-[-45rem] md:top-[-38rem] lg:top-[-6rem] xl:-top-16 flex flex-col-reverse sm:flex-row justify-center items-center">
                <div className={`relative object-cover ${currentCharacter === 2 ? "w-44 sm:w-48" : "w-56 sm:w-56"} ${currentCharacter === 3 ? "h-72" : "h-80"}  me-0 sm:me-16 z-10`}>
                    {characterList.map((item, index) => (
                        <div key={index}>
                            <LazyImage
                                src={`assets/images/characters/idle/${item}.gif`}
                                className={`absolute ${currentCharacter === item ? "block" : "hidden"} top-0 w-full h-full`}
                            />
                        </div>
                    ))}
                </div>
                <div className={`relative text-bg ${currentCharacter === 3 || currentCharacter === 4 ? "w-[365px] sm:w-[380px] h-[370px] sm:h-[370px]" : ""} w-[280px] sm:w-[300px] h-[320px] sm:h-[350px] ml-0 sm:ml-16 z-10 p-4 sm:p-6 flex justify-center items-center`}>
                    <div className="absolute top-6 text-[25px]">{characterData[currentCharacter - 1].header}</div>
                    <div className="text-center text-[14px] leading-6 mt-6">{characterData[currentCharacter - 1].detail}</div>
                </div>
                <div className="absolute bottom-16 flex justify-between z-10">
                    {characterList.map((item, index) => (
                        <div key={index}>
                            <LazyImage
                                src={`assets/images/characters/avatar${item}.png`}
                                onLoad={handleImageLoad}
                                className={`${item !== currentCharacter ? "grayscale" : ""} object-cover w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 mx-2 sm:mx-4 md:mx-6 lg:mx-8 z-10 cursor-pointer`}
                                onClick={() => setCurrentCharacter(item)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-start items-center translate-y-0 sm:translate-y-[-33%] md:translate-y-[-22rem] lg:translate-y-8 xl:translate-y-0 -mt-20 sm:mt-[20rem] md:mt-[40rem] md:mb-16 lx:mb-0 lg:mt-[47rem] xl:mt-[50rem]">
                <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("How to")}</span>{t(" earn")}</div>
                <div className="flex flex-col md:flex-row my-16 gap-y-16 sm:gap-y-12 md:gap-x-4 xl:gap-x-12">
                    <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                        <div className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]">
                            <LazyImage
                                src="assets/images/helmit.png"
                                onLoad={handleImageLoad}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-full h-full p-4 flex flex-col justify-end items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #005DB27a, transparent)" }}>
                            <div className="text-[22px]">{t("CHARACTERS")}</div>
                            <div className="text-center text-[15px]">{t("Fight in battles for increase your characters level. The higher level your characters have, the better you can improve your land.")}</div>
                        </div>
                    </div>
                    <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                        <div className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]">
                            <LazyImage
                                src="assets/images/playImg2.png"
                                onLoad={handleImageLoad}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-full h-full p-4 flex flex-col justify-end items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #005DB27a, transparent)" }}>
                            <div className="text-[22px]">{t("LAND")}</div>
                            <div className="text-center text-[15px]">{t("Improve your land this opens up all the ways for you to progress in the game, the better your land is inproved, the more you earn.")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowEarn