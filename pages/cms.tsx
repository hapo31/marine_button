import React, { useState } from "react";

type Props = {};

function useInputWithHandler(type: string) {
  const [value, setValue] = useState<string>(null);

  return [
    value,
    <input
      type={type}
      onChange={event => {
        const input = event.target as HTMLInputElement;
        setValue(input.value);
      }}
    />,
  ];
}

export default (props: Props) => {
  const [fileValue, fileInput] = useInputWithHandler("file");
  const [textValue, textInput] = useInputWithHandler("text");

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
