import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { counterUser } from "~/common/api";
import i18next from "~/global/i18n";
import Image from 'next/image';
import LazyImage from "~/components/lazyImage";

// const Header = React.lazy(() => import('~/components/screens/header'));
// const MainPage = React.lazy(() => import('~/components/screens/mainPage'));
// const HowPlay = React.lazy(() => import('~/components/screens/howPlay'));
// const WhitePaper = React.lazy(() => import('~/components/screens/whitePaper'));
// const GemDescription = React.lazy(() => import('~/components/screens/gemDescription'));
// const HowEarn = React.lazy(() => import('~/components/screens/howEarn'));
// const ContactUs = React.lazy(() => import('~/components/screens/contactUs'));
import Header from "~/components/screens/header";
import MainPage from "~/components/screens/mainPage";
import HowPlay from "~/components/screens/howPlay";
import WhitePaper from "~/components/screens/whitePaper";
import GemDescription from "~/components/screens/gemDescription";
import HowEarn from "~/components/screens/howEarn";
import ContactUs from "~/components/screens/contactUs";

export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("Home");
  const { t, i18n } = useTranslation();
  const [loadedImages1, setLoadedImages1] = useState(0);
  const [loadedImages2, setLoadedImages2] = useState(0);
  const [loadedImages3, setLoadedImages3] = useState(0);
  const [loadedImages4, setLoadedImages4] = useState(0);
  const [loadedImages5, setLoadedImages5] = useState(0);
  const [loadedImages6, setLoadedImages6] = useState(0);
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);
  const [loaded5, setLoaded5] = useState(false);
  const [loaded6, setLoaded6] = useState(false);
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loaded1 && loaded2 && loaded3 && loaded4 && loaded5 && loaded6) {
      setLoading(false);
    }
  }, [loaded1, loaded2, loaded3, loaded4, loaded5, loaded6]);

  useEffect(() => {
    setPercent(Math.floor(
      (loadedImages1 + loadedImages2 + loadedImages3 + loadedImages4 + loadedImages5 + loadedImages6)
      * 100 / 35
    ));
  }, [loadedImages1, loadedImages2, loadedImages3, loadedImages4, loadedImages5, loadedImages6]);

  useEffect(() => {
    async function fetchData() {
      try {
        document.body.style.overflowY = "hidden";
        i18n.changeLanguage('en');
        const counterResponse = await counterUser();
        if (counterResponse.count === false) {
          // alert(counterResponse.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (percent >= 100)
      document.body.style.overflowY = "auto"
  }, [percent]);

  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <div className={`w-full overflow-hidden Home`}>
          <div className={`absolute w-full h-24 flex z-10 justify-center items-center`}>
            <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
          </div>
          <div id="Home" className={`w-full`}>
            <div className="relative font-skranji text-white z-0">
              <MainPage/>
              <HowPlay/>
              <WhitePaper />
              <GemDescription/>
              <HowEarn />
              <ContactUs />
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
