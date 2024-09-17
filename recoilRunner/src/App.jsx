// App.js
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { counterAtom } from "./store/atoms/count";
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
  return (
    <>
      <Count />
      <Button />
    </>
  );
};

const Count = () => {
  // Correctly using useRecoilValue to get the count value
  const count = useRecoilValue(counterAtom);
  return (
    <>
      <b>{count}</b>
    </>
  );
};

//buttons
const Button = () => {
  // Correctly using useRecoilState to both get and set the count value
  const [count, setCount] = useRecoilState(counterAtom);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};
