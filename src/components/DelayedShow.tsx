import react, { useState, useEffect, ReactChild } from "react";

type Props = {
  delayMs: number;
  children?: ReactChild | ReactChild[] | null;
};

export default (props: Props) => {
  const [painting, setPainting] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPainting(true);
    }, props.delayMs);
  }, []);

  return (
    <div
      style={{
        visibility: !painting ? "hidden" : "visible",
      }}
    >
      {props.children}
    </div>
  );
};
