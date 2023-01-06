import { atom } from "recoil";
import { ToastMessage } from "../types/Toast";

export const toastMessageList = atom<ToastMessage[]>({
  key: "toast",
  default: [],
});

export const selectedTodo = atom<string | null>({
  key: "selectedTodo",
  default: null,
});
