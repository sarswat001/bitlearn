import { atom } from "recoil";

export const isLoginState = atom({
    key: 'isLogin',
    default: false
});

export const progressState = atom({
    key: 'progress',
    default: 0
});

export const userState = atom({
    key: 'user',
    default: 'users'
});