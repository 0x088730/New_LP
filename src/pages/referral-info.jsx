import { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import Header from "~/components/screens/header";
import { useRouter } from "next/router";
import { global } from "~/common/global";
import { ClickButton } from "~/components/clickButton";
import { goUrl } from "~/components/utils";
import i18next from "~/global/i18n";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ReferralInfo() {
  const router = useRouter()
  const { t, i18n } = useTranslation();
  const goAccount = () => {
    router.push('/presale');
    global.pageStatus = "account"
  }

  return (
    <I18nextProvider i18n={i18next}>
      <div className="flex justify-center">
        <Header currentMenu="Referral Info" />
        <div className="fixed overflow-y-auto overflow-x-hidden h-full w-full flex justify-center items-center text-white font-skranji text-[16px]">
          <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/htp_bg.jpg" className="background-position-center w-[1920px] h-[1200px] 2xl:w-full 2xl:h-full" />
          <div className="w-[95%] translate-y-[30rem] md:translate-y-12 sm:w-[90%] md:w-[85%] max-w-[1300px] flex flex-col justify-start items-center gap-20 relative">
            <div className="font-oi text-[#FF9B00] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[55px] text-gradient-shadow-stroke text-center">{t("Referral")} <span style={{ WebkitTextFillColor: "white" }}>{t(" Info")}</span></div>
            <div className="w-full flex flex-col gap-4 mt-12">
              <div className="flex flex-col md:flex-row w-full gap-4">
                <div className="w-full md:w-[420px] h-[200px] md:h-[330px] lg:h-[300px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md relative flex justify-center items-center">
                  <div className="absolute -top-[5.5rem] md:-top-[7.5rem] w-[300px] md:w-[383px]">
                    <LazyLoadImage effect="black-and-white" draggable="false" width={"100%"} height={"100%"} src="assets/images/infoImg1.png" alt="" className="w-full h-full" />
                  </div>
                  <div className="text-center text-[18px] md:text-[24px] px-8 mt-24">{t("Get USDT for invited people who bought a CSC")}</div>
                </div>
                <div className="mt-32 md:mt-0 px-8 w-full md:w-[860px] h-[490px] md:h-[330px] lg:h-[300px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md relative flex justify-center items-center">
                  <div className="absolute -top-[7.5rem] md:right-12 w-[220px] sm:w-[250px]">
                    <LazyLoadImage effect="black-and-white" draggable="false" width={"100%"} height={"100%"} src="assets/images/infoImg2.png" alt="" className="w-full h-full" />
                  </div>
                  <div className="w-full flex flex-col md:flex-row justify-between mt-24 md:mt-0">
                    <div className="flex flex-col justify-between gap-y-1">
                      <div className="text-[#FF9B00] text-[30px]">{t("OUR OFFER:")}</div>
                      <div>{t("- 5, 10, 15% YOU GET FOR EVERY PURCHASE")}</div>
                      <div>{t("- BY REFERRING MORE PEOPLE YOU GET MORE MONEY")}</div>
                      <div>{t("- YOU RECEIVE % FOR EVERY THEY PURCHASE, FOREVER")}</div>
                      <div>{t("- NO ONE CAN BUY A TOKEN WITHOUR A REFERRAL CODE")}</div>
                      <div>{t("- STATISTICS ABOUT YOUR REFERRALS AND EARN IN YOUR PROFILE")}</div>
                    </div>
                    <div className="flex items-end justify-center py-4 lg:py-0">
                      <ClickButton title={t("Get referral link")} className="w-[250px] md:w-[150px] xl:w-[200px] 2xl:w-[250px] h-[70px] text-lg md:text-[1rem] lg:text-lg 2xl:text-xl" onClick={() => goAccount()} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <div className="relative mt-12 md:mt-0 w-full md:w-[640px] h-[160px] sm:h-[80px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                  <div className="w-full h-full rounded-lg flex justify-center items-end sm:items-center p-3 sm:p-0" style={{ backgroundImage: "linear-gradient(45deg, #e49115 1%, transparent)" }}>
                    <div className="absolute sm:left-6 md:-left-6 lg:left-6 -top-16 sm:-top-5 w-[180px] sm:w-[91px] h-[150px] sm:h-[87px]">
                      <LazyLoadImage effect="black-and-white" draggable="false" width={"100%"} height={"100%"} src="assets/images/skewIcon.png" alt="" className="w-full h-full" />
                    </div>
                    <div className="w-fit sm:pl-0 md:pl-12 lg:pl-28 xl:pl-0">
                      {t("You will get USDT for each referral")}<br /> {t("who uses your link to purchase csc")}
                    </div>
                  </div>
                </div>
                <div className="mt-12 md:mt-0 w-full md:w-[640px] h-[80px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                  <div className="w-full h-full rounded-lg flex justify-start items-center px-8" style={{ backgroundImage: "linear-gradient(45deg, transparent, #e49115)" }}>
                    {t("You can see and claim your referrals")}<br /> {t("income in the account section.")}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full mb-12">
              <div>{t("©SOURCECODE")}<br />{t("ALL RIGHTS RESERVERD")}</div>
              <div className="flex items-center my-8 sm:my-0"><LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/sms.png" alt="" className="me-2" />ADM@SOURCE-CODE.WORK</div>
              <div className="flex gap-x-4 items-center">
                <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/tw.png" alt="" className="cursor-pointer" onClick={() => goUrl("https://twitter.com/Crypto_Showdown")} />
                <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/tg.png" alt="" className="cursor-pointer" onClick={() => goUrl("https://t.me/cryptoshowdown")} />
                <LazyLoadImage effect="black-and-white" draggable="false" src="assets/images/discord.png" alt="" className="cursor-pointer" onClick={() => goUrl("https://discord.gg/9FRAyNg9Qh")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
}
