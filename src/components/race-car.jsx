import { useEffect, useState } from "react";

export default function RaceCar() {
  const [carPosition, setCarPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setCarPosition((carPosition) => carPosition - 5);
      } else if (e.key === "ArrowRight") {
        setCarPosition((carPosition) => carPosition + 5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Race</h1>
      <p>Move car to the right by pressing the right arrow</p>
      <div id="car" style={{ marginLeft: carPosition + "px" }}>
        🏎
      </div>
    </div>
  );
}
