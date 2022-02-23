/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

export default function useDebounce<
  T extends (...args: any[]) => Promise<void> | void
>(callback: T, delayMs: number) {
  const timerRef = useRef<number>();

  const updateTimer = useCallback(
    (...args: any[]) => {
      timerRef.current = window.setTimeout(async () => {
        await callback(...args);
        timerRef.current = undefined;
      }, delayMs);
    },
    [callback, delayMs]
  );

  const debouncedFunc = useCallback(
    (...args: any[]) => {
      if (timerRef.current == null) {
        updateTimer(...args);
      } else {
        window.clearTimeout(timerRef.current);
        updateTimer(...args);
      }
    },
    [updateTimer]
  );

  return [debouncedFunc];
}
