import "../base.sass";
import * as m from "./neoToggle.module.sass";
// import { useState } from "react";
export default function NeoToggle() {
  // const [clicked, setClicked] = useState(false);
  // function handleClick() {
  //   setClicked((p) => !p);
  // }
  return (
    <div className={m.container}>
      <div className={m.toggle}>
        <input type="checkbox" className={m.btn} />
      </div>
    </div>
  );
}
