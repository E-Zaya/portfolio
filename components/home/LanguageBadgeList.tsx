import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type LanguageItem = {
  code: string;
  country: string;
};

type LanguageBadgeListProps = {
  className?: string;
  items?: LanguageItem[];
};

const defaultItems: LanguageItem[] = [
  { code: "MN", country: "MN" },
  { code: "JP", country: "JP" },
  { code: "EN", country: "US" },
  { code: "CN", country: "CN" },
];

export default function LanguageBadgeList({
  className,
  items = defaultItems,
}: LanguageBadgeListProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-2", className)}>
      {items.map((lang) => (
        <motion.div
          key={lang.code}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="shadow-lg"
          aria-label={`${lang.code} language`}
        >
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/80 px-2.5 py-1 text-xs text-foreground backdrop-blur">
            <ReactCountryFlag
              countryCode={lang.country}
              svg
              aria-hidden="true"
              style={{ width: "1em", height: "1em" }}
            />
            <span>{lang.code}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
