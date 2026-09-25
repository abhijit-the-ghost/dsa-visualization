import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, isMobile, onClose }: SidebarProps) {
  const [expanded, setExpanded] = useState<string[]>(
    navigation.map((cat) => cat.label),
  );

  const toggleCategory = (label: string) => {
    setExpanded((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed top-16 left-0 bottom-0 w-64 z-40",
          "bg-base-100 border-r border-base-300",
          "overflow-y-auto",
          "transition-transform duration-300 ease-in-out",
          isOpen || !isMobile ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="p-4 space-y-1">
          {navigation.map((category) => {
            const Icon = category.icon;
            const isExpanded = expanded.includes(category.label);
            const isEmpty = category.children.length === 0;
            const isComingSoon = category.isComingSoon || isEmpty;

            return (
              <div key={category.label}>
                <button
                  onClick={() => !isComingSoon && toggleCategory(category.label)}
                  disabled={isComingSoon}
                  className={cn(
                    "w-full flex items-center justify-between",
                    "px-3 py-2 rounded-lg text-sm font-medium",
                    "transition-colors",
                    isComingSoon
                      ? "text-base-content/40 cursor-not-allowed"
                      : "hover:bg-base-200",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="shrink-0" />
                    <span>{category.label}</span>
                  </div>

                  {!isComingSoon && (
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200",
                        isExpanded && "rotate-180",
                      )}
                    />
                  )}

                  {isComingSoon && (
                    <span className="badge badge-ghost badge-xs">soon</span>
                  )}
                </button>

                {!isComingSoon && isExpanded && (
                  <div className="ml-4 mt-1 pl-3 border-l border-base-300 space-y-1">
                    {category.children.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={isMobile ? onClose : undefined}
                        className={({ isActive }) =>
                          cn(
                            "block px-3 py-2 rounded-lg text-sm",
                            "transition-colors",
                            isActive
                              ? "bg-primary text-primary-content"
                              : "hover:bg-base-200",
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
