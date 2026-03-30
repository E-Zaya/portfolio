"use client";

type Props = {
  tags: string[];
  activeTag: string;
  onTagChange: (tag: string) => void;
};

export default function BlogFilter({
  tags,
  activeTag,
  onTagChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onTagChange("all")}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
          activeTag === "all"
            ? "apple-panel-strong text-foreground border-border"
            : "bg-card text-soft border-border hover:bg-card-strong hover:text-foreground"
        }`}
      >
        All
      </button>

      {tags.map((tag) => {
        const active = activeTag === tag;

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onTagChange(tag)}
            className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition ${
              active
                ? "apple-panel-strong text-foreground border-border"
                : "bg-card text-soft border-border hover:bg-card-strong hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}