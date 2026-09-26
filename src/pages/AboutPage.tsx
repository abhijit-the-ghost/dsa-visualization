import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Rocket,
  ShieldCheck,
  MapPin,
  // Linkedin,
  // Twitter,
  Mail,
  Globe,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { LinkedinIcon } from "@/components/ui/LinkedInIcon";
import { YoutubeIcon } from "@/components/ui/YouTubeIcon";

const repositoryUrl = "https://github.com/abhijit-the-ghost/dsa-visualization";
const developerUrl = "https://github.com/abhijit-the-ghost";

const currentFeatures = [
  "Bubble Sort with step-by-step playback",
  "Insertion Sort with a growing sorted prefix",
  "Live source-line highlighting and explanations",
  "DaisyUI themes saved on your device",
];

const roadmapItems = [
  "Linear Search and Binary Search",
  "Linked Lists, Trees, and Graphs",
  "More sorting algorithms and comparisons",
  "Saved preferences and deeper progress tracking",
];

export function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-3xl space-y-4">
        <span className="badge badge-primary badge-outline">
          About the project
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
          Learning should show the work.
        </h1>
        <p className="text-lg leading-8 text-base-content/70">
          DSA Visualization is an educational playground for understanding data
          structures and algorithms one decision at a time. Instead of only
          showing the final answer, it connects the animation, the active source
          line, and a plain-language explanation.
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {/* About Me Card */}
        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body gap-5">
            <div className="flex items-start gap-4">
              <div className="avatar placeholder">
                <div className="w-16 rounded-full bg-primary text-primary-content ring ring-primary/20">
                  <span className="text-xl font-bold">AG</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                  Developer & Maintainer
                </p>
                <h2 className="text-2xl font-bold">Abhijit "Ghost" Guragain</h2>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-base-content/60">
                  <MapPin size={14} />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="leading-7 text-base-content/80">
                I'm a web developer specializing in{" "}
                <span className="font-semibold text-primary">React</span> and{" "}
                <span className="font-semibold text-primary">Next.js</span>. I
                build tools that make complex concepts visual, intuitive, and
                beginner-friendly.
              </p>
              <p className="leading-7 text-base-content/70 text-sm">
                When I'm not debugging or pushing pixels, you can usually find
                me playing chess, strumming the guitar, or exploring new games.
                I believe great software is built with both logic and a touch of
                creativity.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm gap-2"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abhijit-guragain/" // Replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm gap-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@abhijitguragain8639" // Replace with your actual YouTube URL
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm gap-2"
                aria-label="YouTube Profile"
              >
                <YoutubeIcon size={18} />
                <span className="hidden sm:inline">YouTube</span>
              </a>
              <a
                href="mailto:abhijitguragain546@gmail.com" // Replace with your actual email
                className="btn btn-ghost btn-sm gap-2"
                aria-label="Email Me"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="https://abhijitguragain.com.np" // Replace with your actual portfolio URL
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm gap-2"
                aria-label="Portfolio Website"
              >
                <Globe size={18} />
                <span className="hidden sm:inline">Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Why This Exists Card */}
        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body gap-5">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-secondary/10 p-2 text-secondary">
                <BookOpen size={22} />
              </div>
              <div>
                <h2 className="card-title">Why this exists</h2>
                <p className="text-sm leading-6 text-base-content/70">
                  Algorithms can feel abstract when a program only prints a
                  sorted array. This project makes the intermediate decisions
                  visible and explains the reasoning behind them.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-box bg-base-200 p-4 transition-colors hover:bg-base-300">
                <Code2 size={18} className="text-primary" />
                <h3 className="mt-2 font-semibold">Code you can follow</h3>
                <p className="mt-1 text-sm text-base-content/70">
                  Each frame points back to the line that produced it.
                </p>
              </div>
              <div className="rounded-box bg-base-200 p-4 transition-colors hover:bg-base-300">
                <Rocket size={18} className="text-primary" />
                <h3 className="mt-2 font-semibold">Learn by experimenting</h3>
                <p className="mt-1 text-sm text-base-content/70">
                  Change the data, pause the animation, and test your
                  understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Important things to know
          </p>
          <h2 className="text-2xl font-bold">Project status and principles</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body gap-4">
              <h3 className="card-title">Available now</h3>
              <ul className="space-y-3 text-sm text-base-content/70">
                {currentFeatures.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body gap-4">
              <h3 className="card-title">On the roadmap</h3>
              <ul className="space-y-3 text-sm text-base-content/70">
                {roadmapItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-warning" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-5">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-success/10 p-2 text-success">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="card-title">Quality and privacy</h2>
              <p className="text-sm leading-6 text-base-content/70">
                The project keeps the learning experience focused: no account is
                required, and the selected theme stays in your browser using
                local storage. Husky checks lint and the production build before
                changes are pushed.
              </p>
            </div>
          </div>
          <div className="rounded-box bg-base-200 p-4 font-mono text-xs leading-6 text-base-content/75">
            <p>git clone {repositoryUrl}</p>
            <p>cd dsa-visualization</p>
            <p>bun install</p>
            <p>bun run dev</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-5 rounded-box bg-neutral p-6 text-neutral-content sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold">Explore the source on GitHub</h2>
          <p className="mt-1 text-sm text-neutral-content/70">
            Read the code, suggest an improvement, or follow the next algorithm.
          </p>
        </div>
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary gap-2"
        >
          <GithubIcon size={18} />
          Open repository
          <ArrowUpRight size={16} />
        </a>
      </section>
    </div>
  );
}
