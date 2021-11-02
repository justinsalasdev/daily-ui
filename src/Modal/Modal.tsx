import * as m from "./modal.module.sass";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  cloneElement,
  ReactPropTypes,
} from "react";
import ReactDom from "react-dom";
import { Handler } from "./types";

const setContext = createContext<Handler>(() => {});
//use this hook only on components inside Modal
export const useModalCloser = () => useContext(setContext);

export default function Modal() {
  const [shown, setShown] = useState(false);

  function showModal(Content: React.FC, props?: object) {
    setShown(true);
    ReactDom.createPortal(
      <Content {...props} />,
      document.getElementById("modal")!
    );
  }

  function closeModal() {
    setShown(false);
  }

  return (
    <setContext.Provider value={closeModal}>
      {shown && <div id="modal"></div>}
    </setContext.Provider>
  );
}
