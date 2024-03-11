import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { counterUser } from "~/common/api";
import i18next from "~/global/i18n";
import Image from 'next/image';

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
  const [loading, setLoading] = useState(false);
  const [loadedImages1, setLoadedImages1] = useState(0);
  const [loadedImages2, setLoadedImages2] = useState(0);
  const [loadedImages3, setLoadedImages3] = useState(0);
  const [loadedImages4, setLoadedImages4] = useState(0);
  const [loadedImages5, setLoadedImages5] = useState(0);
  const [loadedImages6, setLoadedImages6] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  const handleImageLoad1 = (src) => {
    setLoadedImages1(prevCount => prevCount + 1);
    console.log("1", loadedImages1, loading, src)
  };
  const handleImageLoad2 = (src) => {
    setLoadedImages2(prevCount => prevCount + 1);
    console.log("2", loadedImages2, loading, src)
  };
  const handleImageLoad3 = (src) => {
    setLoadedImages3(prevCount => prevCount + 1);
    console.log("3", loadedImages3, loading, src)
  };
  const handleImageLoad4 = (src) => {
    setLoadedImages4(prevCount => prevCount + 1);
    console.log("4", loadedImages4, loading, src)
  };
  const handleImageLoad5 = (src) => {
    setLoadedImages5(prevCount => prevCount + 1);
    console.log("5", loadedImages5, loading, src)
  };
  const handleImageLoad6 = (src) => {
    setLoadedImages6(prevCount => prevCount + 1);
    console.log("6", loadedImages6, loading, src)
  };
  console.log(loadedImages1, loadedImages2, loadedImages3, loadedImages4, loadedImages5, loadedImages6)

  useEffect(() => {
    setLoading(true);
    i18n.changeLanguage('en');
    counterUser().then(res => {
      if (res.count === false) {
        // alert(res.message);
      }
    });
  }, []);

  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <div className={`w-full overflow-hidden Home`}>
          <div className="absolute w-full h-24 z-10 flex justify-center items-center">
            <Suspense fallback={<div>...</div>}>
              <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            </Suspense>
          </div>
          <div id="Home" className="w-full">
            <div className="relative font-skranji text-white">
              <Suspense fallback={<div></div>}>
                {loadedImages1 >= 3 ? <MainPage handleImageLoad={handleImageLoad1} /> : <div className="h-0"><MainPage handleImageLoad={handleImageLoad1} /></div>}
              </Suspense>
              <Suspense fallback={<div></div>}>
                {loadedImages2 >= 6 ? <HowPlay handleImageLoad={handleImageLoad2} /> : <div className="h-0"><HowPlay handleImageLoad={handleImageLoad2} /></div>}
              </Suspense>
              <Suspense fallback={<div></div>}>
                {loadedImages3 >= 5 ? <WhitePaper handleImageLoad={handleImageLoad3} /> : <div className="h-0"><WhitePaper handleImageLoad={handleImageLoad3} /></div>}
              </Suspense>
              <Suspense fallback={<div></div>}>
                {loadedImages4 >= 10 ? <GemDescription handleImageLoad={handleImageLoad4} /> : <div className="h-0"><GemDescription handleImageLoad={handleImageLoad4} /></div>}
              </Suspense>
              <Suspense fallback={<div></div>}>
                {loadedImages5 >= 12 ? <HowEarn handleImageLoad={handleImageLoad5} /> : <div className="h-0"><HowEarn handleImageLoad={handleImageLoad5} /></div>}
              </Suspense>
              <Suspense fallback={<div></div>}>
                {loadedImages6 >= 11 ? <ContactUs handleImageLoad={handleImageLoad6} /> : <div className="h-0"><ContactUs handleImageLoad={handleImageLoad6} /></div>}
              </Suspense>
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
