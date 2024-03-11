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
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (loadedImages >= 10) {
      setLoading(false)
    }
  }, [loadedImages]);
  const handleImageLoad1 = (src) => {
    setLoadedImages(prevCount => prevCount + 1);
    console.log(loadedImages, loading, src)
  };
  const handleImageLoad2 = (src) => {
    setLoadedImages(prevCount => prevCount + 1);
    console.log(loadedImages, loading, src)
  };
  const handleImageLoad3 = (src) => {
    setLoadedImages(prevCount => prevCount + 1);
    console.log(loadedImages, loading, src)
  };
  const handleImageLoad4 = (src) => {
    setLoadedImages(prevCount => prevCount + 1);
    console.log(loadedImages, loading, src)
  };
  const handleImageLoad5 = (src) => {
    setLoadedImages(prevCount => prevCount + 1);
    console.log(loadedImages, loading, src)
  };
  const handleImageLoad6 = (src) => {
    setLoadedImages(prevCount => prevCount + 1);
    console.log(loadedImages, loading, src)
  };

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
      <Image
        effect="black-and-white"
        draggable="false"
        alt=''
        src="assets/images/backgrounds/loading.jpg"
        width={500}
        height={500}
        loading="lazy"
        className={`w-full h-full fixed ${loading === true ? "block" : "hidden"}`}
      />
      <I18nextProvider i18n={i18next}>
        <div className={`w-full overflow-hidden Home ${loading === true ? "hidden" : "block"}`}>
          <div className="absolute w-full h-24 z-10 flex justify-center items-center">
            <Suspense fallback={<div>...</div>}>
              <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            </Suspense>
          </div>
          <div id="Home" className="w-full">
            <div className="relative font-skranji text-white">
              <Suspense fallback={<div></div>}>
                <MainPage handleImageLoad={handleImageLoad1} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowPlay handleImageLoad={handleImageLoad2} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <WhitePaper handleImageLoad={handleImageLoad3} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <GemDescription handleImageLoad={handleImageLoad4} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowEarn handleImageLoad={handleImageLoad5} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <ContactUs handleImageLoad={handleImageLoad6} />
              </Suspense>
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
