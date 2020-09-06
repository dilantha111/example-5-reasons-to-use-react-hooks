import React, { useEffect } from "react";
import "./styles.css";

import { getCounts } from "./reactive-service";
import { useCount } from "./use-count";

export default function App() {
  const subject = getCounts();

  return (
    <div className="App">
      <ShowCount serviceSubject={subject} />
    </div>
  );
}

export function ShowCount(props) {
  const [count, setCount] = useCount(props.serviceSubject);

  useEffect(() => {
    setCount(-1);
  }, [setCount]);

  return (
    <div>
      <h1> Count : {count} </h1>
    </div>
  );
}
