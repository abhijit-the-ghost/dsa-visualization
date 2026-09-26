import type { VisualizationStep, VisualizationStatus } from "@/engine/types/visualization";

export const insertionSortSourceCode = [
  "for i from 1 to n - 1:",
  "  current = values[i]",
  "  j = i - 1",
  "  while j >= 0 and values[j] > current:",
  "    swap(values[j], values[j + 1])",
  "    j = j - 1",
  "  values[j + 1] = current",
];

function createStep(
  values: number[],
  activeIndices: number[],
  sortedIndices: number[],
  status: VisualizationStatus,
  codeLine: number,
  description: string,
  comparisons: number,
  swaps: number,
): VisualizationStep {
  return {
    values: [...values],
    activeIndices: [...activeIndices],
    sortedIndices: [...sortedIndices].sort((left, right) => left - right),
    status,
    codeLine,
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
      1,
      "We are about to start. We will build a sorted section from left to right.",
      comparisons,
      swaps,
    ),
  );

  for (let index = 1; index < values.length; index += 1) {
    const currentValue = values[index];
    const startingPosition = index;
    let position = index - 1;

    steps.push(
      createStep(
        values,
        [index],
        [...sortedIndices],
        "ready",
        2,
        `Choose ${currentValue}. The values before it are already a sorted prefix, so we find where ${currentValue} belongs.`,
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
          4,
          `Compare ${leftValue} with ${currentValue}. If the left value is larger, ${currentValue} needs to move left.`,
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
          5,
          `${leftValue} is larger than ${currentValue}, so move ${currentValue} one place left and continue checking.`,
          comparisons,
          swaps,
        ),
      );
      position -= 1;
    }

    values[position + 1] = currentValue;
    const didMove = position !== startingPosition;

    for (let sortedIndex = 0; sortedIndex <= index; sortedIndex += 1) {
      sortedIndices.add(sortedIndex);
    }

    steps.push(
      createStep(
        values,
        [],
        [...sortedIndices],
        "sorted",
        7,
        didMove
          ? `${currentValue} has been inserted into position ${position + 1}. The values through index ${index} are now sorted.`
          : `${currentValue} is already in the right place. The values through index ${index} are now sorted.`,
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
      7,
      "Every value has been inserted into the sorted prefix, so Insertion Sort is finished.",
      comparisons,
      swaps,
    ),
  );

  return steps;
}
