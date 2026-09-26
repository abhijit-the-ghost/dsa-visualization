export type VisualizationStatus =
  | "ready"
  | "comparing"
  | "swapping"
  | "sorted"
  | "complete";

export interface VisualizationStep {
  values: number[];
  activeIndices: number[];
  sortedIndices: number[];
  status: VisualizationStatus;
  /** One-based line number in the algorithm's displayed source code. */
  codeLine: number;
  description: string;
  comparisons: number;
  swaps: number;
}
