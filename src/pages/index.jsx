import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { counterUser } from "~/common/api";
import i18next from "~/global/i18n";
import Image from 'next/image';
import LazyImage from "~/components/lazyImage";

const Header = React.lazy(() => import('~/components/screens/header'));
const MainPage = React.lazy(() => import('~/components/screens/mainPage'));
const HowPlay = React.lazy(() => import('~/components/screens/howPlay'));
const WhitePaper = React.lazy(() => import('~/components/screens/whitePaper'));
const GemDescription = React.lazy(() => import('~/components/screens/gemDescription'));
const HowEarn = React.lazy(() => import('~/components/screens/howEarn'));
const ContactUs = React.lazy(() => import('~/components/screens/contactUs'));

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
    const newPercent = Math.floor((
      loadedImages1 +
      loadedImages2 +
      loadedImages3 +
      loadedImages4 +
      loadedImages5 +
      loadedImages6
    ) * 100 / 35);
    setPercent(newPercent);
  }, [loadedImages1, loadedImages2, loadedImages3, loadedImages4, loadedImages5, loadedImages6]);

  useEffect(() => {
    document.body.style.overflowY = "hidden"
    i18n.changeLanguage('en');
    counterUser().then(res => {
      if (res.count === false) {
        // alert(res.message);
      }
    });
  }, []);
  useEffect(() => {
    if (percent >= 100)
      document.body.style.overflowY = "auto"
  }, [percent]);

  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <div className={`w-full overflow-hidden Home`}>
          <div className={`${percent >= 100 ? "h-0" : "h-full"} w-full z-30 flex justify-center`}>
            <LazyImage
              src="assets/images/backgrounds/loading.jpg"
              className={`background-position-center w-full min-w-[1600px] h-full`}
            />
            <LazyImage
              src="assets/images/spinner.svg"
              className="absolute bottom-16 w-40"
            />
            <div className="absolute bottom-[6.5rem] font-skranji text-white text-[3rem] font-bold">{percent > 100 ? 100 : percent}%</div>
          </div>
          <div className={`absolute w-full h-24 ${percent >= 100 ? "flex" : "hidden"} z-10 flex justify-center items-center`}>
            <Suspense fallback={<div>...</div>}>
              <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            </Suspense>
          </div>
          <div id="Home" className={`w-full ${percent >= 100 ? "" : "h-0"}`}>
            <div className="relative font-skranji text-white z-0">
              <Suspense fallback={<div></div>}>
                <MainPage
                  loadedImages={loadedImages1}
                  setLoadedImages={setLoadedImages1}
                  loaded={!loading}
                  setLoaded={setLoaded1}
                />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowPlay
                  loadedImages={loadedImages2}
                  setLoadedImages={setLoadedImages2}
                  loaded={!loading}
                  setLoaded={setLoaded2}
                />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <WhitePaper
                  loadedImages={loadedImages3}
                  setLoadedImages={setLoadedImages3}
                  loaded={!loading}
                  setLoaded={setLoaded3}
                />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <GemDescription
                  loadedImages={loadedImages4}
                  setLoadedImages={setLoadedImages4}
                  loaded={!loading}
                  setLoaded={setLoaded4}
                />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowEarn
                  loadedImages={loadedImages5}
                  setLoadedImages={setLoadedImages5}
                  loaded={!loading}
                  setLoaded={setLoaded5}
                />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <ContactUs
                  loadedImages={loadedImages6}
                  setLoadedImages={setLoadedImages6}
                  loaded={!loading}
                  setLoaded={setLoaded6}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
