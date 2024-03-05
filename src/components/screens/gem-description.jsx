import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next";
import Claim from "./claim"

export default function GemDescription({ animation }) {
  let blockRef0 = useRef()
  let blockRef1 = useRef()
  let blockRef2 = useRef()
  let blockRef3 = useRef()
  let blockRef4 = useRef()
  const { t, i18n } = useTranslation();
  const [showClaimWindowFlag, setShowClaimWindowFlag] = useState(false)
  const handleButtonClick = () => {
    setShowClaimWindowFlag(true)
  };

  useEffect(() => {
    if (animation) {

      blockRef0.current.classList.remove("opacity-0")
      blockRef0.current.classList.remove("translate-y-10")

      blockRef1.current.classList.remove("opacity-0")
      blockRef1.current.classList.remove("translate-y-10")

      setTimeout(() => {
        blockRef2.current.classList.remove("opacity-0")
        blockRef2.current.classList.remove("translate-y-10")

      }, 200)
      setTimeout(() => {
        blockRef3.current.classList.remove("opacity-0")
        blockRef3.current.classList.remove("translate-y-10")

      }, 400)
      setTimeout(() => {
        blockRef4.current.classList.remove("opacity-0")
        blockRef4.current.classList.remove("translate-y-10")

      }, 600)
    }
    else {
      blockRef0.current.classList.add("opacity-0")
      blockRef0.current.classList.add("translate-y-10")

      blockRef1.current.classList.add("opacity-0")
      blockRef2.current.classList.add("opacity-0")
      blockRef3.current.classList.add("opacity-0")
      blockRef4.current.classList.add("opacity-0")
      blockRef1.current.classList.add("translate-y-10")
      blockRef2.current.classList.add("translate-y-10")
      blockRef3.current.classList.add("translate-y-10")
      blockRef4.current.classList.add("translate-y-10")
    }
  }, [animation])

  return (
    <div>
      {showClaimWindowFlag && <Claim setShowClaimWindowFlag={setShowClaimWindowFlag} /> }

        <div className={`relative flex items-center w-full h-screen ${showClaimWindowFlag?'hidden':''}`  }>

          <img src="assets/images/gem_bg.gif" alt="" className="absolute object-cover h-full xl:w-full -z-10" />
          <div className="flex-1 h-full pb-10 space-y-12 overflow-y-scroll ">
            <div className="w-3/5 pt-10 mx-auto text-3xl text-center text-white duration-1000 md:text-4xl xl:text-5xl font-animeace md:pt-40" ref={blockRef0}> <span className="text-yellow-500">{t("GEM")}</span> {t("DESCRIPTION")}</div>
            <div className="w-4/5 mx-auto mb-32 space-y-10 duration-300 xl:flex xl:space-y-0 xl:space-x-5">
              <div className="w-full h-auto p-4 duration-500 border border-white cursor-pointer hover:-translate-y-10" ref={blockRef1}>
                <img src="assets/images/gem-1.png" alt="" className="w-16 md:w-32" />
                <div className="h-full px-4 py-8">
                <div className="pt-1 pb-1 pl-1 pr-1 text-lg font-bold md:text-xl text-white bg-blue-600 font-animeace inline-block">{t("CRITICAL")}</div>
                  <div className="py-6 text-sm font-thin text-white font-animeace">
                    {t("THIS GEM INCREASES CHANCE OF CRITICAL ATTACK IF EQUIPPED ON A CHARACTER.")}<br /><br />
                    {t("1 LVL GEM GIVE +5%")}<br />
                    {t("2 LVL GEM GIVE +10%")}<br />
                    {t("3 LVL GEM GIVE +15%")}<br />
                    {t("INITIAL CRIT CHANCE 10%")}
                  </div>

                </div>
              </div>

              <div className="w-full p-4 duration-500 border border-white cursor-pointer hover:-translate-y-10" ref={blockRef2}>
                <img src="assets/images/gem-2.png" alt="" className="w-16 md:w-32"/>
                <div className="h-full px-4 py-8">
                <div className="pt-1 pb-1 pl-1 pr-1 text-lg font-bold md:text-xl text-white bg-blue-600 font-animeace inline-block">{t("HP")}</div>
                  <div className="py-6 text-sm font-thin text-white font-animeace">
                    {t("THIS GEM INCREASES HP IF EQUIPPED ON A CHARACTER.")}<br /><br />
                    {t("1 LVL GEM GIVE +50 HP")}<br />
                    {t("2 LVL GEM GIVE +100 HP")}<br />
                    {t("3 LVL GEM GIVE +150 HP")}<br />
                  </div>

                </div>
              </div>

              <div className="w-full p-4 duration-500 border border-white cursor-pointer hover:-translate-y-10 " ref={blockRef3}>
                <img src="assets/images/gem-3.png" alt="" className="w-16 md:w-32"/>
                <div className="h-full px-4 py-8">
                <div className="pt-1 pb-1 pl-1 pr-1 text-lg font-bold md:text-xl text-white bg-blue-600 font-animeace inline-block">{t("ATTACK")}</div>
                  <div className="py-6 text-sm font-thin text-white font-animeace">
                    {t("THIS GEM INCREASES ATTACK DAMAGE IF EQUIPPED ON A CHARACTER.")}<br /><br />
                    {t("1 LVL GEM GIVE +10 DAMAGE")}<br />
                    {t("2 LVL GEM GIVE +20 DAMAGE")}<br />
                    {t("3 LVL GEM GIVE +30 DAMAGE")}<br />
                  </div>

                </div>
              </div>

              <div className="w-full p-4 duration-500 border border-white cursor-pointer hover:-translate-y-10" ref={blockRef4}>
                <img src="assets/images/gem-4.png" alt="" className="w-16 md:w-32"/>
                <div className="h-full px-4 py-8">
                <div className="pt-1 pb-1 pl-1 pr-1 text-lg font-bold md:text-xl text-white bg-blue-600 font-animeace inline-block">{t("CHEST")}</div>
                  <div className="py-6 text-sm font-thin text-white font-animeace">
                    {t("CRYSTALS CAN ONLY BE OBTAINED FROM CHESTS.")}<br/>
                    {t("CRYSTALS DROP FROM CHESTS RANDOMLY AND HAVE 3 TYPES FO RARITY.")}<br/><br/>
                    <button className="relative mt-12" onClick={handleButtonClick}>
                      <img className="relative w-64 mx-auto" src="assets/images/big-button.png" alt="Button Image" />
                      <span className="absolute top-0 flex items-center justify-center w-full h-full ">{t("TEST")}</span>
                    </button>


                  </div>


                </div>
              </div>
            </div>
          </div>


        </div>
    </div>
  )
}
