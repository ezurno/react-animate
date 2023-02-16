import { atom } from "recoil";

export const navState = atom<number>({
  key: "navState",
  default: 0,
});
