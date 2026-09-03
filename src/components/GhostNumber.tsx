export default function GhostNumber({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`ghost-num pointer-events-none select-none text-[clamp(6rem,22vw,14rem)] ${className}`}
    >
      {value}
    </span>
  );
}
