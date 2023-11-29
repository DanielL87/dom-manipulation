import { useState } from "react";

function ToggleTheBox() {
  const [isBlue, setIsBlue] = useState(false);
  function toggleBox() {
    setIsBlue(!isBlue);
  }
  return (
    <div>
      <hr />
      <h1>Toggle The Box</h1>
      <div
        className={isBlue ? "blue-box" : "white-box"}
        onClick={() => {
          toggleBox();
        }}></div>
    </div>
  );
}
export default ToggleTheBox;
