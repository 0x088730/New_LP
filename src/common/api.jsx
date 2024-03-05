import axios from "axios"
import { global } from "./global"
import config from "./config"

axios.defaults.baseURL = `${config.server}${config.baseURL}/user/userLP/`
export const getProfile = async (walletAddress) => {
    return (await axios.post(`profile`, {
        walletAddress
    })).data;
}

export const createProfile = async (walletAddress) => {
    return (await axios.post(`createProfile`, {
        walletAddress
    })).data;
}

export const createRefCode = async (walletAddress, ref) => {
    return (await axios.post(`createRefCode`, {
        walletAddress,
        ref
    })).data;
}

export const addRefer = async (walletAddress, amount, refLink, txID) => {
    return (await axios.post(`addRefer`, {
        walletAddress,
        amount,
        refLink,
        txID
    })).data;
}

export const getRefCodeList = async (walletAddress) => {
    return (await axios.post(`getRefCodeList`, {
        walletAddress,
    })).data;
}

export const getWalletStatus = async (walletAddress) => {
    return (await axios.post(`getWalletStatus`, {
        walletAddress,
    })).data;
}

export const counterUser = async () => {
    return (await axios.post(`counterUser`, {})).data;
}

export const checkPresaleCoolDown = async () => {
    return (await axios.post(`checkPresaleCoolDown`, {})).data;
}

export const addWithdraw = async (walletAddress) => {
    return (await axios.post(`addWithdraw`, {
        walletAddress,
    })).data;
}

export const checkWithdrawDaily = async (walletAddress) => {
    return (await axios.post(`checkWithdrawDaily`, { walletAddress })).data;
}
