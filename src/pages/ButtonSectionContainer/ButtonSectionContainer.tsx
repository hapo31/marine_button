import React from "react";
import ButtonSectionModel from "../../model/AudioFile/AudioFile";

type Props = {
  buttonSection: ButtonSectionModel;
  chidren?: React.ReactChildren;
};

export default (props: Props) => (
  <section className="border">{props.chidren}</section>
);
