import { DependencyList, useEffect } from "react";

export const useDidMount = (func: () => void) =>
  useEffect(() => {
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
