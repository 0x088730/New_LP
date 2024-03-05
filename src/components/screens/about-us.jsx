import { useTranslation } from "react-i18next"
export default function Aboutus() {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative items-center w-full h-3/4">
      <img
        src="assets/images/member/m_bg.jpg"
        alt=""
        className="absolute object-cover w-full h-full -z-10"
      />
      <div className="flex-col h-full overflow-y-scroll space-y-14">
        <div className="pt-16 text-3xl text-center text-white md:text-4xl lg:text-5xl font-animeace md:pt-32">
          {t("MAIN")} <span className="text-yellow-500">{t("TEAM")}</span>
        </div>

        <div className="w-3/5 pb-40 mx-auto space-y-10 text-white lg:flex lg:space-y-0 lg:space-x-5 md:pt-16">
          <div className="duration-300 lg:w-1/3">
            <div className="flex flex-col items-center justify-start w-full space-x-5">
              <img
                src="assets/images/member/1.png"
                alt=""
                className="h-48 duration-500 md:h-64 "
              />
              <div className="mt-2 text-xl text-center md:text-2xl font-animeace">
                ILYA GUZNENKOV
              </div>
              <div
                className="mt-2 text-xl md:text-1xl font-animeace"
                style={{ opacity: 0.5}}
              >
                FOUNDER
              </div>
            </div>
          </div>

          <div className="duration-300 delay-300 lg:w-1/3">
            <div className="flex flex-col items-center justify-start w-full space-x-5">
              <img
                src="assets/images/member/3.png"
                alt=""
                className="h-48 duration-500 md:h-64 "
              />
              <div className="mt-2 text-xl text-center md:text-2xl font-animeace">
                NIKOLAY POPOV
              </div>
              <div
                className="mt-2 text-xl md:text-1xl font-animeace"
                style={{ opacity: 0.5 }}
              >
                CO-FOUNDER
              </div>
            </div>
          </div>

          <div className="duration-300 delay-500 lg:w-1/3 ">
            <div className="flex flex-col items-center justify-start w-full space-x-5">
              <img
                src="assets/images/member/2.png"
                alt=""
                className="h-48 p-2 duration-500 md:h-64 "
              />
              <div className="mt-2 text-xl text-center md:text-2xl font-animeace">
                ANNA RERICH
              </div>
              <div
                className="mt-2 mb-10 text-xl md:text-1xl font-animeace"
                style={{ opacity: 0.5 }}
              >
                ADMINISTRATOR
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
