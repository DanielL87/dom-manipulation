import { useState } from "react";

export default function MirrorWords() {
  const [mirror, setMirror] = useState("");
  console.log(mirror);
  return (
    <div>
      <hr />
      <h1>Mirror</h1>
      <input
        type='text'
        onChange={(e) => {
          setMirror(e.target.value);
        }}
      />
      <p>{mirror}</p>
    </div>
  );
}
