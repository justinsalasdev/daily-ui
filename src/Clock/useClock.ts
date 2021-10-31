import { useEffect, useRef, useState } from "react";

type Position = {
  sec: number;
  min: number;
  hour: number;
};

export default function useClock() {
  const dateRef = useRef<Date>(new Date());
  const idRef = useRef(0);
  const [pos, setPos] = useState(getPos(dateRef.current));

  useEffect(() => {
    requestAnimationFrame(function rotate() {
      setPos(getPos(new Date()));
      idRef.current = requestAnimationFrame(rotate);
    });
    return () => cancelAnimationFrame(idRef.current);
  }, []);

  return pos;
}

function getPos(date: Date): Position {
  // console.log(date.getSeconds(), date.getMinutes(), date.getHours());
  const millis = date.getUTCMilliseconds() / 1000;
  const sec = (date.getSeconds() / 60) * 360 + millis * 6;
  const min = (date.getMinutes() / 60) * 360 + (sec / 360) * 6;
  const hour = (date.getHours() / 12) * 360 + (min / 360) * 30;
  return { sec, min, hour };
}
