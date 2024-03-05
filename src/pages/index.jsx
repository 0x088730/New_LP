import React, { Suspense, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { counterUser } from "~/common/api";
import i18next from "~/global/i18n";

const Header = React.lazy(() => import('~/components/screens/header'));
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
        </div>
      </I18nextProvider>
    </div>
  );
}
