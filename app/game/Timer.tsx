"use client";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-semibold text-zinc-800">
      {seconds > 0 ? (
        <h1>Temps restant : {seconds} secondes</h1>
      ) : (
        <h1>Le temps est écoulé !</h1>
      )}
    </div>
  );
}
