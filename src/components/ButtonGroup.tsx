import { ReactNode } from "react";

type Props = {
  chidren?: ReactNode;
};

export default function ButtonGroup(props: Props) {
  return <div className="btn-container">{props.chidren}</div>;
}
