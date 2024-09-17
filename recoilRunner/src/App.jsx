// App.js
import {
  RecoilRoot,
  // useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import { counterAtom, countSelector } from "./store/atoms/count";
import "./App.css";

export default function App() {
  return (
    // important to wrap the top level with the provider
    // in this case, we'll wrap count with <RecoilRoot/>
    <>
      <RecoilRoot>
        <CountComp />
      </RecoilRoot>
    </>
  );
}

const CountComp = () => {
  console.log("CountComp rendered");
  return (
    <>
      <Count />
      <Button />
    </>
  );
};

const Count = () => {
  // Correctly using useRecoilValue to get the count value
  console.log("Count rendered");
  const count = useRecoilValue(counterAtom);
  const selectorValue = useRecoilValue(countSelector);
  return (
    <>
      <b>{count}</b>
      {/* render "it's even whenever count values become even" */}
      {selectorValue ? <h4>Count is even</h4> : null}
    </>
  );
};

//buttons
const Button = () => {
  // Correctly using useRecoilState to both get and set the count value
  //technically either buttons aren't necessary to re-render
  // const [count, setCount] = useRecoilState(counterAtom);
  const setCount = useSetRecoilState(counterAtom);
  console.log("Button rendered");
  return (
    <>
      {/* And convert this setCount(count + 1) to setCount( prevCount => prevCount + 1) */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </>
  );
};
