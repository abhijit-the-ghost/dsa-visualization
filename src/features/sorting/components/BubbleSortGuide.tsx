import { BookOpen, Lightbulb } from "lucide-react";

const bubbleSortSteps = [
  {
    title: "Compare neighbors",
    description:
      "Start at the beginning and compare each value with the value immediately after it.",
  },
  {
    title: "Swap when out of order",
    description:
      "If the left value is larger, swap the pair. This moves larger values toward the end.",
  },
  {
    title: "Repeat each pass",
    description:
      "After a pass, the largest remaining value is in its final position. Stop early if a pass makes no swaps.",
  },
];

export function BubbleSortGuide() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-5">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="card-title">How Bubble Sort works</h2>
              <p className="text-sm text-base-content/70">
                Bubble Sort repeatedly moves the largest unsorted value to the
                right, like a bubble rising through water.
              </p>
            </div>
          </div>

          <ol className="space-y-4">
            {bubbleSortSteps.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="badge badge-primary badge-lg shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-base-content/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="alert border border-info/20 bg-info/10 text-sm">
            <Lightbulb size={18} className="shrink-0 text-info" />
            <span>
              A full pass can place one value in its final position. The
              visualizer uses an early exit when a pass makes no swaps.
            </span>
          </div>
        </div>
      </div>

      <div className="card border border-base-300 bg-neutral text-neutral-content shadow-sm">
        <div className="card-body gap-5">
          <div>
            <h2 className="card-title">Pseudocode</h2>
            <p className="text-sm text-neutral-content/70">
              The core loop behind the animation.
            </p>
          </div>

          <pre className="overflow-x-auto rounded-box bg-neutral-content/10 p-4 text-xs leading-6">
            <code>{`for end from n - 1 down to 1:
  swapped = false
  for i from 0 to end - 1:
    if values[i] > values[i + 1]:
      swap(values[i], values[i + 1])
      swapped = true
  if not swapped:
    break`}</code>
          </pre>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-box bg-neutral-content/10 p-3">
              <p className="text-neutral-content/60">Best case</p>
              <p className="font-mono text-lg">O(n)</p>
            </div>
            <div className="rounded-box bg-neutral-content/10 p-3">
              <p className="text-neutral-content/60">Average / worst</p>
              <p className="font-mono text-lg">O(n²)</p>
            </div>
            <div className="rounded-box bg-neutral-content/10 p-3">
              <p className="text-neutral-content/60">Extra space</p>
              <p className="font-mono text-lg">O(1)</p>
            </div>
            <div className="rounded-box bg-neutral-content/10 p-3">
              <p className="text-neutral-content/60">Stable</p>
              <p className="font-mono text-lg">Yes</p>
            </div>
          </div>

          <div className="border-t border-neutral-content/20 pt-4 text-sm text-neutral-content/70">
            <p className="font-semibold text-neutral-content">Reading the bars</p>
            <p className="mt-1">
              Yellow marks a comparison, red marks a swap, and green marks a
              value that has reached its final position.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
