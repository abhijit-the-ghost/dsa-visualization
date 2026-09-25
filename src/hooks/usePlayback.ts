import { useEffect } from "react";

interface UsePlaybackOptions {
  isPlaying: boolean;
  currentStep: number;
  totalSteps: number;
  speed: number;
  onStep: () => void;
}

export function usePlayback({
  isPlaying,
  currentStep,
  totalSteps,
  speed,
  onStep,
}: UsePlaybackOptions) {
  useEffect(() => {
    if (!isPlaying || currentStep >= totalSteps - 1) {
      return;
    }

    const delay = Math.max(1000 / speed, 100);
    const timer = window.setTimeout(onStep, delay);

    return () => window.clearTimeout(timer);
  }, [currentStep, isPlaying, onStep, speed, totalSteps]);
}
