import React, { useMemo } from "react";

type Props = {
  children?: React.ReactChild[];
};

export default (props: Props) => {
  const element = useMemo(() => <>{props.children}</>, []);

  return element;
};
