import { BookOpen, Lightbulb } from "lucide-react";

const insertionSortSteps = [
  {
    title: "Choose the next value",
    description:
      "Start with the second value. Everything before it is already a sorted prefix.",
  },
  {
    title: "Compare and move left",
    description:
      "Compare the chosen value with the value to its left. Move it left while the left value is larger.",
  },
  {
    title: "Insert and grow the prefix",
    description:
      "Place the value in the first position where it belongs. The sorted prefix grows by one each time.",
  },
];

export function InsertionSortGuide() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-5">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="card-title">How Insertion Sort works</h2>
              <p className="text-sm text-base-content/70">
                Insertion Sort builds a sorted section one value at a time,
                similar to arranging playing cards in your hand.
              </p>
            </div>
          </div>

          <ol className="space-y-4">
            {insertionSortSteps.map((step, index) => (
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
              The green bars show the growing sorted prefix. They are sorted
              relative to one another, but they may still move in later steps.
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
            <code>{`for i from 1 to n - 1:
  current = values[i]
  j = i - 1
  while j >= 0 and values[j] > current:
    swap(values[j], values[j + 1])
    j = j - 1
  values[j + 1] = current`}</code>
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
              Yellow marks the value being compared, red marks a move to the
              left, and green marks the sorted prefix.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
