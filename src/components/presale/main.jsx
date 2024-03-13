import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LabelButton from "../labelButton";
import { useRouter } from "next/router";
import { checkPresaleCoolDown } from "~/common/api";
import { FormatNumber } from "~/global/common";
import { ClaimButton, ClickButton } from "../clickButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "../lazyImage";

export default function MainPresaleAdmin({
    usdtamount,
    setusdtamount,
    receiveAmount,
    setReceiveAmount,
    onBtnClick,
    buyStatus,
    setBuyStatus,
    code,
    setCode,
    pendingStatus,
    globalValue,
    setGlobalValue,
    handleImageLoad,
}) {
    const { t, i18n } = useTranslation();
    const [date, setDate] = useState({
        day: "03",
        hour: "23",
        percentage: "+10"
    })
    const [cooldownStart, setCooldownStart] = useState(false);
    const router = useRouter()
    useEffect(() => {
        checkPresaleCoolDown().then(res => {
            setDate({ ...date, day: parseInt(parseInt(res.time / 6) / 24), hour: parseInt(res.time / 6) % 24 })
            setGlobalValue({ ...globalValue, totalAmount: res.totalAmount })
            if (res.time === 0 || res.time === 500) {
                setCooldownStart(false);
                return;
            }
            setCooldownStart(true);
        })
    }, [])
    useEffect(() => {
        if (cooldownStart) {
            checkPresaleCoolDown().then(async (res) => {
                let responseSent = false;
                let time = res.time + 1;
                async function fetchBalanceAndValue() {
                    if (time === 0) {
                        clearInterval(interval);
                        setCooldownStart(false)
                        return;
                    }
                    time = time - 1;
                    setDate({ ...date, day: parseInt(parseInt(time / 6) / 24), hour: parseInt(time / 6) % 24 })
                    setGlobalValue({ ...globalValue, totalAmount: res.totalAmount })
                    if (!responseSent) {
                        responseSent = true;
                    }
                }

                await fetchBalanceAndValue();
                const interval = setInterval(fetchBalanceAndValue, 600000);
            })
        }
    }, [cooldownStart])

    const onAmountClick = (amount) => {
        setusdtamount(amount);
        setReceiveAmount(Number.parseInt(amount * 10).toFixed(0))
    };

    const getEnterCode = (value) => {
        setCode(value);

    }
    const buyOkay = () => {
        setBuyStatus(false);
        setReceiveAmount("");
    }
    const goRefInfo = () => {
        router.push('/referral-info')
    }
    return (
        <>
            <div className="center-bg w-[1020px] h-[540px] me-[13px] flex flex-col items-center mt-8 sm:mt-0">
                <div className="w-[750px] lg:w-[900px] mt-4 text-white font-skranji">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex justify-evenly flex-col w-[350px] lg:w-[420px]">
                            <div className="text-1xl font-bold flex justify-between">
                                {t("ENDS IN: ")}
                                <span className="text-end">
                                    <span className="text-[#dcc90a]">{date.day + t(" DAYS: ") + date.hour + t(" HOURS")}</span>
                                    <span className="text-[#00ce2d]">{" (" + date.percentage + "%)"}</span>
                                </span>
                            </div>
                            <div className="text-1xl font-bold flex justify-between">
                                {t("CSC ACTUAL PRICE: ")}
                                <span className="text-[#dcc90a]">{globalValue.transaction + " USDT"}</span>
                            </div>
                            <div className="text-1xl flex justify-between">
                                <div className="font-bold">{t("TOTAL SOLD:")}</div>
                                <div className="font-bold text-[#51ff3a] flex tracking-[2px]">
                                    <LazyImage
                                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/usdt-lg2RgD4n6xMDnJF5kBVoWpFRtJjnSy.png"
                                        onLoad={handleImageLoad}
                                        className="w-6 h-6 me-4"
                                    />{FormatNumber(globalValue.totalAmount)}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-evenly flex-col w-[300px]">
                            <div className="flex justify-between">
                                <div className="w-40 h-10 flex items-center justify-start">
                                    <LazyImage
                                        src="https://1oc3hrz1dgaooenq.public.blob.vercel-storage.com/others/usdt-lg2RgD4n6xMDnJF5kBVoWpFRtJjnSy.png"
                                        onLoad={handleImageLoad}
                                        className="w-6 me-2"
                                    />USDT
                                </div>
                                <div className="w-40 h-10 flex items-center justify-end">
                                    {t("NETWORK: ")}<span className="text-[#ffd616] ml-2">{t("BNB")}</span>
                                </div>
                            </div>
                            <ClaimButton title={t("Referral system")} className="w-full h-10 text-xl" onClick={goRefInfo} />
                        </div>
                    </div>
                </div>
                {!buyStatus ?
                    !pendingStatus ?
                        <>
                            <LabelButton title={t("YOU PAY")} class="mt-8" buyStatus={buyStatus} color="text-green-500" img="assets/images/usdt.png" onChange={(e) => onAmountClick(e)} />
                        </>
                        :
                        <div className="w-[32rem] h-[8rem] border-[3px] border-[#222222] bg-[#ffffff] rounded-3xl flex justify-center items-center text-[1rem] font-bold tracking-[-1.2px] relative">
                            <span class="loader"></span>{t("TRANSACTION PENDING DON'T CLOSE THIS WINDOW")}
                        </div>
                    :
                    <div className="w-[32rem] h-[8rem] border-[3px] border-[#222222] bg-[#ffffff] rounded-3xl flex justify-center items-center text-[1.5rem] relative">
                        {t("BUY SUCCESSFUL:")}
                        <span
                            className="cryptoIcon w-[100px] h-[100px] mx-[10px] text-[#fdce35] font-[800] text-[1.8rem] flex justify-center items-center"
                            style={{ WebkitTextStroke: "0.1px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
                        >
                            <div style={{ WebkitTextStroke: "1px black" }}>
                                {receiveAmount}
                            </div>
                        </span>
                        CSC
                        <button className="absolute right-[1rem] bottom-[1rem] font-[600] text-[#111111] text-[15px] bg-[#a1a1a1] w-fit px-[10px] rounded-full border-[2px] border-[#111111] shadow-[3px_3px_5px_#111111]" onClick={() => buyOkay()}>OKAY</button>
                    </div>
                }
                <LabelButton title={t("YOU RECEIVE")} buyStatus={buyStatus} color="text-yellow-500" img="assets/images/cryptoIcon.png" receiveAmount={receiveAmount} />
                <LabelButton title={t("ENTER CODE")} buyStatus={buyStatus} onChange={(e) => getEnterCode(e)} />
                <ClickButton title={t("BUY")} className="w-60 h-12 text-white" onClick={() => onBtnClick("Buy")} />
                <div className="font-bold text-white">
                    <span className="text-[#ff0000] text-2xl">{t("! ")}</span>
                    <span className="text-[#dcc90a] text-1xl">{t("UNLOCK 15% ON TOKEN RELEASE AND EVERY 14 DAYS +21.25%")}</span>
                </div>
            </div>
        </>
    )
}