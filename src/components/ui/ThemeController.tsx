import { Check, Palette } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { themeOptions } from "@/lib/themes";
import { cn } from "@/lib/utils";

export function ThemeController() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="btn btn-ghost btn-sm btn-square"
        aria-label="Choose color theme"
        title="Choose color theme"
      >
        <Palette size={20} />
      </button>

      <ul
        tabIndex={0}
        className="dropdown-content menu z-50 mt-2 max-h-96 w-56 overflow-y-auto rounded-box border border-base-300 bg-base-200 p-2 shadow-lg"
        aria-label="Color themes"
      >
        <li className="menu-title">Color theme</li>
        {themeOptions.map((option) => {
          const isActive = theme === option.value;

          return (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => setTheme(option.value)}
                className={cn(
                  "flex items-center justify-between gap-3",
                  isActive && "active",
                )}
                aria-pressed={isActive}
              >
                <span className="flex items-center gap-3">
                  <span
                    data-theme={option.value}
                    className="flex size-5 overflow-hidden rounded-full border border-base-content/20"
                    aria-hidden="true"
                  >
                    <span className="flex-1 bg-primary" />
                    <span className="flex-1 bg-secondary" />
                    <span className="flex-1 bg-accent" />
                  </span>
                  {option.label}
                </span>
                {isActive && <Check size={16} />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
