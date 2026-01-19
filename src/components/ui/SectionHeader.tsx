import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 md:mb-20", centered && "text-center")}>
      {label && (
        <div className={cn("section-label mb-5", centered && "justify-center")}>
          <span>{label}</span>
        </div>
      )}
      <h2
        className={cn(
          light ? "section-title-light" : "section-title"
        )}
      >
        {title}
      </h2>
      <div className={cn("divider-red mt-6 mb-6", centered && "mx-auto")} />
      {description && (
        <p
          className={cn(
            "section-subtitle",
            light && "text-white/85",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}