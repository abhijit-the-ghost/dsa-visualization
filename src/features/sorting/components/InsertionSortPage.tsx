import { createInsertionSortSteps } from "@/features/sorting/algorithms/insertionSort";
import { InsertionSortGuide } from "@/features/sorting/components/InsertionSortGuide";
import { SortingVisualizer } from "@/features/sorting/components/SortingVisualizer";

export function InsertionSortPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <span className="badge badge-primary badge-outline">Sorting</span>
        <h1 className="text-3xl font-bold text-base-content">
          Insertion Sort
        </h1>
        <p className="max-w-2xl text-base-content/70">
          Build a sorted prefix from left to right by inserting each value
          into its correct position.
        </p>
        <p className="text-sm text-base-content/60">
          Best case: O(n) · Average/worst: O(n²) · Extra space: O(1)
        </p>
      </header>

      <InsertionSortGuide />
      <SortingVisualizer
        createSteps={createInsertionSortSteps}
        operationLabel="Moves"
        swappingLabel="Moving"
        sortedStatusLabel="Prefix sorted"
      />
    </section>
  );
}
