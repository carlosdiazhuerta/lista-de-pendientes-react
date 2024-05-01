import React from "react";
import { WhiteStorageListener } from "./WithStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            EEEI!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
const ChangeAlertWithStoragelistener = WhiteStorageListener(ChangeAlert);
export { ChangeAlertWithStoragelistener };
