import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { counterUser } from "~/common/api";
import i18next from "~/global/i18n";

const BattleView = React.lazy(() => import('~/components/screens/battle-view'));
const CharacterView = React.lazy(() => import('~/components/screens/character-view'));
const CharacterViewMD = React.lazy(() => import('~/components/screens/character-view-md'));
const Contact = React.lazy(() => import('~/components/screens/contact'));
const Aboutus = React.lazy(() => import('~/components/screens/about-us'));
const GemDescription = React.lazy(() => import('~/components/screens/gem-description'));
const Header = React.lazy(() => import('~/components/screens/header'));
const HowToEarn = React.lazy(() => import('~/components/screens/how-to-earn'));
const HowToPlay = React.lazy(() => import('~/components/screens/how-to-play'));
const IntroVideo = React.lazy(() => import('~/components/screens/intro-video'));

export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("Home");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
    counterUser().then(res => {
      if (res.count === false) {
        alert(res.message);
      }
    });
  }, []);

  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <div className="w-full overflow-hidden Home">
          <div className="absolute w-full h-24 z-10 flex justify-center items-center">
            <Suspense fallback={<div></div>}>
              <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            </Suspense>
          </div>
          <div id={t("Home")} className="w-full">
            <Suspense fallback={<div></div>}>
              <IntroVideo />
            </Suspense>
          </div>
          {/* Commented out sections causing the error
          <div id={t("How To Play")} className="w-full">
            <Suspense fallback={<div></div>}>
              <HowToPlay animation={htpAnimation} />
            </Suspense>
          </div>
          <div id={t("WhitePaper")} className="w-full">
            <Suspense fallback={<div></div>}>
              <BattleView />
            </Suspense>
          </div>
          <div id={t("Gems")} className="w-full">
            <Suspense fallback={<div></div>}>
              <GemDescription animation={gemAnimation} />
            </Suspense>
          </div>
          <div id={t("Characters")} className="w-full">
            <div className="hidden w-full lg:block">
              <Suspense fallback={<div></div>}>
                <CharacterView />
              </Suspense>
            </div>
            <div className="block w-full lg:hidden">
              <Suspense fallback={<div></div>}>
                <CharacterViewMD />
              </Suspense>
            </div>
          </div>
          <div id={t("How To Earn")} className="w-full">
            <Suspense fallback={<div></div>}>
              <HowToEarn animation={hteAnimation} />
            </Suspense>
          </div>
          <div id={t("About Us")} className="w-full">
            <Suspense fallback={<div></div>}>
              <Aboutus />
            </Suspense>
          </div>
          <div id={t("Contact")} className="w-full">
            <Suspense fallback={<div></div>}>
              <Contact />
            </Suspense>
          </div> */}
        </div>
      </I18nextProvider>
    </div>
  );
}
