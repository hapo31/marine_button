import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { PlayAudioAction } from "../../actions/Actions";
import VoiceButton from "../../components/VoiceButton";

type Props = {
  title: string;
  groups: {
    path: string;
    label: string;
  }[][];
};

export default (props: Props) => {
  const dispatch = useDispatch();
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
                <VoiceButton
                  key={button.path + button.label}
                  size={size}
                  onclick={() => dispatch(PlayAudioAction(button.path))}
                >
                  {button.label}
                </VoiceButton>
              );
            })}
          </div>
        ))}
      </section>
    </>
  );
};
