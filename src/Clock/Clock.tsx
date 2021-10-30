import "../base.sass";
import "./clock.sass";

export default function Clock() {
  return (
    <div className="container">
      <div className="clock">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <span
              className="mark"
              style={{ transform: `rotate(${(index + 1) * 30}deg)` }}
            ></span>
          ))}
      </div>
    </div>
  );
}
