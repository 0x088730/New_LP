import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { global } from "~/common/global";
import { goUrl } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Header({ currentMenu, setCurrentMenu }) {
  const [showFlag, setShowFlag] = useState({ menu: false });

  const router = useRouter()
  const { t, i18n } = useTranslation()
  const menuList = [
    t("WhitePaper"),
    t("Presale"),
    t("Referral Info"),
  ];

  const handleMenuClick = (menu) => {
    if (menu === currentMenu) return
    global.pageStatus = "main"
    if (menu === t("Presale")) {
      router.push('/presale')
    }
    else if (menu === t("Referral Info")) {
      router.push('/referral-info')
    }
    else {
      router.push('/')
    }
  };
  const handleLangClick = () => {
    const lang = i18n.language === 'ru' ? 'en' : 'ru';
    const imgElement = document.querySelector('.lang-image');
    if (imgElement) {
      imgElement.src = `assets/images/la_${lang}.png`;
    }
    i18n.changeLanguage(lang);
  }

  return (
    <div className="w-[80%] absolute h-24 z-10 flex items-center justify-center font-skranji text-white">
      <div className="hidden xl:flex items-center justify-between h-full w-[30%]">
        <div className="justify-between hidden h-full w-full lg:text-lg px-30 xl:flex">
          {menuList.map((menu) => {
            return (
              <Link
                key={menu}
                to={menu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`px-4 hover:text-orange-300 text-lg duration-700 h-full flex items-center cursor-pointer 
                             hover:scale-125 border-0 border-b-4 border-transparent text-white`}
                onClick={() => handleMenuClick(menu)}
              >
                {t(menu)}
              </Link>
            );
          })}
        </div>
      </div>
      <LazyLoadImage effect="black-and-white" draggable="false" src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/logo-CmOSU4sZckrxinDYHAlI2AXVyfFUaz.png" alt="" className="cursor-pointer w-[250px] sm:w-[350px] mx-8 lg:mx-32" onClick={() => handleMenuClick("Home")} />

      <div className="items-center hidden h-full space-x-5 xl:flex xl:justify-between w-[30%]">
        <div className="flex gap-x-4">
          <div className="h-1/3">
            <LazyLoadImage effect="black-and-white" draggable="false"
              src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/tg-7826BkbDTIHjIqbypPhborZ38rvT90.png"
              alt=""
              className="object-cover w-full cursor-pointer hover:scale-125 duration-700"
              onClick={() => goUrl('https://t.me/cryptoshowdown')}
            />
          </div>
          <div className="h-1/3">
            <LazyLoadImage effect="black-and-white" draggable="false"
              src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/tw-mqQsv2bjdytKljsS9ozhLRHgFM1tQB.png"
              alt=""
              className="object-cover w-full cursor-pointer hover:scale-125 duration-700"
              onClick={() => goUrl('https://twitter.com/Crypto_Showdown')}
            />
          </div>
          <div className="h-1/3">
            <LazyLoadImage effect="black-and-white" draggable="false"
              src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/discord-WVqr4Tnb05DTTWVIxEDCbHy5E7HLoT.png"
              alt=""
              className="object-cover w-full cursor-pointer hover:scale-125 duration-700"
              onClick={() => goUrl('https://discord.gg/9FRAyNg9Qh ')}
            />
          </div>
        </div>
        <div className="flex space-x-2 text-white cursor-pointer " onClick={handleLangClick}>

          <LazyLoadImage effect="black-and-white" draggable="false" alt='' className="lang-image mx-2" src={`assets/images/la_${i18n.language === 'en' ? 'en' : 'ru'}.png`} />
          {i18n.language === 'en' ? t('En') : t('En')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className="flex items-center justify-center w-32 h-12 rounded-full text-2xl text-white duration-500 cursor-pointer"
          style={{ backgroundImage: "linear-gradient(180deg, #F3DF7D, #FF9B00)" }}
          onClick={() => goUrl('https://play.cryptoshowdown.io/')}>
          {t("Play")}
        </div>
      </div>
      <div className="w-1/2 h-full text-right xl:hidden">
        <button
          onClick={() => setShowFlag({ ...showFlag, menu: !showFlag.menu })}
          className="w-32 h-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={`fixed right-0 w-64 text-center xl:hidden bg-[#8d70ff] text-3xl transition-transform duration-500 transform ${showFlag.menu ? "translate-x-0" : "translate-x-full"}`}
        >
          {showFlag.menu === true &&
            menuList.map((menu) => {
              return (
                <div
                  key={menu}
                  className={`px-4 py-2 cursor-pointer hover:bg-[#3d208e] hover:text-white duration-700 ${currentMenu === menu
                    ? "text-orange-500 " : "text-white"
                    }`}
                >
                  <Link
                    key={menu}
                    to={menu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => handleMenuClick(menu)}
                  >
                    {menu}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
