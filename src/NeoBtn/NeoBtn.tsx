import "../base.sass";
import * as m from "./neobtn.module.sass";
import { FaPowerOff } from "react-icons/fa";
import { useState } from "react";
export default function NeoBtn() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked((p) => !p);
  }
  return (
    <div className={m.container}>
      <button
        onClick={handleClick}
        className={`${m.btn} ${clicked ? m.checked : ""}`}
      >
        <FaPowerOff className={`${m.icon} ${clicked ? m.clicked : ""}`} />
      </button>
    </div>
  );
}
