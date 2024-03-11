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
  const [loadedImages1, setLoadedImages1] = useState({ count: 0, loaded: false });
  const [loadedImages2, setLoadedImages2] = useState({ count: 0, loaded: false });
  const [loadedImages3, setLoadedImages3] = useState({ count: 0, loaded: false });
  const [loadedImages4, setLoadedImages4] = useState({ count: 0, loaded: false });
  const [loadedImages5, setLoadedImages5] = useState({ count: 0, loaded: false });
  const [loadedImages6, setLoadedImages6] = useState({ count: 0, loaded: false });

  useEffect(() => {
    if (loadedImages1.count >= 3) {
      setLoadedImages1(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages1])
  useEffect(() => {
    if (loadedImages2.count >= 6 && loadedImages1.loaded === true) {
      setLoadedImages2(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages2, loadedImages1])
  useEffect(() => {
    if (loadedImages3.count >= 5 && loadedImages2.loaded === true) {
      setLoadedImages3(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages3, loadedImages2])
  useEffect(() => {
    if (loadedImages4.count >= 10 && loadedImages3.loaded === true) {
      setLoadedImages4(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages4, loadedImages3])
  useEffect(() => {
    if (loadedImages5.count >= 12 && loadedImages4.loaded === true) {
      setLoadedImages5(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages5, loadedImages4])
  useEffect(() => {
    if (loadedImages6.count >= 11 && loadedImages5.loaded === true) {
      setLoadedImages6(prevState => ({ ...prevState, loaded: true }));
    }
  }, [loadedImages6, loadedImages5])

  const handleImageLoad1 = () => {
    setLoadedImages1(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad2 = () => {
    setLoadedImages2(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad3 = () => {
    setLoadedImages3(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad4 = () => {
    setLoadedImages4(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad5 = () => {
    setLoadedImages5(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
  const handleImageLoad6 = () => {
    setLoadedImages6(prevState => ({ ...prevState, count: prevState.count + 1 }));
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
                <MainPage handleImageLoad={handleImageLoad1} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowPlay handleImageLoad={handleImageLoad2} loadedImages={loadedImages2} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <WhitePaper handleImageLoad={handleImageLoad3} loadedImages={loadedImages3} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <GemDescription handleImageLoad={handleImageLoad4} loadedImages={loadedImages4} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <HowEarn handleImageLoad={handleImageLoad5} loadedImages={loadedImages5} />
              </Suspense>
              <Suspense fallback={<div></div>}>
                <ContactUs handleImageLoad={handleImageLoad6} loadedImages={loadedImages6} />
              </Suspense>
            </div>
          </div>
        </div>
      </I18nextProvider>
    </div>
  );
}
