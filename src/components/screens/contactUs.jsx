import { useTranslation } from "react-i18next";
import { ClickButton } from "../clickButton";
import { goUrl } from "../utils";
import LazyImage from "../lazyImage";
import { useEffect, useState } from "react";

const ContactUs = (props) => {
    let imagesCount = 9;
    const { t, i18n } = useTranslation();

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
        <div className={`relative md:w-full h-[1100px] sm:h-[1100px] md:h-[1300px] xl:h-[1300px] mt-[-9rem] sm:mt-[-21rem] md:mt-[-28rem] lg:mt-[-32rem] xl:mt-[-50rem] 2xl:mt-[-48rem] flex flex-col justify-start items-center`}>
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/contact-cMWZ0LdqHEmrcDRJ4Kkk45YA7AviG4.png"
                className="background-position-center-absolute w-[1920px] h-[1300px] md:h-[1300px] lg:h-[1300px] 2xl:w-full 2xl:h-full"
            />
            <div className="flex flex-col justify-center items-center mt-64 sm:mt-0 md:mt-[24rem] lg:mt-[20rem] xl:mt-[35rem] 2xl:mt-[20rem] translate-y-[-6rem] sm:translate-y-[8rem] md:translate-y-[-18rem] lg:translate-y-[13rem] xl:translate-y-[-14rem] 2xl:translate-y-0">
                <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("Main")}</span>{t(" team")}</div>
                <div className="flex flex-col lg:flex-row items-center gap-y-6 my-6 md:gap-x-6 z-10">
                    <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
                        <div className="absolute w-full h-full -z-10">
                            <LazyImage
                                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/members/member1-dYLWE6K9eMtducWs3em9nCuXOGg6lu.png"
                                className="w-full h-full -z-10"
                            />
                        </div>
                        <div className="text-[22px] mt-20 xl:mt-24">ILYA GUZNENKOV</div>
                        <div className="text-[18px]">{t("FOUNDER")}</div>
                    </div>
                    <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
                        <div className="absolute w-full h-full -z-10">
                            <LazyImage
                                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/members/member2-lysYPnAbS1SNTUIu5RIUhjeF3YP09w.png"
                                className="w-full h-full -z-10"
                            />
                        </div>
                        <div className="text-[22px] mt-20 xl:mt-24">NIKOLAY POPOV</div>
                        <div className="text-[18px]">{t("CO-FOUNDER")}</div>
                    </div>
                    <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
                        <div className="absolute w-full h-full -z-10">
                            <LazyImage
                                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/members/member3-jdFcGLaK3baBwQz7et78CkpbB8kHwE.png"
                                className="w-full h-full -z-10"
                            />
                        </div>
                        <div className="text-[22px] mt-20 xl:mt-24">ANNA RERICH</div>
                        <div className="text-[18px]">{t("ADMINISTRATOR")}</div>
                    </div>
                </div>
                <ClickButton title={t("PLAY")} className=" hidden xl:flex w-[16rem] md:w-[20rem] h-20 sm:h-24 md:h-24 md:text-[30px] lg:text-[35px] xl:text-[40px] z-10 translate-y-0 sm:translate-y-12 lg:translate-y-0 xl:translate-y-24" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
            </div>
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/character/character-6-vhcKMuJvSMcieOzhB1PtnjC5iAxEn5.png"
                className="absolute -right-12 lg:-right-20 bottom-0 w-[62%] lg:w-[400px] 2xl:w-[600px] h-[64%] sm:h-[70%] lg:h-[660px] 2xl:h-[1000px] z-20"
            />
            <div className="absolute left-12 sm:left-0 bottom-20 flex flex-col sm:flex-row justify-around w-full mb-2 z-30">
                <div>©SOURCECODE<br />ALL RIGHTS RESERVERD</div>
                <div className="flex items-center my-8 sm:my-0">
                    <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/sms-LJXM15DJNsH4YVQcKG4j9K7mHLa2na.png"
                        className="me-2 w-6" />ADM@SOURCE-CODE.WORK
                </div>
                <div className="flex gap-x-4 items-center">
                    <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/tw-mqQsv2bjdytKljsS9ozhLRHgFM1tQB.png"
                        className="cursor-pointer w-10"
                        onClick={() => goUrl("https://twitter.com/Crypto_Showdown")}
                    />
                    <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/tg-7826BkbDTIHjIqbypPhborZ38rvT90.png"
                        className="cursor-pointer w-10"
                        onClick={() => goUrl("https://t.me/cryptoshowdown")}
                    />
                    <LazyImage
                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/discord-WVqr4Tnb05DTTWVIxEDCbHy5E7HLoT.png"
                        className="cursor-pointer w-10"
                        onClick={() => goUrl("https://discord.gg/9FRAyNg9Qh")}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;