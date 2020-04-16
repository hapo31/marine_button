import React from "react";

type Props = {
  chidren?: React.ReactChildren;
};

export default (props: Props) => (
  <div className="btn-container">{props.chidren}</div>
);
