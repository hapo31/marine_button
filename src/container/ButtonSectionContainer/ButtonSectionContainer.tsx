import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { AddHistory } from "src/actions/AppActions";
import { AudioData } from "src/state/AppState";
import { PlayAudioAction } from "../../actions/PlayAudioActions";
import VoiceButton from "../../components/VoiceButton";

type Props = {
  title: string;
  groups: AudioData[][];
  filter?: string;
};

export default function ButtonSectionContainer({
  title,
  groups: allGroups,
  filter,
}: Props) {
  const dispatch = useDispatch();

  const groups = useMemo(
    () =>
      allGroups
        .map(item =>
          item.filter(itemm => filter == null || itemm.label.includes(filter))
        )
        .filter(item => item.length > 0),
    [allGroups, filter]
  );

  const isShowSection = useMemo(
    () => groups.reduce((prev, curr) => [...prev, ...curr], []).length > 0,
    [groups]
  );

  return isShowSection ? (
    <>
      <div className="group-description text-mid">{title}</div>
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
    </>
  ) : null;
}
