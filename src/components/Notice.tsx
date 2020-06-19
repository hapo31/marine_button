import React, { CSSProperties } from "react";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
  style?: CSSProperties;
};

export default (props: Props) => {
  if (props.children) {
    return (
      <>
        <div className="font-weight-bold notice-title">お知らせ</div>
        <div className="border rounded notice-content text-mid font-weight-bold">
          {React.Children.map(props.children, child => (
            <div className="notice-content monospace">{child}</div>
          ))}
        </div>
        <div className="last-updated-info"></div>
      </>
    );
  } else {
    return <></>;
  }
};
