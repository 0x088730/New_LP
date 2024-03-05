import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

export default function HowToPlay({animation}) {
  const { t, i18n } = useTranslation();
  let blockRef0 = useRef()
  let blockRef1 = useRef()
  let blockRef2 = useRef()
  let blockRef3 = useRef()


  useEffect(()=>{
    if(animation){
      blockRef0.current.classList.remove("opacity-0")
      blockRef1.current.classList.remove("opacity-0")
      blockRef2.current.classList.remove("opacity-0")
      blockRef3.current.classList.remove("opacity-0")
      blockRef0.current.classList.remove("translate-y-10")
      blockRef1.current.classList.remove("translate-y-10")
      blockRef2.current.classList.remove("translate-y-10")
      blockRef3.current.classList.remove("translate-y-10")

    }
    else{
      
      blockRef0.current.classList.add("opacity-0")
      blockRef0.current.classList.add("translate-y-10")
      blockRef1.current.classList.add("opacity-0")
      blockRef2.current.classList.add("opacity-0")
      blockRef3.current.classList.add("opacity-0")
      blockRef1.current.classList.add("translate-y-10")
      blockRef2.current.classList.add("translate-y-10")
      blockRef3.current.classList.add("translate-y-10")

    
    }
  },[animation])
  return (
    <div className="relative howPlay flex items-center w-full h-screen">
      {/* <img src="assets/images/htp_bg.jpg" alt="" className="absolute object-cover w-full h-full -z-10"/> */}
      <div className="flex-col space-y-14 h-full overflow-y-scroll">
        <div className="w-3/5 pt-20 mx-auto text-2xl md:text-4xl text-center text-white duration-1000 lg:text-5xl font-animeace md:pt-40" ref={blockRef0}>
          {t("HOW TO")} <span className="text-yellow-500">{t("PLAY")}</span>
        </div>
        
        <div className="w-3/5 pb-40 mx-auto space-y-10 text-white lg:flex lg:space-y-0 lg:space-x-5">
        <div className="duration-300 lg:w-1/3"  ref={blockRef1}>
            <div className="flex items-center justify-start w-full space-x-5">
              <img src="assets/images/fightbtn.png" alt="" className="h-12 md:h-24 duration-500 "/>
              <div className="bottom-0 flex items-end  text-xl md:text-4xl font-semibold font-animeace">
                {t("FIGHT")}
              </div>
            </div>
            <div className="w-full pt-10 text-sm  font-thin lg:text-2xl font-animeace">
              {t("When fighting, your characters become stronger, the higher your characters level , the more building improvements are available to you.")}
            </div>
          </div>

          <div className="duration-300 delay-300 lg:w-1/3"  ref={blockRef2}>
            <div className="flex items-center justify-start w-full space-x-5">
              <img src="assets/images/buildbtn.png" alt="" className="h-12 md:h-24 duration-500 "/>
              <div className="bottom-0 flex items-end text-xl md:text-4xl font-semibold font-animeace">
                {t("BUILD")}
              </div>
            </div>
            <div className="w-full pt-10 text-sm  font-thin lg:text-2xl font-animeace">
              {t("Upgrade buildings on your land to get resources and income. Wells give water to restore energy to the characters, buildings give resources and income, the wall protects your land.")}
            </div>
          </div>

          <div className="duration-300 delay-500 lg:w-1/3 "  ref={blockRef3}>
            <div className="flex items-center justify-start w-full space-x-5">
              <img src="assets/images/coinbtn.png" alt="" className="h-12 md:h-24 p-2 duration-500 "/>
              <div className="bottom-0 flex items-end  text-xl md:text-4xl font-semibold font-animeace">
                {t("EARN")}
              </div>
            </div>
            <div className="w-full pt-10 text-sm font-thin lg:text-2xl font-animeace">
              {t("The higher your characters level, the better buildings are developed, the more you earn. Your income depends only on your achievements in the game.")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
