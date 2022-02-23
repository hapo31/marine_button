/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

export default function useDebounce<Arg, Value>(
  callback: (...rest: Arg[]) => Value,
  delayMs: number
) {
  const timerRef = useRef<number>();

  const updateTimer = useCallback(
    (...rest: Arg[]) => {
      timerRef.current = window.setTimeout(async () => {
        await callback(...rest);
        timerRef.current = undefined;
      }, delayMs);
    },
    [callback, delayMs]
  );

  const debouncedFunc = useCallback(
    (...rest: Arg[]) => {
      if (timerRef.current == null) {
        updateTimer(...rest);
      } else {
        window.clearTimeout(timerRef.current);
        updateTimer(...rest);
      }
    },
    [updateTimer]
  );

  return [debouncedFunc];
}
