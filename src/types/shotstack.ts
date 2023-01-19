export interface Soundtrack {
  src: string;
  effect: string;
}

export interface Transition {
  in: string;
  out: string;
}
export interface Offset {
  x: number;
  y: number;
}
export interface Asset {
  type: string;
  text?: string;
  style?: string;
  html?: string;
  css?: string;
  width?: number;
  height?: number;
  src?: string;
  trim?: number;
}
export interface Clip {
  asset: Asset;
  start: number;
  length: number;
  transition?: Transition;
  fit?: string;
  scale?: number;
  offset?: Offset;
  position?: string;
  effect?: string;
}
export interface Track {
  clips: Array<Clip>;
}
export interface Size {
  width: number;
  height: number;
}
export interface Output {
  format: string;
  size?: Size;
  resolution: string;
}
export interface Timeline {
  soundtrack: Soundtrack;
  background: string;
  tracks: Array<Track>;
}
export interface InputBody {
  timeline: Timeline;
  output: Output;
}