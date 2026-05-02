import type { WipItem } from "@/data/projects";
import type { WipMessageItem, ProjectsContent } from "@/lib/messages/types";

type Props = {
  projects: { item: WipItem; text: WipMessageItem }[];
  t: Pick<ProjectsContent, "wipTitle" | "wipStatus">;
};

export function WipSection({ projects, t }: Props) {
  return (
    <div className="mt-20">
      {/* Divider with title */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-border opacity-30" />
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
          {t.wipTitle}
        </h2>
        <div className="h-px flex-1 bg-border opacity-30" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ item, text }) => (
          <div
            key={item.slug}
            className="glass rounded-3xl p-6 transition-all duration-300 hover:border-border"
          >
            {/* Status indicator */}
            <div className="mb-4 flex items-center gap-2">
              <span className="wip-dot h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-muted">{t.wipStatus}</span>
            </div>

            {/* Title */}
            <h3 className="mb-2 font-medium text-foreground">{text.title}</h3>

            {/* Description */}
            <p className="mb-4 text-sm leading-6 text-soft">{text.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
