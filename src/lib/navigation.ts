import {
  BarChart3,
  Search,
  Link2,
  GitBranch,
  Network,
  Home,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface NavCategory {
  label: string;
  icon: LucideIcon;
  children: NavItem[];
  isComingSoon?: boolean;
}

export const navigation: NavCategory[] = [
  {
    label: "Overview",
    icon: Home,
    children: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
    ],
  },
  {
    label: "Sorting",
    icon: BarChart3,
    children: [
      { label: "Bubble Sort", path: "/sorting/bubble" },
      { label: "Insertion Sort", path: "/sorting/insertion" },
    ],
  },
  {
    label: "Searching",
    icon: Search,
    isComingSoon: true,
    children: [
      { label: "Linear Search", path: "/searching/linear" },
      { label: "Binary Search", path: "/searching/binary" },
    ],
  },
  {
    label: "Linked Lists",
    icon: Link2,
    children: [],
  },
  {
    label: "Trees",
    icon: GitBranch,
    children: [],
  },
  {
    label: "Graphs",
    icon: Network,
    children: [],
  },
];
