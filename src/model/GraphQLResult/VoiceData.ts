export interface VoiceDataQueryResult {
  data: VoiceData;
}

export default interface VoiceData {
  allFile: AllFile;
}

interface AllFile {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  name: string;
  relativePath: string;
}
