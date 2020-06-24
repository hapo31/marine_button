export default interface AudioFile {
  path: string;

  children?: AudioFile[];
}
