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
      "Ready to sort the array.",
      comparisons,
      swaps,
    ),
  );

  for (let end = values.length - 1; end > 0; end -= 1) {
    let swappedThisPass = false;

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
          `Compare ${leftValue} and ${rightValue}.`,
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
            `Swap ${leftValue} and ${rightValue}.`,
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
        `The value ${values[end]} is now in its final position.`,
        comparisons,
        swaps,
      ),
    );

    if (!swappedThisPass) {
      for (let index = 0; index <= end; index += 1) {
        sortedIndices.add(index);
      }
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
      "The array is sorted in ascending order.",
      comparisons,
      swaps,
    ),
  );

  return steps;
}
