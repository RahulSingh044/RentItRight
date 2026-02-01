import { useState } from "react";

const primaryFilters = [
  { label: "Categories", icon: "category" },
  { label: "Price Range", icon: "attach_money" },
  { label: "Distance", icon: "distance" },
  { label: "Availability", icon: "event_available" },
];

const quickTags = ["Photography", "Tools", "Camping"];

export default function Filters() {
  const [activeTag, setActiveTag] = useState(null);

  return (
    <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2">

      {primaryFilters.map((filter) => (
        <button
          key={filter.label}
          className="flex items-center gap-2 h-10 shrink-0 rounded-lg bg-card border border-divider px-4 hover:border-accent"
        >
          <span className="material-symbols-outlined text-sm text-text-secondary">
            {filter.icon}
          </span>
          <span className="text-text-secondary text-sm font-medium">
            {filter.label}
          </span>
          {filter.label === "Categories" && (
            <span className="material-symbols-outlined text-sm">expand_more</span>
          )}
        </button>
      ))}

      <div className="h-6 w-px bg-divider mx-2 shrink-0" />

      {quickTags.map((tag) => {
        const active = activeTag === tag;

        return (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`h-8 shrink-0 rounded-full px-4 border text-xs font-semibold transition-colors
              ${
                active
                  ? "bg-accent text-app border-accent"
                  : "bg-card text-text-primary border-divider hover:border-accent"
              }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
