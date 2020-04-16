export default interface VoiceDataQueryResult {
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
