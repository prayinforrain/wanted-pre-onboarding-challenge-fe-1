import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toastMessageList } from "../../atom";
import ToastMessageInstance from "./ToastMessage";

const MESSAGE_EXPIRATION_TIME = 1500;

export default function ToastController() {
  const [messageList, setMessageList] = useRecoilState(toastMessageList);

  useEffect(() => {
    if (messageList.length === 0) return undefined;
    const timer = setTimeout(() => {
      clearTimeout(timer);
      closeToast();
    }, MESSAGE_EXPIRATION_TIME);
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  const closeToast = () => {
    const newList = messageList.slice(1);
    setMessageList(newList);
  };

  return (
    <div className="toastMessageContainer">
      {messageList.map((msg) => (
        <ToastMessageInstance message={msg} key={msg.key} />
      ))}
    </div>
  );
}
