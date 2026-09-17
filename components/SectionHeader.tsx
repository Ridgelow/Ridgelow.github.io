/** Consistent terminal section label — mono only. */
export default function SectionHeader({
  command,
  hint,
}: {
  command: string;
  hint?: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-1">
      <span className="font-mono text-sm text-bo-white">{command}</span>
      {hint ? (
        <span className="font-mono text-xs tracking-[.12em] text-bo-steel">{hint}</span>
      ) : null}
    </div>
  );
}
