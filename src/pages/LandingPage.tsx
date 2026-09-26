import {
  ArrowRight,
  BookOpen,
  Code2,
  Gauge,
  Palette,
  Play,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "@/components/ui/GithubIcon";

const previewBars = [42, 24, 68, 35, 82, 51, 74, 30];
const previewCode = [
  "if values[i] > values[i + 1]:",
  "  swap(values[i], values[i + 1])",
  "  swapped = true",
];

const featureCards: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Play,
    title: "Step through the work",
    description:
      "Pause, replay, or move one comparison at a time instead of watching a black box.",
  },
  {
    icon: Code2,
    title: "See the active line",
    description:
      "The source code highlights the exact line producing the current frame.",
  },
  {
    icon: BookOpen,
    title: "Learn in plain language",
    description:
      "Every step explains what changed, why it changed, and what to notice next.",
  },
  {
    icon: Palette,
    title: "Make it yours",
    description:
      "Switch between DaisyUI themes and keep your choice on this device.",
  },
];

export function LandingPage() {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-primary badge-outline gap-2">
              <Sparkles size={14} />
              Interactive DSA learning
            </span>
            <span className="text-sm text-base-content/60">Built for beginners</span>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-base-content sm:text-5xl">
              See the algorithm. Understand the{" "}
              <span className="text-primary">why.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-base-content/70">
              DSA Visualization turns sorting and searching into a story you
              can follow. Watch values move, see the active code line, and
              learn one decision at a time.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/sorting/bubble"
              className="btn btn-primary gap-2"
            >
              Start with Bubble Sort
              <ArrowRight size={18} />
            </Link>
            <Link to="/sorting/insertion" className="btn btn-outline">
              Explore Insertion Sort
            </Link>
            <Link to="/about" className="btn btn-ghost">
              About the project
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-base-content/60">
            <span className="flex items-center gap-2">
              <Gauge size={16} className="text-primary" />
              Playback up to 6x
            </span>
            <span className="flex items-center gap-2">
              <Code2 size={16} className="text-primary" />
              Source-linked steps
            </span>
            <span className="flex items-center gap-2">
              <Palette size={16} className="text-primary" />
              Themeable interface
            </span>
          </div>
        </div>

        <div className="card overflow-hidden border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body gap-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Live preview
                </p>
                <h2 className="card-title">Watch a step happen</h2>
              </div>
              <span className="badge badge-success gap-1">
                <span className="size-1.5 rounded-full bg-success-content" />
                Ready to explore
              </span>
            </div>

            <div className="flex h-48 items-end gap-2 rounded-box bg-base-200 p-4">
              {previewBars.map((value, index) => (
                <div
                  key={`${value}-${index}`}
                  className="flex h-full flex-1 items-end"
                >
                  <div
                    className="w-full rounded-t-md bg-primary"
                    style={{ height: `${value}%` }}
                  />
                </div>
              ))}
            </div>

            <div className="rounded-box bg-neutral p-4 font-mono text-xs leading-6 text-neutral-content">
              {previewCode.map((line, index) => (
                <div
                  key={line}
                  className={
                    index === 0
                      ? "rounded bg-primary px-2 text-primary-content"
                      : "px-2 text-neutral-content/75"
                  }
                >
                  {line}
                </div>
              ))}
            </div>
            <p className="text-sm text-base-content/70">
              The highlighted line is the same line highlighted during the real
              visualization.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Start exploring
            </p>
            <h2 className="text-2xl font-bold">Choose your first algorithm</h2>
          </div>
          <Link to="/about" className="link link-primary text-sm">
            Learn more about the project
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/sorting/bubble"
            className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:border-primary"
          >
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <span className="badge badge-primary">Sorting</span>
                <ArrowRight size={18} className="text-base-content/50" />
              </div>
              <h3 className="card-title">Bubble Sort</h3>
              <p className="text-sm leading-6 text-base-content/70">
                Watch larger values bubble toward the end of the array, one
                adjacent comparison at a time.
              </p>
            </div>
          </Link>

          <Link
            to="/sorting/insertion"
            className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:border-primary"
          >
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <span className="badge badge-secondary">Sorting</span>
                <ArrowRight size={18} className="text-base-content/50" />
              </div>
              <h3 className="card-title">Insertion Sort</h3>
              <p className="text-sm leading-6 text-base-content/70">
                See how a sorted prefix grows as each new value moves into its
                correct place.
              </p>
            </div>
          </Link>

          <div className="card border border-dashed border-base-300 bg-base-100/60">
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <span className="badge badge-ghost gap-1">
                  <Search size={13} />
                  Coming soon
                </span>
              </div>
              <h3 className="card-title">Searching</h3>
              <p className="text-sm leading-6 text-base-content/60">
                Linear Search and Binary Search are next on the roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Made for understanding
          </p>
          <h2 className="text-2xl font-bold">More than an animation</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-6 text-base-content/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-5 rounded-box border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold">Want to follow along on GitHub?</h2>
          <p className="mt-1 text-sm text-base-content/70">
            See the project source, share feedback, and keep up with the next
            visualization.
          </p>
        </div>
        <a
          href="https://github.com/abhijit-the-ghost/dsa-visualization"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary gap-2"
        >
          <GithubIcon size={18} />
          View on GitHub
        </a>
      </section>
    </div>
  );
}
