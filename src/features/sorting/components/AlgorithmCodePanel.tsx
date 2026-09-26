import { cn } from "@/lib/utils";

interface AlgorithmCodePanelProps {
  title: string;
  codeLines: string[];
  activeLine: number;
  description: string;
}

export function AlgorithmCodePanel({
  title,
  codeLines,
  activeLine,
  description,
}: AlgorithmCodePanelProps) {
  return (
    <section className="rounded-box border border-base-300 bg-base-200/40 p-4">
      <div className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Live source code
            </p>
            <h2 className="card-title">{title}</h2>
            <p className="text-sm text-base-content/70">
              The highlighted line is the operation that produced this frame.
            </p>
          </div>
          <span className="badge badge-primary badge-outline">
            Line {activeLine}
          </span>
        </div>

        <div className="grid gap-4">
          <div
            className="overflow-x-auto rounded-box bg-neutral p-3 text-neutral-content"
            role="region"
            aria-label={`${title} source code`}
          >
            <code className="block font-mono text-xs leading-6">
              {codeLines.map((line, index) => {
                const lineNumber = index + 1;
                const isActive = lineNumber === activeLine;

                return (
                  <span
                    key={`${lineNumber}-${line}`}
                    className={cn(
                      "flex gap-3 rounded px-2 py-1 transition-colors",
                      isActive
                        ? "bg-primary text-primary-content"
                        : "text-neutral-content/80",
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "w-5 shrink-0 select-none text-right",
                        isActive
                          ? "text-primary-content/70"
                          : "text-neutral-content/30",
                      )}
                    >
                      {lineNumber}
                    </span>
                    <span className="whitespace-pre">{line || " "}</span>
                  </span>
                );
              })}
            </code>
          </div>

          <div className="rounded-box border border-base-300 bg-base-200 p-4">
            <div className="flex items-center gap-2">
              <span className="badge badge-secondary badge-sm">Now</span>
              <span className="text-sm font-semibold">Line {activeLine}</span>
            </div>
            <p
              className="mt-3 text-sm leading-6 text-base-content/80"
              aria-live="polite"
            >
              {description}
            </p>
            <p className="mt-4 border-t border-base-300 pt-3 text-xs leading-5 text-base-content/60">
              Read the highlighted line together with the bars above. The
              explanation describes what the line is doing right now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
