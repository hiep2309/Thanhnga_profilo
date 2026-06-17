import { type ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  action?: ReactNode;
};

export default function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between md:mb-6">
      <div className="flex items-center gap-2.5">
        <span className="text-lg" aria-hidden="true">
          🎀
        </span>
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
