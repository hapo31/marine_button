import React from "react";

declare module "react-bootstrap-slider" {
  type Props = {
    value?: string | number;
    max?: number;
    min?: number;
    orientation?: "vertical" | "horizontal";
    step?: number;
    reversed?: boolean;
    disalbled?: "disabled";

    change?: React.MouseEventHandler<HTMLInputElement>;
    slideStart?: React.MouseEventHandler<HTMLInputElement>;
    slideStop?: React.MouseEventHandler<HTMLInputElement>;
  };
  export class ReactBootstrapSlider extends React.Component<Props> {}
}
