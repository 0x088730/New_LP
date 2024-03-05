import { useTranslation } from "react-i18next";

export default function HowToEarn() {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative items-center w-full h-screen">
      <video
        src="assets/videos/hte_bg.mp4"
        className="absolute object-cover w-full h-full z-[-10]"
        autoPlay
        loop
        muted
      />
      <div className="flex-col h-full overflow-y-scroll space-y-14">
        <div className="pt-16 text-3xl text-center text-white md:text-4xl lg:text-5xl font-animeace md:pt-32">
          {t("HOW TO")} <span className="text-yellow-500">{t("EARN")}</span>
        </div>

        <div className="w-4/5 pb-40 mx-auto space-y-10 text-white lg:flex lg:space-y-0 lg:space-x-5 md:pt-16">
          <div className="p-10 duration-300 lg:w-1/2">
            <div className="flex flex-col items-center justify-start w-full space-x-5">
              <img
                src="assets/images/characterBtn.png"
                alt=""
                className="h-48 duration-500 md:h-64 "
              />
              <div className="mt-2 text-lg text-center md:text-2xl font-animeace">
                {t("FIGHT IN BATTLES FOR INCREASE YOUR CHARACTERS LEVEL. THE HIGHER LEVEL YOUR CHARACTERS HAVE, THE BETTER YOU CAN IMPROVE YOUR LAND.")}
              </div>
            </div>
          </div>

          <div className="p-10 duration-300 delay-300 lg:w-1/2">
            <div className="flex flex-col items-center justify-start w-full space-x-5">
              <img
                src="assets/images/landBtn.png"
                alt=""
                className="h-48 duration-500 md:h-64 "
              />
              <div className="mt-2 text-lg text-center md:text-2xl font-animeace">
                {t("IMPROVE YOUR LAND THIS OPENS UP ALL THE WAYS FOR YOU TO PROGRESS IN THE GAME, THE BETTER YOUR LAND IS IMPROVED, THE MORE YOU EARN.")}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
