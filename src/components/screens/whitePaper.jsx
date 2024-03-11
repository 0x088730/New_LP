import { useTranslation } from "react-i18next";
import { ClickButton } from "../clickButton";
import { goUrl } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../lazyImage";

const WhitePaper = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <div id={t("WhitePaper")} className="relative md:w-full xl:h-[1202px] flex justify-center overflow-visible mt-[22rem] sm:mt-[18rem] lg:mt-[18rem] xl:mt-0">
            <LazyImage
                src="assets/images/backgrounds/whitepaper.jpg"
                onLoad={() => props.handleImageLoad("assets/images/backgrounds/whitepaper.jpg")}
                className="background-position-center-absolute w-[1920px] h-[1200px] 2xl:w-full 2xl:h-full"
            />
            <LazyImage
                src="assets/images/tree1.png"
                onLoad={() => props.handleImageLoad("assets/images/tree1.png")}
                className="absolute left-0 top-[-22.5rem] sm:top-[-20.5rem] md:top-[-20rem] xl:-top-8 w-1/2"
            />
            <LazyImage
                src="assets/images/tree2.png"
                onLoad={() => props.handleImageLoad("assets/images/tree2.png")}
                className="absolute right-0 top-[-23rem] sm:top-[-21.5rem] xl:-top-20 w-[50.4%]"
            />
            <div className="relative w-[70rem] flex flex-col justify-start items-center translate-y-[-15rem] sm:translate-y-[-17rem] xl:translate-y-0">
                <LazyImage
                    src="assets/images/cloud.png"
                    onLoad={() => props.handleImageLoad("assets/images/cloud.png")}
                    className="absolute translate-y-[5rem] xl:translate-y-[5rem] w-[50rem]"
                />
                <LazyImage
                    src="assets/images/white-book.png"
                    onLoad={() => props.handleImageLoad("assets/images/white-book.png")}
                    className="my-32 z-10 translate-y-8 xl:translate-y-12 w-[47rem]"
                />
                <ClickButton title={t("WhitePaper")} className="w-1/2 md:w-[24rem] h-20 sm:h-24 md:h-24 uppercase z-10" onClick={() => goUrl('https://cryptoshowdawn.gitbook.io/untitled/')} />
            </div>
        </div>
    );
}

export default WhitePaper;

