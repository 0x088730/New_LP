import { useEffect, useRef, useState } from "react"
import { characterInfoList } from "~/global/data"
import { useTranslation } from "react-i18next";

const characterList = [1, 2, 3, 4]
function CharacterModel({ characterNo }) {
  const [isLoading, setIsLoading] = useState([true, true, true, true]);

  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = `assets/images/characters/idle/${characterNo}.gif`;

    gifImage.addEventListener('load', () => {
      let temp = isLoading
      temp[characterNo - 1] = false
      setIsLoading(temp);
    });

    gifImage.addEventListener('error', () => {
      console.log('Error loading GIF image');
    });

    return () => {
      gifImage.removeEventListener('load', () => {
        let temp = isLoading
        temp[characterNo - 1] = false
        setIsLoading(temp);
      });
      gifImage.removeEventListener('error', () => {
        console.log('Error loading GIF image');
      });
    };
  }, [characterNo]);

  return (
    <div>
      <img
        src={`assets/images/characters/idle/${characterNo}.gif`}
        alt="GIF Image"
        className="object-cover h-full"
      />
      {/* )} */}
    </div>
  );
}
export default function CharacterView() {
  const [currentCharacter, setCurrentCharacter] = useState(1)
  const { t, i18n } = useTranslation();
  let characterViewRef = useRef()
  const onSelectCharacter = (no) => {

    characterViewRef.current.classList.add("opacity-0")
    setTimeout(() => {
      setCurrentCharacter(no)
    }, 700)
    setTimeout(() => {
      characterViewRef.current.classList.remove("opacity-0")
    }, 700)
  }


  return (
    <div className='relative flex justify-center w-full h-full' >
      <img src="assets/images/char_bg.jpg" alt="" className="w-full" />
      <div className="absolute flex items-center justify-start w-5/6 h-full space-x-20">

        <div className="px-2 overflow-y-scroll h-4/5">
          {
            characterList.map((characterNo) => {

              return <img key={characterNo} src={"assets/images/characters/avatar/" + characterNo + ".png"} alt=""
                className={characterNo === currentCharacter ? "h-1/4 duration-700 hover:grayscale-0 cursor-pointer hover:scale-105" :
                  "h-1/4 duration-700 hover:grayscale-0 grayscale cursor-pointer  hover:scale-105"}
                onClick={() => onSelectCharacter(characterNo)}
              />
            })
          }
        </div>

        <div className="flex w-5/6 duration-1000 h-5/7" ref={characterViewRef}>
          <div className="w-100">
            {characterList.map((no) => <img style={{ marginTop: '120px' }} key={no} src={"assets/images/characters/idle/" + no + ".gif"}
              className={currentCharacter !== no ? "hidden" : "content"}
              alt="" />)}
            {/* // <CharacterModel characterNo={currentCharacter}/>  */}
          </div>
          <div className="justify-between flex-1 w-1/2 text-white h-4/4" >
            <div className="mt-8 text-4xl text-purple-300 font-animeace">{t(`CharacterList.${currentCharacter - 1}.Name`)}</div>
            <div className="my-10 overflow-y-scroll text-xl h-1/2 font-animeace">
              {t(`CharacterList.${currentCharacter - 1}.Appearance`)}<br /><br />
              {t(`CharacterList.${currentCharacter - 1}.Personality`)}

            </div>
            <div className="relative flex w-full">
              {characterList.map((no) => <img style={{ width: '30%', height: 'auto', marginRight: "2rem" }} key={no} src={"assets/images/characters/action/" + no + "-1.jpg"}
                className={currentCharacter !== no ? "hidden" : "content"}
                alt="" />)}
              {characterList.map((no) => <img style={{ width: '30%', height: 'auto', marginRight: "2rem" }} key={no} src={"assets/images/characters/action/" + no + "-2.jpg"}
                className={currentCharacter !== no ? "hidden" : "content"}
                alt="" />)}
              {characterList.map((no) => <img style={{ width: '30%', height: 'auto', marginRight: "2rem" }} key={no} src={"assets/images/characters/action/" + no + "-3.jpg"}
                className={currentCharacter !== no ? "hidden" : "content"}
                alt="" />)}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
