# DSA Visualization

A browser-based workspace for learning data structures and algorithms through interactive visual explanations. The project is being built with React, TypeScript, Vite, Tailwind CSS, and DaisyUI.

> **Project status:** early scaffold
>
> The application now has a routed shell and working Bubble Sort and Insertion Sort visualizers. They use immutable algorithm frames, educational guides, manual stepping, playback, and persisted theme selection. Searching, shared visualization state, and the remaining data structures are still planned.

## What exists today

- A Vite-powered React 19 application mounted with `StrictMode`.
- TypeScript project references and bundler-oriented module resolution.
- Tailwind CSS 4 with all DaisyUI v5 themes enabled.
- React Compiler enabled through the Vite React/Babel configuration.
- A small `cn()` class-name utility built with `clsx` and `tailwind-merge`.
- A routed application shell with a responsive Header and collapsible Sidebar.
- Working `/sorting/bubble` and `/sorting/insertion` routes with frame-based visualizers.
- Educational guides for both sorting algorithms with plain-language steps, pseudocode, complexity, and animation legends.
- Playback controls, manual stepping, array generation, array sizing, and playback speed up to 6x.
- A DaisyUI theme controller with a persisted selection in `localStorage`.
- Navigation metadata for sorting, searching, and future data-structure areas.
- Early Header and Sidebar components with responsive and collapsible-navigation scaffolding.
- ESLint configuration for JavaScript/TypeScript, React Hooks, and React Refresh rules.
- Husky Git hooks for lint and production-build quality gates.

The Header and Sidebar are mounted by `PageLayout`. Bubble Sort and Insertion Sort provide interactive visualizers; the remaining navigation entries are roadmap items.

## Implemented and planned visualizations

The sorting modules are now functional:

- **Sorting**
  - Bubble Sort — adjacent comparisons and swaps, with a guide to the pass-by-pass process.
  - Insertion Sort — grows a sorted prefix by moving each new value left into place.

The next planned modules are:

- **Searching**
  - Linear Search
  - Binary Search
- **Future data structures**
  - Linked Lists
  - Trees
  - Graphs

Both sorting visualizers generate immutable frames from pure algorithm functions and share playback controls. The searching and data-structure modules remain placeholders.

## Getting started

### Requirements

Install a current Node.js LTS release supported by Vite 8. Bun is also supported; the repository includes a `bun.lock` file, so it is the most reproducible package-manager choice for this checkout.

### Run locally

Using Bun:

```bash
bun install
bun run dev
```

Using npm:

```bash
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

### Available scripts

| Command | Description |
| --- | --- |
| `bun run dev` / `npm run dev` | Start the Vite development server with hot module replacement |
| `bun run build` / `npm run build` | Run TypeScript project checks and create a production build |
| `bun run check` / `npm run check` | Run lint and the production build together |
| `bun run lint` / `npm run lint` | Run ESLint across the project |
| `bun run preview` / `npm run preview` | Serve the production build locally |

There is currently no test or formatting script configured.

## Themes

The palette button in the header switches between all built-in DaisyUI v5 themes. The selected theme is applied through `data-theme` on the document root and persisted under `dsa-visualization-theme` in `localStorage`.

To expose another built-in theme, add its value and label to `src/lib/themes.ts`. DaisyUI's CSS configuration uses `themes: all`, so no additional CSS theme registration is required for built-in themes.

## Git hooks

Husky runs repository checks automatically through Git hooks:

- `pre-commit` runs `npm run lint` for a fast quality check.
- `pre-push` runs `npm run check`, which runs both linting and the production build.

The hooks are configured in `.husky/` and initialized by the `prepare` package script. Run `bun install` or `npm install` after cloning so Git can activate them. The hook commands use the project scripts, so the same checks are available through either package manager.

## Project structure

```text
.husky/                       # Git lifecycle hooks
src/
├── app/
│   ├── App.tsx                 # Current application entry component
│   ├── providers.tsx           # Application providers, including theme state
│   └── router.tsx              # Route definitions
├── components/
│   ├── layout/                 # Header, Sidebar, and page shell components
│   └── ui/                     # Reusable UI components, icons, and theme control
├── engine/
│   └── types/                  # Shared visualization engine types
├── features/
│   ├── arrays/
│   │   ├── algorithms/         # Linear and binary search modules
│   │   └── components/         # Array visualizer components
│   └── sorting/
│       ├── algorithms/         # Bubble and insertion sort modules
│       └── components/         # Sorting visualizers, guides, and route pages
├── hooks/                      # Playback, keyboard-shortcut, and theme hooks
├── lib/                        # Navigation, theme, constants, and utilities
├── stores/                     # Visualization and preference state
├── types/                      # Shared application types
├── index.css                   # Tailwind and DaisyUI entry styles
└── main.tsx                    # React application bootstrap
```

The effective runtime path is:

```text
index.html
└── src/main.tsx
    └── src/app/App.tsx
        └── RouterProvider
            └── PageLayout
                ├── Header
                ├── Sidebar
                └── BubbleSortPage / InsertionSortPage
                    ├── Sorting guide
                    └── SortingVisualizer
                        └── SortBar
```

The visualization frame model lives in `src/engine/types/visualization.ts`. Algorithm frame generation lives in the sorting algorithm modules, while `SortingVisualizer` provides the shared playback UI.

## Technology

- React 19 and React DOM
- TypeScript 6
- Vite 8
- React Router DOM 7 (using `createBrowserRouter` and `RouterProvider`)
- Tailwind CSS 4
- DaisyUI 5 (all built-in themes)
- Lucide React icons
- `clsx` and `tailwind-merge`
- ESLint 10 with TypeScript, React Hooks, and React Refresh plugins
- React Compiler, enabled in `vite.config.ts`
- Husky 9 Git hooks

## Current limitations

- Bubble Sort and Insertion Sort are implemented; searching and the data-structure modules are not yet available.
- Visualization state is local to the shared sorting component; there is no persistent visualization store yet.
- Navigation entries for unimplemented modules describe the roadmap rather than available pages.
- The Header's search affordance and generic GitHub link are presentation-only at this stage.
- No automated tests, CI workflow, or additional package-manager metadata is currently included.

## Development workflow

Before submitting a change, run:

```bash
npm run check
```

This runs the same lint and production-build checks enforced by the pre-push hook. Vite may also report a non-fatal configuration warning about using `__dirname` in `vite.config.ts`; migrating that file to `import.meta.dirname` would remove that warning.
