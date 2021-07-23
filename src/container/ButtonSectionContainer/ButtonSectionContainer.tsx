import React from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { AddHistory } from "src/actions/AppActions";
import { AudioData } from "src/state/AppState";
import { PlayAudioAction } from "../../actions/PlayAudioActions";
import VoiceButton from "../../components/VoiceButton";

type Props = {
  title: string;
  groups: AudioData[][];
};

export default ({ title, groups }: Props) => {
  const dispatch = useDispatch();
  const isShowSection = useMemo(
    () => groups.reduce((prev, curr) => [...prev, ...curr], []).length > 0,
    [groups]
  );
  return (
    <>
      <div className="group-description text-mid">{title}</div>
      {isShowSection ? (
        <section className="border">
          {groups.map((group, i) => (
            <div key={`group-${i}`} className="btn-container">
              {group.map(button => {
                return (
                  <VoiceButton
                    key={button.path + button.label}
                    onclick={() => {
                      dispatch(PlayAudioAction(button.path));
                      dispatch(AddHistory(button));
                    }}
                  >
                    {button.label}
                  </VoiceButton>
                );
              })}
            </div>
          ))}
        </section>
      ) : null}
    </>
  );
};
