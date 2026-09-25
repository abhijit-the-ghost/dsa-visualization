import type { VisualizationStep, VisualizationStatus } from "@/engine/types/visualization";

function createStep(
  values: number[],
  activeIndices: number[],
  sortedIndices: number[],
  status: VisualizationStatus,
  description: string,
  comparisons: number,
  swaps: number,
): VisualizationStep {
  return {
    values: [...values],
    activeIndices: [...activeIndices],
    sortedIndices: [...sortedIndices].sort((left, right) => left - right),
    status,
    description,
    comparisons,
    swaps,
  };
}

export function createInsertionSortSteps(
  input: readonly number[],
): VisualizationStep[] {
  const values = [...input];
  const sortedIndices = new Set<number>();
  const steps: VisualizationStep[] = [];
  let comparisons = 0;
  let swaps = 0;

  steps.push(
    createStep(
      values,
      [],
      [],
      "ready",
      "Ready to build a sorted prefix from left to right.",
      comparisons,
      swaps,
    ),
  );

  for (let index = 1; index < values.length; index += 1) {
    const currentValue = values[index];
    let position = index - 1;

    steps.push(
      createStep(
        values,
        [index],
        [...sortedIndices],
        "ready",
        `Select ${currentValue} and find its place in the sorted prefix.`,
        comparisons,
        swaps,
      ),
    );

    while (position >= 0) {
      const leftValue = values[position];
      comparisons += 1;

      steps.push(
        createStep(
          values,
          [position, position + 1],
          [...sortedIndices],
          "comparing",
          `Compare ${leftValue} with ${currentValue}.`,
          comparisons,
          swaps,
        ),
      );

      if (leftValue <= currentValue) {
        break;
      }

      [values[position], values[position + 1]] = [
        values[position + 1],
        values[position],
      ];
      swaps += 1;

      steps.push(
        createStep(
          values,
          [position, position + 1],
          [...sortedIndices],
          "swapping",
          `Move ${currentValue} left past ${leftValue}.`,
          comparisons,
          swaps,
        ),
      );
      position -= 1;
    }

    values[position + 1] = currentValue;

    for (let sortedIndex = 0; sortedIndex <= index; sortedIndex += 1) {
      sortedIndices.add(sortedIndex);
    }

    steps.push(
      createStep(
        values,
        [],
        [...sortedIndices],
        "sorted",
        `Inserted ${currentValue} at position ${position + 1}. The prefix is sorted.`,
        comparisons,
        swaps,
      ),
    );
  }

  for (let index = 0; index < values.length; index += 1) {
    sortedIndices.add(index);
  }

  steps.push(
    createStep(
      values,
      [],
      [...sortedIndices],
      "complete",
      "The array is sorted in ascending order.",
      comparisons,
      swaps,
    ),
  );

  return steps;
}
