import { useEffect, useRef, useState } from "react";
import { characterInfoList } from "~/global/data";

const characterList = [1, 2, 3, 4];

export default function CharacterViewMD() {
  const [currentCharacterScroll, setCurrentCharacterSroll] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(1);
  let characterViewRef = useRef();
  const onSelectCharacter = (no) => {
    characterViewRef.current.classList.add("opacity-0");
    setTimeout(() => {
      setCurrentCharacter(no);
    }, 1000);
    setTimeout(() => {
      characterViewRef.current.classList.remove("opacity-0");
    }, 2000);
  };
  
  return (
    <div className=" w-full bg-[url('../../public/assets/images/back.jpg')]">
      <div className="items-center justify-start w-full h-full ">
         <div
          className="flex items-center w-full px-2 pb-4 duration-1000 "
          ref={characterViewRef}
        >
          <div className="w-1/3 h-full md:h-full ">
          {characterList.slice(0, 4).map((characterNo) => {
              characterNo = characterNo + currentCharacterScroll;
              return (
                <img
                  key={characterNo}
                  src={
                    "assets/images/characters/avatar/" + characterNo + ".png"
                  }
                  alt=""
                  className={
                    characterNo === currentCharacter
                      ? "w-4/5 mx-2 duration-700 hover:grayscale-0 cursor-pointer"
                      : "w-4/5 mx-2 duration-700 hover:grayscale-0 grayscale cursor-pointer"
                  }
                  onClick={() => onSelectCharacter(characterNo)}
                />
              );
            })}
          
          </div>
          <div className="justify-between flex-1 w-2/3 text-white h-5/6">
          
            <div className="mt-16 text-2xl text-purple-300 font-animeace">
              {characterInfoList[currentCharacter - 1].Name}
            </div>
            <div className="h-48 my-10 overflow-y-scroll text-xs font-animeace">
              {characterInfoList[currentCharacter - 1].Appearance}<br/><br/>
              {characterInfoList[currentCharacter - 1].Personality}
              
            </div>
            <div className="flex w-60 h-60">
          {characterList.map((no)=><img key={no} src={"assets/images/characters/idle/" + no + ".gif"}
            className={currentCharacter!==no?"hidden":"content"}
            alt="" />)}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
