import React, { useState } from "react";

type Props = {};

function useInputWithValue<ValueType = string>(type: string) {
  const [value, setValue] = useState<ValueType | null>(null);

  return [
    value,
    <input
      type={type}
      onChange={event => {
        const input = event.target as HTMLInputElement;
        setValue(input.value as any);
      }}
    />,
  ] as const;
}

export default (props: Props) => {
  const [fileValue, fileInput] = useInputWithValue<File>("file");
  const [textValue, textInput] = useInputWithValue<string>("text");

  return (
    <div className="text-large">
      <div>
        音声ファイル選択
        {fileInput}
        {fileValue}
      </div>
      <div>
        音声の名前
        {textInput}
        {textValue}
      </div>
      プレビュー
    </div>
  );
};
