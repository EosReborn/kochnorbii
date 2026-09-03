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
      className={`ghost-num pointer-events-none select-none text-[clamp(4.5rem,14vw,9rem)] ${className}`}
    >
      {value}
    </span>
  );
}
