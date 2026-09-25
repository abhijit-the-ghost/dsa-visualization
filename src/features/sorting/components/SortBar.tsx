import { cn } from "@/lib/utils";

interface SortBarProps {
  value: number;
  index: number;
  maxValue: number;
  isActive: boolean;
  isSorted: boolean;
  isSwapping: boolean;
}

export function SortBar({
  value,
  index,
  maxValue,
  isActive,
  isSorted,
  isSwapping,
}: SortBarProps) {
  const height = `${Math.max((value / maxValue) * 100, 4)}%`;
  const colorClass = isSwapping
    ? "bg-error"
    : isActive
      ? "bg-warning"
      : isSorted
        ? "bg-success"
        : "bg-primary";

  return (
    <div
      className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
      title={`Index ${index}: ${value}`}
      aria-label={`Index ${index}, value ${value}`}
    >
      <span className="text-xs font-medium text-base-content/70">{value}</span>
      <div
        className={cn(
          "w-full max-w-12 rounded-t-lg transition-all duration-200",
          colorClass,
          isActive && "ring-2 ring-warning-content/70",
        )}
        style={{ height }}
      />
    </div>
  );
}
