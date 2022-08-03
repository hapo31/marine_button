import { Children, CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
};

export default function Notice(props: Props) {
  if (props.children) {
    return (
      <article className="notice-container">
        <div className="font-weight-bold notice-title">お知らせ</div>
        <div className="border rounded text-mid font-weight-bold">
          {Children.map(props.children, child => (
            <div className="notice-content monospace">{child}</div>
          ))}
        </div>
      </article>
    );
  } else {
    return <></>;
  }
}
