import React, { useMemo } from "react";

type Props = {
  children: React.ReactChildren;
};

export default (props: Props) => {
  const element = useMemo(() => props.children, []);

  return element;
};
