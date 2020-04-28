import React from "react";

type Props = {
  children?: React.ReactChild;
};

export default (props: Props) => {
  if (props.children) {
    return (
      <>
        <div className="font-weight-bold notice-title">お知らせ</div>
        <div className="last-updated-info">
          <div className="border rounded notice-content">
            {React.Children.map(props.children, child => (
              <span className="monospace text-very-small font-weight-bold">
                {child}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
