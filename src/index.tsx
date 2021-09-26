import { h, render } from "preact";
import { useState } from "preact/hooks";

const HelloFromPreact = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
};

const appElement = document.getElementById("app");

if (appElement) {
  render(<HelloFromPreact />, appElement);
} else {
  throw new Error("Could not find HTML element with ID: app");
}
