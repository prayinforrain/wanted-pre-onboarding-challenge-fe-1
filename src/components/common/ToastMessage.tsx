import React from "react";
import { ToastMessage } from "../../types/Toast";

interface ToastProps {
  message: ToastMessage;
}

function ToastMessageInstance({ message }: ToastProps) {
  return <div className="ToastWrapper">{message.message}</div>;
}

export default React.memo(
  ToastMessageInstance,
  (prev, next) => prev.message.key === next.message.key
);
