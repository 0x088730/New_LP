import { useEffect, useState } from "react";
import Web3 from 'web3'
import { useTranslation } from "react-i18next";
import LabelButton from "~/components/labelButton";
import Header from "~/components/screens/header";
import Account from "~/components/presale/account";
import { global } from "~/common/global";
import { addRefer, createProfile, getProfile, getRefCodeList, getWalletStatus } from "~/common/api";
import MainPresale from "~/components/presale/main";
import Chart from "~/components/presale/chart";


export default function Presale() {
  const { t, i18n } = useTranslation();
  const [address, setAddress] = useState("");
  const [btnType, setBtnType] = useState("Connect");
  const [btnColor, setBtnColor] = useState("grayscale");
  const [usdtamount, setusdtamount] = useState(null);
  const [page, setPage] = useState("main");
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [code, setCode] = useState("");
  const [tokenAmount, setTokenAmount] = useState({
    csc: 0,
    usdt: 0
  });
  const [buyStatus, setBuyStatus] = useState(false);
  const [userData, setUserData] = useState({});
  const [bonusRate, setBonusRate] = useState(5);
  const [refCodeList, setRefCodeList] = useState([]);
  const [pendingStatus, setPendingStatus] = useState(false);
  const [globalValue, setGlobalValue] = useState({
    totalAmount: 1183,
    transaction: 0.09
  });

  useEffect(() => {
    setPage(global.pageStatus);
    getRefCodeList(global.walletAddress)
      .then(res => {
        setGlobalValue({ totalAmount: Number(res.globalValue.totalAmount).toFixed(2), transaction: res.globalValue.transaction });
        setRefCodeList(res.refCodeList)
      })
  }, [])
  useEffect(() => {
    getRefCodeList(global.walletAddress)
      .then(res =>
        setRefCodeList(res.refCodeList)
      )
  }, [global.walletAddress])
  const BEP20TokenABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
  let web3;
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.ethereum);
  } else {
    const provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/');
    web3 = new Web3(provider);
  }

  const onBtnClick = async (type) => {
    setBtnColor("grayscale-0");
    switch (type) {
      case "Connect":
        try {
          // Request access to the user's accounts
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Get the user's current address
          const accounts = await web3.eth.getAccounts();
          const userAddress = accounts[0];
          setAddress(userAddress.slice(0, 4) + " ... " + userAddress.slice(-4));
          global.walletAddress = userAddress;
          createProfile(userAddress)
            .then(res => {
              setUserData(res.user);
              global.userRef = res.user.userRef;
              setTokenAmount(res.user.tokenAmount)
            })
          setBtnType("Buy");
        } catch (error) {
          console.error(error);
          alert("Failed to connect. Please check if Metamask is installed and unlocked.");
        }
        break;

      case "Buy":
        if (btnType != "Buy") {
          alert("Please connect wallet");
          return;
        }
        if (code === global.userRef || code === "") {
          alert("You can't buy CSC token without correct refreral code");
          return;
        }
        if (usdtamount == "" || usdtamount == "0") {
          alert("Please input USDT amount you want to buy csc token");
          return;
        }
        if (!refCodeList.includes(code)) {
          alert("The user don't exist!");
          return;
        }
        setPendingStatus(true);
        try {
          const BigNumber = require('bignumber.js');
          const tokenContractAddress = '0x55d398326f99059ff775485246999027b3197955';
          const tokenContract = new web3.eth.Contract(BEP20TokenABI, tokenContractAddress);
          const recipientAddress = '0x6058Bd96B7BaD4E35A16a443697284fcf0b473c4';
          // const recipientAddress = '0x8473Fb138845bA1fC5bFfDAb673ef285f0B4DbBF';
          // Convert 100 USDT to wei - assuming 6 decimal places
          if (usdtamount === null) {
            alert("Please select USDT")
          }
          else {
            const decimals = 18;
            const amountToSend = new BigNumber(usdtamount).multipliedBy(new BigNumber(10).pow(decimals)).toString();
            //console.log(amountToSend);
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 100000;
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];

            try {
              // getWalletStatus(global.walletAddress, true);
              const transaction = await tokenContract.methods.transfer(recipientAddress, amountToSend).send({ from: userAddress, gasPrice: gasPrice, gas: gasLimit });
              setTokenAmount({ ...tokenAmount, csc: (Number(receiveAmount) + Number(tokenAmount.csc)) });
              addRefer(global.walletAddress, { csc: Number(receiveAmount), usdt: Number(usdtamount) }, code, transaction.transactionHash)
                .then(res => {
                  if (res.data) {
                    setTotalAmount(Number(res.totalAmount).toFixed(2));
                    setBuyStatus(true);
                    setPendingStatus(false);
                    setusdtamount("");
                    setCode("");
                  }
                  else {
                    alert(res.message)
                  }
                })
            } catch (error) {
              console.error(error);
              alert("Failed to transfer tokens. Please try again.");
              setPendingStatus(false);
            }

          }
        } catch (error) {
          console.error(error);
          alert("Failed to transfer tokens. Please try again.");
          setPendingStatus(false);
        }
        setPendingStatus(false);
        break;
      default:
        break;
    }
  }

  return (
    <div className="relative md:w-full h-screen min-w-[1024px] presale-bg">
      <Header currentMenu="Presale Admin" />
      <div className="relative flex-col h-full space-y-2 flex lg:items-center justify-center">
        <div className="absolute top-0 translate-y-28 flex justify-between items-end w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]">
          <div className="pt-2 text-4xl text-left text-white xl:text-4xl 2xl:text-4xl font-animeace">
            {t("CSC TOKEN PRESALE")}
          </div>
          <div
            className="wallet-connect text-md text-left text-white font-animeace cursor-pointer w-[450px] h-[54px] flex items-center justify-end"
            onClick={() => onBtnClick("Connect")}
          >
            <span className="w-[300px] text-center font-[900]" style={{ textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}>
              {btnType === "Connect" ?
                <>
                  <img src="assets/images/metamask.png" alt="" className="w-6 inline me-1" />{t("CONNECT METAMASK")}
                </>
                :
                <>
                  <img src="assets/images/metamask.png" alt="" className="w-6 inline me-1" />{address}
                </>
              }
            </span>
          </div>
        </div>
        <div className="absolute top-0 translate-y-40 flex w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] ml-3 z-[1]">
          <div
            className={`text-white text-1xl font-animeace w-[9rem] h-[3.5rem] cursor-pointer relative ${page === "main" ? "green-btn" : "inactive-btn"}`}
            onClick={() => {
              global.pageStatus = "main";
              setPage("main")
            }}
          >
            <span
              className="absolute right-[1.1rem] top-[8px] text-[18px] text-[#FFBF80] font-lightest"
              style={{ WebkitTextStroke: "0.8px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
            >
              {t("PRESALE")}
            </span>
          </div>
          <div className={`text-white text-1xl font-animeace w-[9rem] h-[3.5rem] cursor-pointer relative ${page === "chart" ? "green-btn" : "inactive-btn"}`}>
            <span
              className="absolute right-[1.9rem] top-[8px] text-[18px] text-[#FFBF80] font-lightest"
              style={{ WebkitTextStroke: "0.8px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
              onClick={() => setPage("chart")}
            >
              {t("CHART")}
            </span>
          </div>
          <div
            className={`text-white text-1xl font-animeace w-[9rem] h-[3.5rem] cursor-pointer relative ${page === "account" ? "green-btn" : "inactive-btn"}`}
            onClick={() => setPage("account")}
          >
            <span
              className="absolute right-[1rem] top-[8px] text-[18px] text-[#FFBF80] font-lightest"
              style={{ WebkitTextStroke: "0.8px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
            >
              {t("ACCOUNT")}
            </span>
          </div>
        </div>
        <div className="w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] z-0">
          <video
            src="assets/videos/intro.mp4"
            className="absolute top-1 translate-y-52 object-cover object-center rounded-3xl shadow-1xl shadow-[3px_3px_20px_7px_#FC44E9] contrast-125 brightness-50 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] h-[60%] min-h-[576px]"
            autoPlay
            loop
            muted
          />
          {page === "main" ?
            <MainPresale
              usdtamount={usdtamount}
              setusdtamount={setusdtamount}
              receiveAmount={receiveAmount}
              setReceiveAmount={setReceiveAmount}
              onBtnClick={onBtnClick}
              buyStatus={buyStatus}
              setBuyStatus={setBuyStatus}
              code={code}
              setCode={setCode}
              pendingStatus={pendingStatus}
              globalValue={globalValue}
              setGlobalValue={setGlobalValue}
            />
            :
            page === "chart" ?
              <Chart />
              :
              <Account
                tokenAmount={tokenAmount}
                setTokenAmount={setTokenAmount}
                btnType={btnType}
                bonusRate={bonusRate}
                setBonusRate={setBonusRate}
              />
          }
        </div>
      </div>
    </div>
  );
}
