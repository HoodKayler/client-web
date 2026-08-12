type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${align === "center" ? "section-heading-center" : ""} ${
        light ? "section-heading-light" : ""
      }`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-intro">{description}</p> : null}
    </div>
  );
}
