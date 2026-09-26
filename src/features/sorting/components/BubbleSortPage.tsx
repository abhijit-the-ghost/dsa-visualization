import {
  bubbleSortSourceCode,
  createBubbleSortSteps,
} from "@/features/sorting/algorithms/bubbleSort";
import { BubbleSortGuide } from "@/features/sorting/components/BubbleSortGuide";
import { SortingVisualizer } from "@/features/sorting/components/SortingVisualizer";

export function BubbleSortPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <span className="badge badge-primary badge-outline">Sorting</span>
        <h1 className="text-3xl font-bold text-base-content">Bubble Sort</h1>
        <p className="max-w-2xl text-base-content/70">
          Compare adjacent values and swap them when they are out of order.
          Each pass places the largest remaining value in its final position.
        </p>
        <p className="text-sm text-base-content/60">
          Best case: O(n) with early exit · Average/worst: O(n²) · Extra space: O(1)
        </p>
      </header>

      <BubbleSortGuide />
      <SortingVisualizer
        createSteps={createBubbleSortSteps}
        codeTitle="Bubble Sort source"
        codeLines={bubbleSortSourceCode}
      />
    </section>
  );
}
