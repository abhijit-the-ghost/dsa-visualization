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
  description: string;
  comparisons: number;
  swaps: number;
}
