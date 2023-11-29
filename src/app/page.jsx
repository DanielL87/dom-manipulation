"use client";
import Counter from "@/components/counter.jsx";
import MirrorWords from "@/components/mirror-words.jsx";
import RaceCar from "@/components/race-car.jsx";
import StopWatch from "@/components/stopwatch.jsx";
import ToggleTheBox from "@/components/toggle-the-box.jsx";

export default function Home() {
  return (
    <div>
      <h1>Day 10</h1>
      <ToggleTheBox />
      <MirrorWords />
      <Counter />
      <RaceCar />
      <StopWatch />
    </div>
  );
}
