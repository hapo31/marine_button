import { useEffect } from "react";

export const useDidMount = (func: () => void) =>
  useEffect(() => {
    func();
  }, []);
export const useWillUnMount = (func: () => void) => useEffect(() => func, []);
