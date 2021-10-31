import "../base.sass";
import * as m from "./clock.module.sass";
import useClock from "./useClock";

export default function Clock() {
  const pos = useClock();
  // console.log(pos);
  return (
    <div className={m.container}>
      <div className={m.clock}>
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className={m.mark}
              style={{ transform: `rotate(${(index + 1) * 30}deg)` }}
            >
              <span></span>
              <span></span>
            </div>
          ))}
      </div>
      <div className={m.center}>
        <div
          style={{ transform: `translateX(50%) rotate(${pos.hour}deg)` }}
          className={`${m.hand} ${m.hour}`}
        ></div>
        <div
          style={{ transform: `translateX(50%)  rotate(${pos.min}deg)` }}
          className={`${m.hand} ${m.min}`}
        ></div>
        <div
          style={{ transform: `translateX(50%)  rotate(${pos.sec}deg)` }}
          className={`${m.hand} ${m.sec}`}
        ></div>
      </div>
    </div>
  );
}
