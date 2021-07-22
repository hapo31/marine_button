import React from "react";
import { useDispatch } from "react-redux";
import { PlayAudioAction } from "../../actions/PlayAudioActions";
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
        {props.groups.map((group, i) => (
          <div key={`group-${i}`} className="btn-container">
            {group.map(button => {
              return (
                <VoiceButton
                  key={button.path + button.label}
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
