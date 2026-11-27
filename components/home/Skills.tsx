import { skillItems } from "@/data/portfolio";
import SectionShell from "@/components/ui/SectionShell";
import { getMessages, type Locale } from "@/lib/i18n";

export default function Skills({ locale }: { locale: Locale }) {
  const t = getMessages(locale).skills;

  return (
    <SectionShell>
      <div className="mb-10 text-center">
        <h2 className="text-xl font-bold text-foreground">
          {t.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {skillItems.map((skill) => {
          const Icon = skill.icon;

          return (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              aria-label={skill.name}
              className="glass flex min-h-10 flex-col items-center justify-center rounded-md p-6 text-center transition-colors hover:border-[color:var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
            >
              <Icon
                aria-hidden="true"
                className="mb-4 size-12 text-foreground"
              />
              <span className="text-sm font-normal text-foreground">{skill.name}</span>
            </a>
          );
        })}
      </div>
    </SectionShell>
  );
}
