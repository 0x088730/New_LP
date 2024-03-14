import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../lazyImage";
import { useEffect, useState } from "react";

const HowPlay = (props) => {
    let imagesCount = 6;
    const { t, i18n } = useTranslation();
    const [loadedImages, setLoadedImages] = useState(0);
    useEffect(() => {
        if (loadedImages >= imagesCount) {
            props.setLoaded(true)
        }
    }, [loadedImages]);

    const handleImageLoad = () => {
        setLoadedImages(prevState => prevState + 1);
    };

    return (
        <div className={`relative flex flex-col items-center justify-start w-full ${props.loaded === true ? "h-[1519px]" : "h-0"} mt-[-18rem] sm:mt-[-15rem]`}>
            {/* <div className={`relative flex flex-col items-center justify-start w-full h-[1519px] mt-[-18rem] sm:mt-[-15rem]`}></div> */}
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/howPlay-Dht71eqpuRFBhRXoikRe6dp5wLd0Cu.png"
                onLoad={handleImageLoad}
                className="background-position-center-absolute translate-x-[6%] sm:translate-x-0 w-[1920px] h-[1519px] 2xl:w-full 2xl:h-full"
            />
            <div className="font-oi translate-y-[25rem] text-[#FF9B00] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("How to")}</span>{t(" play")}</div>
            <div className="translate-y-[28rem] md:translate-y-[30rem] flex flex-col lg:flex-row gap-y-[3.5rem] md:gap-x-4">
                <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                    <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                        <LazyImage
                            src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/playImg1-MFd5rdbouKbglkqjrIZtxMKFVMHdaz.png"
                            onLoad={handleImageLoad}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                        <div className="text-[22px]">{t("FIGHT")}</div>
                        <div className="text-center text-[14px] xl:text-[16px]">{t("When fighting, your characters become stronger, the higher your characters level , the more building improvements are available to you.")}</div>
                    </div>
                </div>
                <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                    <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                        <LazyImage
                            src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/playImg2-mLqyhAT8Ridvp3Uvl9Iw1srhm5ipHp.png"
                            onLoad={handleImageLoad}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                        <div className="text-[22px]">{t("BUILD")}</div>
                        <div className="text-center text-[14px] xl:text-[16px]">{t("Upgrade buildings on your land to get resources and income. Wells give water to restore energy to the characters, buildings give resources and income, the wall protects your land.")}</div>
                    </div>
                </div>
                <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                    <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                        <LazyImage
                            src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/playImg3-NyCWc8VqwJHGTZtPDxWLA0s3tZ8gui.png"
                            onLoad={handleImageLoad}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                        <div className="text-[22px]">{t("EARN")}</div>
                        <div className="text-center text-[14px] xl:text-[16px]">{t("The higher your characters level, the better buildings are developed, the more you earn. Your income depends only on your achievements in the game.")}</div>
                    </div>
                </div>
            </div>
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/character/character-5-9y8QjjeRKa8bUH3w0pbFuNIw3TjCIF.png"
                onLoad={handleImageLoad}
                className="absolute left-16 sm:-left-16 md:left-[-9rem] xl:-left-64 -bottom-8 sm:bottom-0 xl:-bottom-24 w-full sm:w-[60%]"
            />
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/rock3-pUVBnvKPr9ruoaSckr02kKRkol0aGo.png"
                onLoad={handleImageLoad}
                className="absolute right-0 -bottom-24 sm:-bottom-20 xl:-bottom-40 w-[90%] sm:w-1/2"
            />
        </div>
    );
}

export default HowPlay;