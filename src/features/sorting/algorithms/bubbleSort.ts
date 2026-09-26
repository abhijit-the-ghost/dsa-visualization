import type { VisualizationStep, VisualizationStatus } from "@/engine/types/visualization";

export const bubbleSortSourceCode = [
  "for end from n - 1 down to 1:",
  "  swapped = false",
  "  for i from 0 to end - 1:",
  "    if values[i] > values[i + 1]:",
  "      swap(values[i], values[i + 1])",
  "      swapped = true",
  "  if not swapped:",
  "    break",
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

export function createBubbleSortSteps(input: readonly number[]): VisualizationStep[] {
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
      "We are about to start. The bars show the values in the array, and the largest value will bubble toward the right.",
      comparisons,
      swaps,
    ),
  );

  for (let end = values.length - 1; end > 0; end -= 1) {
    let swappedThisPass = false;

    steps.push(
      createStep(
        values,
        [],
        [...sortedIndices],
        "ready",
        2,
        "Start a new pass. We remember whether any swap happens during this pass.",
        comparisons,
        swaps,
      ),
    );

    for (let index = 0; index < end; index += 1) {
      const leftValue = values[index];
      const rightValue = values[index + 1];
      comparisons += 1;

      steps.push(
        createStep(
          values,
          [index, index + 1],
          [...sortedIndices],
          "comparing",
          4,
          `Compare ${leftValue} on the left with ${rightValue} on the right. A swap is needed when the left value is larger.`,
          comparisons,
          swaps,
        ),
      );

      if (leftValue > rightValue) {
        [values[index], values[index + 1]] = [values[index + 1], values[index]];
        swaps += 1;
        swappedThisPass = true;

        steps.push(
          createStep(
            values,
            [index, index + 1],
            [...sortedIndices],
            "swapping",
            5,
            `Because ${leftValue} is greater than ${rightValue}, swap them. The smaller value moves left and the larger value moves right.`,
            comparisons,
            swaps,
          ),
        );
      }
    }

    sortedIndices.add(end);
    steps.push(
      createStep(
        values,
        [],
        [...sortedIndices],
        "sorted",
        7,
        `The pass is complete. The value ${values[end]} is the largest value in this part, so it stays in its final position.`,
        comparisons,
        swaps,
      ),
    );

    if (!swappedThisPass) {
      for (let index = 0; index <= end; index += 1) {
        sortedIndices.add(index);
      }

      steps.push(
        createStep(
          values,
          [],
          [...sortedIndices],
          "sorted",
          8,
          "No swaps happened during this pass, so the array is already sorted. We can stop early.",
          comparisons,
          swaps,
        ),
      );
      break;
    }
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
      8,
      "Every value is now in ascending order, so Bubble Sort is finished.",
      comparisons,
      swaps,
    ),
  );

  return steps;
}
