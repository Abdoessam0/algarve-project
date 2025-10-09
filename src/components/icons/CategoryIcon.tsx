import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import {
    Compass,
    Scale,
    TrendingUp,
    FileText,
    Briefcase,
    BookOpen,
    Sparkles,
} from "lucide-react";

const categoryIconMap: Record<string, LucideIcon> = {
    guides: Compass,
    guide: Compass,
    "how-to": BookOpen,
    legal: Scale,
    "market intelligence": TrendingUp,
    market: TrendingUp,
    investment: Briefcase,
    lifestyle: Sparkles,
    news: FileText,
};

export function getCategoryIcon(category?: string | null): LucideIcon | null {
    if (!category) return null;
    const key = category.trim().toLowerCase();
    return categoryIconMap[key] ?? null;
}

type Props = {
    category?: string | null;
    className?: string;
};

export function CategoryIcon({ category, className }: Props) {
    const Icon = getCategoryIcon(category);
    if (!Icon) return null;
    return <Icon aria-hidden className={clsx("h-4 w-4", className)} />;
}

export const CATEGORY_ICON_MAP = categoryIconMap;
