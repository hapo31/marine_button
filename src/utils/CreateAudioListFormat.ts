import ObjetAssignWithDefaultValue, {
  ObjectArg,
} from "./ObjectAssignWithDefaultValue";

type SafetyCreateAudioListOptios = {
  groupIndex: number;
  groupName: string;
  folderIndex: number;
  buttonIndex: number;
};

type CreateAudioListOptios = ObjectArg<SafetyCreateAudioListOptios>;

export default (fileName: string, opts?: CreateAudioListOptios) => {
  const optsDest = ObjetAssignWithDefaultValue(
    {
      groupIndex: 0,
      groupName: "Sample",
      folderIndex: 0,
      buttonIndex: 0,
    },
    opts
  );

  return `${optsDest.groupIndex}_${optsDest.groupName}/${optsDest.folderIndex}/${optsDest.buttonIndex}_${fileName}`;
};
