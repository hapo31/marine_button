import React, { useCallback } from "react";
import AudioButton from "../../components/AudioButton";

type Props = {
  title: string;
  groups: {
    path: string;
    label: string;
  }[][];
};

export default (props: Props) => {
  const onclick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <div className="group-description text-mid">{props.title}</div>
      <section className="border">
        {props.groups.map(group => (
          <div className="btn-container">
            {group.map(button => {
              const size =
                button.label.length <= 7
                  ? "small"
                  : button.label.length <= 13
                  ? "mid"
                  : "large";
              return (
                <AudioButton
                  key={button.path + button.label}
                  size={size}
                  onclick={onclick}
                >
                  {button.label}
                </AudioButton>
              );
            })}
          </div>
        ))}
      </section>
    </>
  );
};
