import { useState, useEffect } from "react";
const useDebounce = (val, timeout) => {
  const [debouncedVal, setUseDebounceVal] = useState(val);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUseDebounceVal(val);
    }, timeout);
    return () => clearTimeout(timeoutId);
  }, [val]);
  return debouncedVal;
};
export default function App() {
  const [val, setVal] = useState("");
  const debouncedValue = useDebounce(val, 500);
  return (
    <>
      <h2>Debounced value is : {debouncedValue}</h2>
      <input type="text" onChange={(e) => setVal(e.target.value)}></input>
    </>
  );
}
