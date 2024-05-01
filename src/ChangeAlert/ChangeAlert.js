import React from "react";
import { WhiteStorageListener } from "./WithStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>se efectua un cambio</p>
        <button onClick={() => toggleShow(false)}>refrescar</button>
      </div>
    );
  } else {
    return null;
  }
}
const ChangeAlertWithStoragelistener = WhiteStorageListener(ChangeAlert);
export { ChangeAlertWithStoragelistener };
