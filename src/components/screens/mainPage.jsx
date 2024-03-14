import { ClickButton } from "../clickButton";
import { goUrl } from "../utils";
import { useTranslation } from "react-i18next";
import LazyImage from "../lazyImage";
import Character1 from "../character/character1";
import { useEffect, useState } from "react";

const MainPage = (props) => {
    let imagesCount = 3;
    const { t, i18n } = useTranslation();
    const [loadedImages, setLoadedImages] = useState(0);
    const [gifLoad, setGifLoad] = useState(0);
    const [gifStatus, setGifStatus] = useState(false);

    useEffect(() => {
        if (loadedImages >= imagesCount) {
            props.setLoaded(true)
        }
    }, [loadedImages]);
    useEffect(() => {
        if (gifLoad >= 2) {
            setGifStatus(true)
        }
    }, [gifLoad]);

    const handleImageLoad = () => {
        setLoadedImages(prevState => prevState + 1);
    };
    const handleGifLoad = () => {
        setGifLoad(prevState => prevState + 1);
    };

    return (
        <div className={`relative overflow-hidden md:w-full ${props.loaded === true ? "h-[750px] xl:h-screen" : "h-0"} flex justify-center`}>
            {/* <div className={`relative overflow-hidden md:w-full h-[750px] xl:h-screen flex justify-center`}> */}
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/home-5TA4eddqon86bEN8VagTWBlrHcdciz.jpg"
                onLoad={handleImageLoad}
                className={`background-position-center-absolute w-[1300px] sm:w-[1920px] 2xl:w-full h-[935px] sm:h-[1270px] 2xl:h-full`}
            />
            <div className="flex flex-col items-center w-[22rem] sm:w-[24rem] md:w-[26rem] lg:w-[26rem] xl:w-[30rem] translate-y-40 z-10">
                <div className="font-oi text-[#FF9B00] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-gradient-shadow-stroke text-center">{t("Play Soon")}</div>
                <div className="text-center px-16 mt-4 lg:mt-0 mb-12 lg:mb-16 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">{t("The first RPG gacha game on the blockchain")}</div>
                <ClickButton title={t("GET START")} className="w-60 sm:w-52 lg:w-[60%] h-20" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
            </div>
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/character/character-1-NNBBHbqHNMYgAmWCZTdHZdfaYH7FgK.png"
                onLoad={handleImageLoad}
                className={`absolute left-0 bottom-[50px] w-[55%] sm:w-[40%] ${gifStatus === false ? "h-[unset]" : "h-0"}`}
            />
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/character-1-CfW928DZTahdIfD1MmQ2oQfbrcwxIq.gif"
                onLoad={handleGifLoad}
                className={`absolute left-0 bottom-[50px] w-[55%] sm:w-[40%] ${gifStatus === false ? "h-0" : "h-[unset]"}`}
            />
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/character/character-2-91owFICdJMrpDiLv98npBPMxUJKG31.png"
                onLoad={handleImageLoad}
                className={`absolute -right-4 bottom-[50px] w-[45%] sm:w-[33%] ${gifStatus === false ? "h-[unset]" : "h-0"}`}
            />
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/character-2-4foCzwU07QLYHpA2lqwR3TzNoivnkS.gif"
                onLoad={handleGifLoad}
                className={`absolute -right-4 bottom-[50px] w-[45%] sm:w-[33%] ${gifStatus === false ? "h-0" : "h-[unset]"}`}
            />
            {/* <Character1 /> */}
        </div >
    );
}

export default MainPage;