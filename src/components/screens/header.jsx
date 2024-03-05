import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { global } from "~/common/global";
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
  const goPlay = () => {
    const newPageURL = 'https://play.cryptoshowdown.io/';
    window.open(newPageURL, '_blank');
  }
  const goTelegram = () => {
    const newPageURL = 'https://t.me/cryptoshowdown';
    window.open(newPageURL, '_blank');
  }
  const goDiscord = () => {
    const newPageURL = 'https://discord.gg/9FRAyNg9Qh ';
    window.open(newPageURL, '_blank');
  }
  const goTwitter = () => {
    const newPageURL = 'https://twitter.com/Crypto_Showdown';
    window.open(newPageURL, '_blank');
  }

  return (
    <div className="w-[80%] fixed h-24 z-10 flex items-center justify-center font-skranji text-white">
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
                className={`px-4 hover:bg-[#3d208e] hover:text-orange-300 text-lg duration-700 h-full flex items-center cursor-pointer 
                             hover:scale-105 border-0 border-b-4 border-transparent hover:border-orange-300 text-white`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </Link>
            );
          })}
        </div>
      </div>
      <img src="assets/images/logo.png" alt="" className="cursor-pointer w-[250px] sm:w-[350px] mx-8 lg:mx-32" onClick={() => handleMenuClick("Home")} />

      <div className="items-center hidden h-full space-x-5 xl:flex xl:justify-between w-[30%]">
        <div className="flex gap-x-4">
          <div className="h-1/3">
            <img
              src="assets/images/tg.png"
              alt=""
              className="object-cover w-full cursor-pointer"
              onClick={goTelegram}
            />
          </div>
          <div className="h-1/3">
            <img
              src="assets/images/tw.png"
              alt=""
              className="object-cover w-full cursor-pointer"
              onClick={goTwitter}
            />
          </div>
          <div className="h-1/3">
            <img
              src="assets/images/discord.png"
              alt=""
              className="object-cover w-full cursor-pointer"
              onClick={goDiscord}
            />
          </div>
        </div>
        <div className="flex space-x-2 text-white cursor-pointer " onClick={handleLangClick}>

          <img alt='' className="lang-image" src={`assets/images/la_${i18n.language === 'en' ? 'en' : 'ru'}.png`} />
          <div>
            {t('En')}
          </div>
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
          onClick={goPlay}>
          Play
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
          className={`absolute right-0 w-64 text-center xl:hidden bg-[#8d70ff] text-3xl transition-transform duration-500 transform ${showFlag.menu ? "translate-x-0" : "translate-x-full"}`}
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
