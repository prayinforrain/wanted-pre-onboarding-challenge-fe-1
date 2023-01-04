import { atom } from "recoil";
import { ToastMessage } from "../types/Toast";

export const toastMessageList = atom<ToastMessage[]>({
  key: "toast",
  default: [],
});
