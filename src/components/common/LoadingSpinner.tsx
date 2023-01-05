import React from "react";

function LoadingSpinner() {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default React.memo(LoadingSpinner);
