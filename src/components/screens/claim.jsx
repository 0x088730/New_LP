import { useEffect, useRef, useState } from "react"


export default function Claim({ setShowClaimWindowFlag }) {
    const [boxOpenState, setBoxOpenState] = useState(false)
    const [itemArray, setItemArray] = useState([])
    const itemBarRef = useRef()
    const [gifState, setGifState] = useState(true)
    const [selectedItemFlag, setSelectedItemFlag] = useState(false)
    const [text, setText] = useState("")
    const [starState, setStarState] = useState(false)
    useEffect(() => {
        const randomArray = [];
        for (let i = 0; i < 50; i++) {
            let type = Math.floor(Math.random() * 3);
            const level = Math.floor(Math.random() * 3) + 1;
            switch (type) {
                case 0:
                    type = "chimera"
                    break
                case 1:
                    type = "infernal"
                    break
                case 2:
                    type = "gem"
            }
            randomArray.push({ type, level });
        }
        setItemArray(randomArray)
        setTimeout(() => {
            setBoxOpenState(true)
            setGifState(false)
        }, 4500)
        setTimeout(() => {

            itemBarRef?.current.classList.remove('-translate-x-[200%]')

        }, 5000)
        setTimeout(() => {

            setStarState(true)

        }, 5500)
        setTimeout(() => {
            setSelectedItemFlag(true)
            setStarState(false)
        }, 9500)
    }, [])

    const onClickItem = () => {
        let selectedItem = itemArray[12]
        const text = (selectedItem.type === "gem" ? "Damage" : selectedItem.type === "infernal" ? "Critical" : "HP") + " +" + selectedItem.level * 50
        setText(text)
        setTimeout(() => {
            setShowClaimWindowFlag(false)
        }, 1500)
    }
    return (
        <div className="absolute z-30 w-full h-screen background-position-center-absolute">
            <div className="flex items-center justify-center w-full h-screen ">
                <img src={`assets/images/gem_bg.${gifState ? 'gif' : 'jpg'}`} alt="abs" className="absolute object-cover w-full h-full " />

                <div id="claim-box" className="absolute w-1/4 h-fit ">
                    <img src={`assets/images/item/${boxOpenState === true ? "box-open.png" : "box-closed.png"}`} alt="abs" className=" animation animate-bounce-twice" />
                </div>

            </div>
            <div className="absolute top-0 flex items-center w-full h-screen overflow-hidden ">
                {

                    selectedItemFlag && <div className="w-1/6 mx-auto">
                        <p className="absolute -translate-y-[200%] text:2xl md:text-5xl text-white font-animeace">{text}</p>
                        <img src={`assets/images/item/item-${itemArray[12].type}-${itemArray[12].level}.png`} className="w-full px-0.5" onClick={onClickItem}></img>
                        <div className="relative flex items-center justify-center w-full duration-500 translate-y-20 cursor-pointer hover:brightness-125" onClick={onClickItem}>
                            <p className="absolute z-30 text-xs md:text-2xl text-white ">Okay</p>
                            <img src="assets/images/big-button.png" className="relative top-0" ></img>
                        </div>

                    </div>
                }

                <div className="flex -translate-x-[200%] duration-[4000ms]" ref={itemBarRef}>
                    {!selectedItemFlag &&
                        itemArray.map((item, no) =>
                            <img key={no} src={`assets/images/item/item-${item.type}-${item.level}.png`} className="w-[4%] px-0.5"></img>
                        )
                    }
                </div>
                {starState && <div className="absolute z-20 w-full h-full">
                    <img src="assets/images/star.png" alt="" className="mx-auto h-full object-cover" />
                </div>}
            </div>
        </div>
    )
}