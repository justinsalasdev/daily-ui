import "../base.sass";
import "./clock.sass";
import useClock from "./useClock";

export default function Clock() {
  const pos = useClock();
  // console.log(pos);
  return (
    <div className="container">
      <div className="clock">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="mark"
              style={{ transform: `rotate(${(index + 1) * 30}deg)` }}
            >
              <span></span>
              <span></span>
            </div>
          ))}
      </div>
      <div className="center">
        <div
          style={{ transform: `translateX(50%) rotate(${pos.hour}deg)` }}
          className="hand hour"
        ></div>
        <div
          style={{ transform: `translateX(50%)  rotate(${pos.min}deg)` }}
          className="hand min"
        ></div>
        <div
          style={{ transform: `translateX(50%)  rotate(${pos.sec}deg)` }}
          className="hand sec"
        ></div>
      </div>
    </div>
  );
}
