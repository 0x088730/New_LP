import { useTranslation } from "react-i18next";
import { ClickButton } from "../clickButton";
import { goUrl } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../lazyImage";
import { useEffect, useState } from "react";

const WhitePaper = (props) => {
    let imagesCount = 3;
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
        <div id={t("WhitePaper")} className={`relative md:w-full ${props.loaded === true ? "xl:h-[1202px] mt-[22rem] sm:mt-[17rem] md:mt-[16rem] lg:mt-[16rem] xl:mt-0" : "h-0 mt-0"} flex justify-center overflow-visible`}>
            {/* <div id={t("WhitePaper")} className={`relative md:w-full xl:h-[1202px] mt-[22rem] sm:mt-[17rem] md:mt-[16rem] lg:mt-[16rem] xl:mt-0 flex justify-center overflow-visible`}> */}
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/whitepaper-uUpJEYxK1e2vrNmlaJDWAHfiSlQfOL.jpg"
                onLoad={handleImageLoad}
                className="background-position-center-absolute w-[1920px] h-[1200px] 2xl:w-full 2xl:h-full"
            />
            <LazyImage
                src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/tree-y9ikjBkHjSNOPJIDawjsbpD0xUT3Op.png"
                onLoad={handleImageLoad}
                className="absolute left-0 top-[-29rem] sm:top-[-26rem] md:top-[-23rem] xl:-top-20 w-full h-full sm:h-[40rem] xl:h-[unset]"
            />
            <div className="relative w-[70rem] flex flex-col justify-start items-center translate-y-[-15rem] sm:translate-y-[-17rem] xl:translate-y-0 z-20">
                <LazyImage
                    src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/book-test-8fcrMTaURCFjDFPyYiI9Olf0E6pKmf.png"
                    onLoad={handleImageLoad}
                    className="z-10 translate-y-16 xl:translate-y-12 w-[61rem]"
                />
                <ClickButton title={t("WhitePaper")} className="w-1/2 md:w-[24rem] h-20 sm:h-24 md:h-24 uppercase z-10" onClick={() => goUrl('https://cryptoshowdawn.gitbook.io/untitled/')} />
            </div>
        </div>
    );
}

export default WhitePaper;

