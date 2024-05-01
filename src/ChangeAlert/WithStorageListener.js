import React from "react";

function WhiteStorageListener(WrappedComponet) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("hubo cambios");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      setStorageChange(false);
      props.sincronized();
    };

    return <WrappedComponet show={storageChange} toggleShow={toggleShow} />;
  };
}

export { WhiteStorageListener };
