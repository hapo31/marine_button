import React, { CSSProperties } from "react";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
  style?: CSSProperties;
};

export default function Notice(props: Props) {
  if (props.children) {
    return (
      <article className="notice-container">
        <div className="font-weight-bold notice-title">お知らせ</div>
        <div className="border rounded text-mid font-weight-bold">
          {React.Children.map(props.children, child => (
            <div className="notice-content monospace">{child}</div>
          ))}
        </div>
      </article>
    );
  } else {
    return <></>;
  }
}
