import { type ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  action?: ReactNode;
};

export default function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5 md:mb-6">
      <div className="flex min-w-0 items-center gap-2">
        <span className="text-base sm:text-lg" aria-hidden="true">
          🎀
        </span>
        <h2 className="truncate font-serif text-xl font-semibold tracking-tight text-charcoal sm:text-2xl md:text-3xl">
          {title}
        </h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
