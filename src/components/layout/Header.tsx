import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { ThemeController } from "@/components/ui/ThemeController";

interface HeaderProps {
  onMenuToggle: () => void;
  isMobile: boolean;
}

export const Header = ({ onMenuToggle, isMobile }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-base-300 bg-base-100">
      <div className=" navbar max-w-7xl mx-auto px-4 min-h-16">
        <div className="navbar-start">
          {isMobile && (
            <button
              onClick={onMenuToggle}
              className="btn btn-ghost btn-sm btn-square"
              aria-label="Toggle sidebar"
            >
              <Menu size={20} />
            </button>
          )}
          <Link to="/" className="flex items-center gap-2 ml-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-content font-bold text-sm">DS</span>
            </div>
            <span className="text-xl font-bold hidden sm:block">DSA Viz</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 ml-4">
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
            <span className="text-sm text-base-content/60">Search...</span>
          </div>
        </div>
        <div className="navbar-end flex items-center gap-1">
          <ThemeController />
          <a
            href="https://github.com/abhijit-the-ghost/dsa-visualization"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-square"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};
