import { useState, useEffect } from "react";

export function useCount(serviceSubject) {
  const [count, setCount] = useState();

  useEffect(() => {
    serviceSubject.subscribe((count) => {
      setCount(count);
    });
    return () => {
      serviceSubject.unsubscribe();
    };
  }, [serviceSubject]);

  return [count, setCount];
}
