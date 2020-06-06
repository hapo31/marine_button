import React from "react";
import { useState } from "react";

export default function useInputWithValue<ValueType = string>(type: string) {
  const [value, setValue] = useState<ValueType | null>(null);
  return [
    value,
    <input
      type={type}
      onChange={event => {
        const input = event.target as HTMLInputElement;
        /* eslint-disable */
        setValue(input.value as any);
      }}
    />,
  ] as const;
}
