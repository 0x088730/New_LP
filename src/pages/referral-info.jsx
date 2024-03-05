import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "~/components/screens/header";
import { useRouter } from "next/router";
import { global } from "~/common/global";
import { ClickButton } from "~/components/clickButton";

export default function ReferralInfo() {
  const router = useRouter()
  const { t, i18n } = useTranslation();
  const goAccount = () => {
    router.push('/presale');
    global.pageStatus = "account"
  }

  return (
    <div className="flex justify-center">
      <Header currentMenu="Referral Info" />
      <div className="fixed overflow-y-auto overflow-x-hidden h-full w-full flex justify-center items-center text-white font-skranji text-[16px]">
        <img src="assets/images/htp_bg.jpg" className="background-position-center w-[1920px] h-[1200px] 2xl:w-full 2xl:h-full" />
        <div className="w-[95%] translate-y-[30rem] md:translate-y-12 sm:w-[90%] md:w-[85%] max-w-[1300px] flex flex-col justify-start items-center gap-20 relative">
          <img src="assets/images/infoTitle.png" alt="" className="w-[45%]" />
          <div className="w-full flex flex-col gap-4 mt-12">
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="w-full md:w-[420px] h-[200px] md:h-[330px] lg:h-[300px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md relative flex justify-center items-center">
                <img src="assets/images/infoImg1.png" alt="" className="absolute -top-[5.5rem] md:-top-[7.5rem] w-[300px] md:w-[383px]" />
                <div className="text-center text-[18px] md:text-[24px] px-8 mt-24">Get USDT for invited people who bought a CSC</div>
              </div>
              <div className="mt-32 md:mt-0 px-8 w-full md:w-[860px] h-[490px] md:h-[330px] lg:h-[300px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md relative flex justify-center items-center">
                <img src="assets/images/infoImg2.png" alt="" className="absolute -top-[7.5rem] md:right-12 w-[250px]" />
                <div className="w-full flex flex-col md:flex-row justify-between mt-24 md:mt-0">
                  <div className="flex flex-col justify-between gap-y-1">
                    <div className="text-[#FF9B00] text-[30px]">OUR OFFER:</div>
                    <div>- 5, 10, 15% YOU GET FOR EVERY PURCHASE</div>
                    <div>- BY REFERRING MORE PEOPLE YOU GET MORE MONEY</div>
                    <div>- YOU RECEIVE % FOR EVERY THEY PURCHASE, FOREVER</div>
                    <div>- NO ONE CAN BUY A TOKEN WITHOUR A REFERRAL CODE</div>
                    <div>- STATISTICS ABOUT YOUR REFERRALS AND EARN IN YOUR PROFILE</div>
                  </div>
                  <div className="flex items-end justify-center py-4 lg:py-0">
                    <ClickButton title="Get referral link" className="w-[250px] md:w-[150px] xl:w-[200px] 2xl:w-[250px] h-[70px] text-lg md:text-[1rem] lg:text-lg 2xl:text-xl" onClick={() => goAccount()} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="relative mt-12 md:mt-0 w-full md:w-[640px] h-[80px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                <div className="w-full h-full rounded-lg flex justify-center items-center" style={{ backgroundImage: "linear-gradient(45deg, #e49115 1%, transparent)" }}>
                  <img src="assets/images/skewIcon.png" alt="" className="absolute left-6 -top-5 w-[91px] h-[87px]" />
                  <div className="w-fit">
                    You will get USDT for each referral<br /> who uses your link to purchase csc
                  </div>
                </div>

              </div>
              <div className="mt-12 md:mt-0 w-full md:w-[640px] h-[80px] border-4 border-[#ffffff]/[0.5] rounded-xl backdrop-blur-md">
                <div className="w-full h-full rounded-lg flex justify-start items-center px-8" style={{ backgroundImage: "linear-gradient(45deg, transparent, #e49115)" }}>
                  You can see and claim your referrals<br /> income in the account section.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full mb-12">
            <div>©SOURCECODE<br />ALL RIGHTS RESERVERD</div>
            <div className="flex items-center my-8 sm:my-0"><img src="assets/images/SMS.png" alt="" className="me-2" />ADM@SOURCE-CODE.WORK</div>
            <div className="flex gap-x-4 items-center">
              <img src="assets/images/tw.png" alt="" className="" />
              <img src="assets/images/tg.png" alt="" className="" />
              <img src="assets/images/discord.png" alt="" className="" />
            </div>
          </div>
        </div>

        {/* <Header currentMenu="Referral Info" /> */}
        {/* <img src="assets/images/htp_bg.jpg" className="fixed w-auto h-full brightness-[30%] min-w-[1200px] min-h-[900px]" /> */}
        {/* <div className="w-full h-screen translate-y-28 flex-col flex items-center">
        <div className="flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 min-w-[1024px] gap-x-8">
          <div className="pt-2 text-[44px] text-left text-white font-animeace w-[55%]">
            {t("GET USDT FOR INVITED PEOPLE WHO BOUGHT A ")}<span className="text-[#dcc90a]">CSC</span>
          </div>
          <div className="w-[45%]">
            <img src="assets/images/usdt-box.png" alt="" className="w-[75%] inline me-1" />
          </div>
        </div>
        <div className="flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 min-w-[1024px] gap-x-16">
          <div className="w-[45%]">
            <img src="assets/images/usdts.png" alt="" className="w-[75%] inline me-1" />
          </div>
          <div className="pt-2 text-[44px] text-left text-white font-animeace w-[55%]">
            {t("OUR OFFER")}
            <div className="text-[16px]">
              <div>. 5, 10, 15% YOU GET FOR EVERY PURCHASE</div>
              <div>. BY REFERRING MORE PEOPLE YOU GET MORE MONEY</div>
              <div>. YOU RECEIVE % FOR EVERY THEY PURCHASE, FOREVER</div>
              <div>. NO ONE CAN BUY A TOKEN WITHOUR A REFERRAL CODE</div>
              <div>. STATISTICS ABOUT YOUR REFERRALS AND EARN IN YOUR PROFILE</div>
            </div>
            <div className="text-[20px] bg-[#e7b52d] w-fit px-6 py-1 rounded-full cursor-pointer mt-4" onClick={() => goAccount()}>GET REFERRAL LINK</div>
          </div>
        </div>
        <div className="translate-y-[150px] flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] relative">
          <div className="pt-2 text-[30px] font-lighter text-left text-white font-animeace z-10" style={{ textShadow: "2px 2px 1px black" }}>
            {t("YOU WILL GET USDT FOR EACH REFERRAL WHO USES YOUR LINK TO PURCHASE CSC")}
          </div>
          <img src="assets/images/skewIcon.png" alt="" className="absolute left-[-2rem] inline w-[280px] z-0" />
        </div>
        <div className="translate-y-[350px] flex justify-center items-center w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] relative pb-[10%]">
          <div className="pt-2 text-[30px] font-lighter text-left text-white font-animeace z-10" style={{ textShadow: "2px 2px 1px black" }}>
            {t("YOU CAN SEE AND CLAIM YOUR REFERRALS INCOME IN THE ")}<span className="text-[#1cd3e3] cursor-pointer" onClick={goAccount}>ACCOUNT</span>{t(" SECTION.")}
          </div>
          <img src="assets/images/damagedImg.png" alt="" className="absolute right-0 top-[-120px] inline w-[300px] z-0" />
        </div>
      </div> */}
      </div>
    </div>
  );
}
