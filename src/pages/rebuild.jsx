import { ClickButton } from "../components/clickButton";
import { goUrl } from "../components/utils";
import LazyImage from "../components/lazyImage";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "~/global/i18n";
import { useState } from "react";

const Rebuild = (props) => {
    const { t, i18n } = useTranslation();
    const count = [1, 2, 3];
    const characterList = [1, 2, 3, 4];
    const [currentCharacter, setCurrentCharacter] = useState(1)
    const characterData = [
        { header: "Sakura", detail: t("She comes from the distant lands of Aden, being a bounty hunter she is interested in the precious artifacts found in these lands. Sakura has high critical damage as well as instant damage abilities. Her weakness is fighting against water elemental creatures, especially if they have instant damage.") },
        { header: "Rena", detail: t("Rena is a water element character. She's been on these battlefields for what seems like an eternity, but we don't know exactly how long she's been here. Rena is an ancient water element creature with periodic damage and a high crit chance, but she is weak against opponents with the lightning element, especially if that creature has periodic damage.") },
        { header: "Motoko", detail: t("Motoko is a lightning element character. A wanderer who seems to have been everywhere, or nowhere? Has anyone seen him? Rumor has it that all creatures who have ever seen him were defeated by him in an instant. But what we do know is that this character can take a lot of instant damage and deal a lot of crushing damage. He doesn't have a lot of critical damage, but every attack he makes can be his enemy's last. His weakness is fighting against creatures with the wood element, especially if that creature has intermittent damage.") },
        { header: "Hayate", detail: t("Hayate is a wood element character. The huge castle of Altdream, more like a city, was once home to thousands of people. One day, one of the guards discovered the ability to control wooden objects and then the earth. One day, while practicing with the elements, not far from the castle, the knight sent the entire castle underground, destroying everyone in it. He became maddened by his own power and now constantly seeks out creatures to destroy. His strength is periodic damage. His weakness is fighting creatures with the element of fire, especially if those") }
    ]

    return (
        <I18nextProvider i18n={i18next}>
            <div className="relative font-skranji text-white z-0">
                <div className="background-position-center-test w-[1920px] 2xl:w-full">
                    <div className="home-bg-test relative w-[1920px] 2xl:w-full h-[1080px] flex justify-center">
                        <div className="flex flex-col items-center w-[22rem] sm:w-[24rem] md:w-[26rem] lg:w-[26rem] xl:w-[30rem] translate-y-40">
                            <div className="font-oi text-[#FF9B00] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-gradient-shadow-stroke text-center">{t("Play Soon")}</div>
                            <div className="text-center px-16 mt-4 lg:mt-0 mb-12 lg:mb-16 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">{t("The first RPG gacha game on the blockchain")}</div>
                            <ClickButton title={t("GET START")} className="w-60 sm:w-52 lg:w-[60%] h-20" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
                        </div>
                        <div className="absolute bottom-36 xl:bottom-12 w-screen flex justify-between items-end">
                            <LazyImage
                                src="assets/images/characters/character-1.gif"
                                className="w-[55%] sm:w-[40%] sm:h-[40%] -ml-8"
                            />
                            <LazyImage
                                src="assets/images/characters/character-2.gif"
                                className="w-[45%] sm:w-[33%] -ml-8"
                            />
                        </div>

                    </div>
                    <div className="white-bg-test relative w-[1920px] 2xl:w-full h-[3782px] mt-[-24rem] sm:mt-[-21rem] lg:mt-[-20rem] xl:mt-[-15rem] flex flex-col items-center justify-start">
                        <div className="font-oi translate-y-[25rem] text-[#FF9B00] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("How to")}</span>{t(" play")}</div>
                        <div className="translate-y-[28rem] md:translate-y-[30rem] flex flex-col lg:flex-row gap-y-[3.5rem] md:gap-x-4">
                            <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                                    <LazyImage
                                        src="assets/images/playImg1.png"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                                    <div className="text-[22px]">{t("FIGHT")}</div>
                                    <div className="text-center text-[14px] xl:text-[16px]">{t("When fighting, your characters become stronger, the higher your characters level , the more building improvements are available to you.")}</div>
                                </div>
                            </div>
                            <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                                    <LazyImage
                                        src="assets/images/playImg2.png"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                                    <div className="text-[22px]">{t("BUILD")}</div>
                                    <div className="text-center text-[14px] xl:text-[16px]">{t("Upgrade buildings on your land to get resources and income. Wells give water to restore energy to the characters, buildings give resources and income, the wall protects your land.")}</div>
                                </div>
                            </div>
                            <div className="relative w-[350px] sm:w-[330px] xl:w-[420px] h-[200px] sm:h-[230px] xl:h-[300px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                <div className="absolute top-[-3.5rem] sm:top-[-3.5rem] xl:top-[-5rem] w-[55%] sm:w-[66%] flex-center">
                                    <LazyImage
                                        src="assets/images/playImg3.png"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="w-full h-full pt-16 sm:pt-20 xl:pt-24 p-4 xl:px-12 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #ff4d007a, transparent)" }}>
                                    <div className="text-[22px]">{t("EARN")}</div>
                                    <div className="text-center text-[14px] xl:text-[16px]">{t("The higher your characters level, the better buildings are developed, the more you earn. Your income depends only on your achievements in the game.")}</div>
                                </div>
                            </div>
                        </div>
                        <LazyImage
                            src="assets/images/characters/character-5.png"
                            className="absolute left-16 sm:-left-16 md:left-[-9rem] xl:-left-64 top-[40rem] w-full sm:w-[55%]"
                        />
                        <LazyImage
                            src="assets/images/rock3.png"
                            className="absolute right-0 top-[75rem] w-[90%] sm:w-1/2"
                        />
                        <LazyImage
                            src="assets/images/tree.png"
                            className="absolute top-[90rem] w-full"
                        />
                        <div className="absolute top-[101rem] w-[50rem] flex flex-col items-center">
                            <LazyImage
                                src="assets/images/book-test.png"
                                className="w-full"
                            />
                            <ClickButton title={t("WhitePaper")} className="w-1/2 md:w-[24rem] h-20 sm:h-24 md:h-24 uppercase z-10" onClick={() => goUrl('https://cryptoshowdawn.gitbook.io/untitled/')} />
                            <div className="w-[1300px] flex flex-col justify-start items-center mt-[18rem] z-10">
                                <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-center xl:text-left text-gradient-shadow-stroke w-full">{t("Gem")}<br /><span style={{ WebkitTextFillColor: "white" }}>{t("description")}</span></div>
                                <div className="flex flex-col xl:flex-row mt-20 gap-y-20 md:gap-x-6">
                                    <div className="flex flex-col md:flex-row gap-x-6 gap-y-20">
                                        <div className="relative w-[350px] md:w-[310px] h-[270px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                            <div className="absolute -top-10 md:-top-12 w-[19%] md:w-[30%]">
                                                <LazyImage
                                                    src="assets/images/gem-1.png"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #727C007a, transparent)" }}>
                                                <div className="text-[18px] md:text-[22px]">{t("CRITICAL")}</div>
                                                <div className="text-center text-[13px] md:text-[15px]">{t("This gem increases chance of critical attack if equipped on a character.")}</div>
                                                {count.map((number) => (
                                                    <div key={number} className="text-[15px] md:text-[17px] flex justify-between border-b-2 border-white my-2 w-full">
                                                        <div>{t(`${number} LVL GEM GIVE`)}</div>
                                                        <div className="percent-text">+{5 * number}%</div>
                                                    </div>
                                                ))}
                                                <div className="text-[15px] md:text-[18px] flex justify-between my-2 w-full">
                                                    <div className="tracking-[-1px]">{t("INITIAL CRIT CHANCE")}</div>
                                                    <div className="percent-text">+10%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                            <div className="absolute -top-10 md:-top-12 w-[19%] md:w-[30%]">
                                                <LazyImage
                                                    src="assets/images/gem-2.png"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #727C007a, transparent)" }}>
                                                <div className="text-[18px] md:text-[22px]">{t("HP")}</div>
                                                <div className="text-center text-[13px] md:text-[15px]">{t("This gem increases hp if equipped on a character.")}</div>
                                                {count.map((number) => (
                                                    <div key={number} className={`text-[15px] md:text-[17px] flex justify-between ${number === 3 ? "" : "border-b-2"} border-white my-2 w-full`}>
                                                        <div>{t(`${number} LVL GEM GIVE`)}</div>
                                                        <div className="percent-text">+{50 * number} HP</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-x-6 gap-y-20">
                                        <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                            <div className="absolute -top-10 md:-top-12 w-[19%] md:w-[30%]">
                                                <LazyImage
                                                    src="assets/images/gem-3.png"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #727C007a, transparent)" }}>
                                                <div className="text-[18px] md:text-[22px]">{t("ATTACK")}</div>
                                                <div className="text-center text-[13px] md:text-[15px]">{t("This gem increases attack damage if equipped on a character.")}</div>
                                                {count.map((number) => (
                                                    <div key={number} className={`text-[15px] md:text-[17px] flex justify-between ${number === 3 ? "" : "border-b-2"} border-white my-2 w-full`}>
                                                        <div>{t(`${number} LVL GEM GIVE`)}</div>
                                                        <div className="percent-text">+{10 * number}{t(" DAMAGE")}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative w-[350px] md:w-[310px] h-[250px] md:h-[340px] flex flex-col justify-start items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                            <div className="absolute -top-16 md:-top-12 w-[25%] md:w-[30%]">
                                                <LazyImage
                                                    src="assets/images/gem-4.png"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <div className="w-full h-full p-5 pt-10 md:p-4 md:pt-16 flex flex-col justify-start items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #8900637a, transparent)" }}>
                                                <div className="text-[18px] md:text-[22px]">{t("CHEST")}</div>
                                                <div className="text-center text-[13px] md:text-[15px]">{t("Crystals can only be obtained from chests. Crystals drop from chests randomly and have 3 types of rarity")}</div>
                                                <div className="cursor-pointer mt-6 md:mt-[3.5rem] w-[55%] md:w-[65%]">
                                                    <LazyImage
                                                        src="assets/images/test-btn.png"
                                                        className="w-full h-full"
                                                        onClick={() => {
                                                            setShowClaimWindowFlag(true);
                                                            document.body.style.overflowY = "hidden";
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LazyImage
                            src="assets/images/rock6.png"
                            className="absolute right-0 top-[115rem] w-[90%] md:w-[55%] lg:w-[55%] 2xl:w-[50%]"
                        />
                        <LazyImage
                            src="assets/images/characters/character-3.png"
                            className="absolute left-0 mt-12 sm:mt-0 bottom-80 w-[73%] sm:w-[45%] md:w-[35%] lg:w-[27%]"
                        />
                    </div>
                    <div className="gem-bg-test relative w-[1920px] 2xl:w-full h-[1428px] mt-[-40rem] md:hidden">

                    </div>
                    <div className="earn-bg-test relative w-[1920px] 2xl:w-full h-[2404px] mt-[-40rem] flex flex-col items-center justify-start">
                        <div className="main-bg-test absolute w-[1200px] h-[1000px] sm:h-[800px] top-0 flex flex-col-reverse sm:flex-row justify-center items-center">
                            <div className={`relative object-cover ${currentCharacter === 2 ? "w-44 sm:w-48" : "w-56 sm:w-56"} ${currentCharacter === 3 ? "h-72" : "h-80"}  me-0 sm:me-16 z-10`}>
                                {characterList.map((item, index) => (
                                    <LazyImage
                                        src="assets/images/characters/idle/1.gif"
                                        className={`absolute ${currentCharacter === 1 ? "block" : "hidden"} top-0 w-full h-full`}
                                    />
                                ))}
                            </div>
                            <div className={`relative text-bg ${currentCharacter === 3 || currentCharacter === 4 ? "w-[365px] sm:w-[380px] h-[370px] sm:h-[370px]" : ""} w-[280px] sm:w-[300px] h-[320px] sm:h-[350px] ml-0 sm:ml-16 z-10 p-4 sm:p-6 flex justify-center items-center`}>
                                <div className="absolute top-6 text-[25px]">{characterData[currentCharacter - 1].header}</div>
                                <div className="text-center text-[14px] leading-6 mt-6">{characterData[currentCharacter - 1].detail}</div>
                            </div>
                            <div className="absolute bottom-16 flex justify-between z-10">
                                {characterList.map((item, index) => (
                                    <div key={index}>
                                        <LazyImage
                                            src={`assets/images/characters/avatar${item}.png`}
                                            className={`${item !== currentCharacter ? "grayscale" : ""} object-cover w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 mx-2 sm:mx-4 md:mx-6 lg:mx-8 z-10 cursor-pointer`}
                                            onClick={() => setCurrentCharacter(item)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center -mt-20 sm:mt-[20rem] md:mt-[55rem]">
                            <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("How to")}</span>{t(" earn")}</div>
                            <div className="flex flex-col md:flex-row my-32 gap-y-16 sm:gap-y-12 md:gap-x-4 xl:gap-x-12">
                                <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                    <div className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]">
                                        <LazyImage
                                            src="assets/images/helmit.png"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="w-full h-full p-4 flex flex-col justify-end items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #005DB27a, transparent)" }}>
                                        <div className="text-[22px]">{t("CHARACTERS")}</div>
                                        <div className="text-center text-[15px]">{t("Fight in battles for increase your characters level. The higher level your characters have, the better you can improve your land.")}</div>
                                    </div>
                                </div>
                                <div className="relative w-[350px] sm:w-[350px] lg:w-[500px] h-[160px] sm:h-[180px] md:h-[170px] lg:h-[200px] flex flex-col justify-end items-center border-4 border-[#ffffff]/[0.2] rounded-xl backdrop-blur-md">
                                    <div className="absolute -top-16 sm:-top-20 w-[45%] md:w-[50%]">
                                        <LazyImage
                                            src="assets/images/playImg2.png"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="w-full h-full p-4 flex flex-col justify-end items-center rounded-lg" style={{ backgroundImage: "linear-gradient(340deg, #005DB27a, transparent)" }}>
                                        <div className="text-[22px]">{t("LAND")}</div>
                                        <div className="text-center text-[15px]">{t("Improve your land this opens up all the ways for you to progress in the game, the better your land is inproved, the more you earn.")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-0 md:mt-[24rem] lg:mt-[20rem] xl:mt-[35rem] 2xl:mt-[5rem]">
                            <div className="font-oi text-[#FF9B00] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-gradient-shadow-stroke"><span style={{ WebkitTextFillColor: "white" }}>{t("Main")}</span>{t(" team")}</div>
                            <div className="flex flex-col lg:flex-row items-center gap-y-6 my-6 md:gap-x-6 z-10">
                                <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
                                    <div className="absolute w-full h-full -z-10">
                                        <LazyImage
                                            src="assets/images/member/member1.png"
                                            className="w-full h-full -z-10"
                                        />
                                    </div>
                                    <div className="text-[22px] mt-20 xl:mt-24">ILYA GUZNENKOV</div>
                                    <div className="text-[18px]">{t("FOUNDER")}</div>
                                </div>
                                <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
                                    <div className="absolute w-full h-full -z-10">
                                        <LazyImage
                                            src="assets/images/member/member2.png"
                                            className="w-full h-full -z-10"
                                        />
                                    </div>
                                    <div className="text-[22px] mt-20 xl:mt-24">NIKOLAY POPOV</div>
                                    <div className="text-[18px]">{t("CO-FOUNDER")}</div>
                                </div>
                                <div className="relative w-[300px] xl:w-[420px] h-[170px] xl:h-[225px] flex flex-col justify-center items-center">
                                    <div className="absolute w-full h-full -z-10">
                                        <LazyImage
                                            src="assets/images/member/member3.png"
                                            className="w-full h-full -z-10"
                                        />
                                    </div>
                                    <div className="text-[22px] mt-20 xl:mt-24">ANNA RERICH</div>
                                    <div className="text-[18px]">{t("ADMINISTRATOR")}</div>
                                </div>
                            </div>
                            <ClickButton title={t("PLAY")} className=" hidden xl:flex w-[16rem] md:w-[20rem] h-20 sm:h-24 md:h-24 md:text-[30px] lg:text-[35px] xl:text-[40px] z-10 translate-y-0 sm:translate-y-12 lg:translate-y-0 xl:translate-y-24" onClick={() => goUrl("https://play.cryptoshowdown.io/")} />
                        </div>
                        <LazyImage
                            src="assets/images/characters/character-6.png"
                            className="absolute -right-12 lg:-right-20 bottom-0 w-[62%] lg:w-[400px] 2xl:w-[600px] h-[64%] sm:h-[70%] lg:h-[660px] 2xl:h-[1000px] z-20"
                        />
                        <div className="absolute left-12 sm:left-0 bottom-20 flex flex-col sm:flex-row justify-around w-full mb-2 z-30">
                            <div>©SOURCECODE<br />ALL RIGHTS RESERVERD</div>
                            <div className="flex items-center my-8 sm:my-0">
                                <LazyImage
                                    src="assets/images/sms.png"
                                    className="me-2 w-6" />ADM@SOURCE-CODE.WORK
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <LazyImage
                                    src="assets/images/tw.png"
                                    className="cursor-pointer w-10"
                                    onClick={() => goUrl("https://twitter.com/Crypto_Showdown")}
                                />
                                <LazyImage
                                    src="assets/images/tg.png"
                                    className="cursor-pointer w-10"
                                    onClick={() => goUrl("https://t.me/cryptoshowdown")}
                                />
                                <LazyImage
                                    src="assets/images/discord.png"
                                    className="cursor-pointer w-10"
                                    onClick={() => goUrl("https://discord.gg/9FRAyNg9Qh")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </I18nextProvider>
    );
}

export default Rebuild;