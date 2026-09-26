import { useCallback, useState, type ChangeEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RefreshCw,
  RotateCcw,
} from "lucide-react";
import { usePlayback } from "@/hooks/usePlayback";
import type {
  VisualizationStatus,
  VisualizationStep,
} from "@/engine/types/visualization";
import { AlgorithmCodePanel } from "@/features/sorting/components/AlgorithmCodePanel";
import { SortBar } from "@/features/sorting/components/SortBar";

const DEFAULT_INITIAL_VALUES = [42, 18, 65, 31, 77, 24, 53, 12, 89, 37];
const MIN_ARRAY_SIZE = 5;
const MAX_ARRAY_SIZE = 20;
const MIN_SPEED = 0.5;
const MAX_SPEED = 6;
const MIN_VALUE = 10;
const MAX_VALUE = 100;

type StepGenerator = (values: readonly number[]) => VisualizationStep[];

interface SortingVisualizerProps {
  createSteps: StepGenerator;
  codeTitle: string;
  codeLines: string[];
  initialValues?: number[];
  operationLabel?: string;
  swappingLabel?: string;
  sortedStatusLabel?: string;
}

const statusLabels: Record<VisualizationStatus, string> = {
  ready: "Ready",
  comparing: "Comparing",
  swapping: "Swapping",
  sorted: "Pass complete",
  complete: "Sorted",
};

function generateArray(size: number) {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE,
  );
}

export function SortingVisualizer({
  createSteps,
  codeTitle,
  codeLines,
  initialValues = DEFAULT_INITIAL_VALUES,
  operationLabel = "Swaps",
  swappingLabel = "Swapping",
  sortedStatusLabel = "Pass complete",
}: SortingVisualizerProps) {
  const [values, setValues] = useState<number[]>(() => [...initialValues]);
  const [steps, setSteps] = useState(() => createSteps(values));
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const lastStep = steps.length - 1;
  const currentFrame = steps[currentStep] ?? steps[0];
  const isAtEnd = currentStep >= lastStep;
  const isPlaybackActive = isPlaying && !isAtEnd;
  const maxValue = Math.max(...currentFrame.values, 1);
  const progress = lastStep === 0 ? 100 : (currentStep / lastStep) * 100;
  const currentStatusLabel =
    currentFrame.status === "sorted"
      ? sortedStatusLabel
      : statusLabels[currentFrame.status];

  const resetVisualization = (nextValues: number[]) => {
    setValues(nextValues);
    setSteps(createSteps(nextValues));
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleShuffle = () => {
    resetVisualization(generateArray(values.length));
  };

  const handleReset = () => {
    resetVisualization(values);
  };

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextSize = Number(event.target.value);
    resetVisualization(generateArray(nextSize));
  };

  const handleSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value));
  };

  const handlePlaybackStep = useCallback(() => {
    setCurrentStep((step) => Math.min(step + 1, lastStep));
  }, [lastStep]);

  usePlayback({
    isPlaying: isPlaybackActive,
    currentStep,
    totalSteps: steps.length,
    speed,
    onStep: handlePlaybackStep,
  });

  const handlePlayToggle = () => {
    if (isPlaybackActive) {
      setIsPlaying(false);
      return;
    }

    if (isAtEnd) {
      setCurrentStep(0);
    }

    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setIsPlaying(false);
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const handleNext = () => {
    setIsPlaying(false);
    handlePlaybackStep();
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="stat rounded-box border border-base-300 bg-base-100">
          <div className="stat-title">Step</div>
          <div className="stat-value text-2xl">{currentStep + 1}</div>
          <div className="stat-desc">of {steps.length}</div>
        </div>
        <div className="stat rounded-box border border-base-300 bg-base-100">
          <div className="stat-title">Comparisons</div>
          <div className="stat-value text-2xl">{currentFrame.comparisons}</div>
        </div>
        <div className="stat rounded-box border border-base-300 bg-base-100">
          <div className="stat-title">{operationLabel}</div>
          <div className="stat-value text-2xl">{currentFrame.swaps}</div>
        </div>
      </div>

      <div className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body gap-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="card-title">Array state</h2>
              <p className="text-sm text-base-content/70">
                {currentFrame.description}
              </p>
            </div>
            <span className="badge badge-primary badge-outline">
              {currentStatusLabel}
            </span>
          </div>

          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <div className="space-y-4">
              <div className="flex h-64 items-end gap-1 rounded-box bg-base-200 p-4">
                {currentFrame.values.map((value, index) => {
                  const isActive = currentFrame.activeIndices.includes(index);
                  const isSwapping =
                    currentFrame.status === "swapping" && isActive;

                  return (
                    <SortBar
                      key={index}
                      value={value}
                      index={index}
                      maxValue={maxValue}
                      isActive={isActive}
                      isSorted={currentFrame.sortedIndices.includes(index)}
                      isSwapping={isSwapping}
                    />
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <div className="flex flex-wrap gap-4 text-base-content/70">
                  <span className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-primary" />
                    Unsorted
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-warning" />
                    Comparing
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-error" />
                    {swappingLabel}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-success" />
                    Sorted
                  </span>
                </div>
                <span className="text-base-content/70">
                  {currentStep} / {lastStep} steps
                </span>
              </div>

              <div className="flex items-center gap-3">
                <progress
                  className="progress progress-primary flex-1"
                  value={progress}
                  max="100"
                />
                <span className="text-xs text-base-content/60">
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="space-y-6 border-t border-base-300 pt-6">
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={handleShuffle}
                  >
                    <RefreshCw size={16} />
                    New array
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={handleReset}
                  >
                    <RotateCcw size={16} />
                    Reset steps
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="form-control gap-2">
                    <span className="flex items-center justify-between text-sm font-medium">
                      <span>Array size</span>
                      <span className="font-mono text-base-content/60">
                        {values.length}
                      </span>
                    </span>
                    <input
                      type="range"
                      className="range range-primary range-sm"
                      min={MIN_ARRAY_SIZE}
                      max={MAX_ARRAY_SIZE}
                      value={values.length}
                      onChange={handleSizeChange}
                      aria-label="Array size"
                    />
                  </label>

                  <label className="form-control gap-2">
                    <span className="flex items-center justify-between text-sm font-medium">
                      <span>Playback speed</span>
                      <span className="font-mono text-base-content/60">
                        {speed.toFixed(1)}x
                      </span>
                    </span>
                    <input
                      type="range"
                      className="range range-secondary range-sm"
                      min={MIN_SPEED}
                      max={MAX_SPEED}
                      step="0.5"
                      value={speed}
                      onChange={handleSpeedChange}
                      aria-label="Playback speed"
                    />
                  </label>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary min-w-32"
                    onClick={handlePlayToggle}
                  >
                    {isPlaybackActive ? (
                      <Pause size={18} />
                    ) : (
                      <Play size={18} />
                    )}
                    {isAtEnd ? "Replay" : isPlaybackActive ? "Pause" : "Play"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleNext}
                    disabled={isAtEnd}
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            <AlgorithmCodePanel
              title={codeTitle}
              codeLines={codeLines}
              activeLine={currentFrame.codeLine}
              description={currentFrame.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
