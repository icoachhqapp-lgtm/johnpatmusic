interface ComingSoonNoticeProps {
  className?: string;
  compact?: boolean;
}

/** Tasteful stand-in where the audio player would appear for unreleased songs. */
export function ComingSoonNotice({
  className = "",
  compact = false,
}: ComingSoonNoticeProps) {
  return (
    <div
      className={`coming-soon ${compact ? "coming-soon--compact" : ""} ${className}`.trim()}
      role="status"
    >
      <p className="coming-soon__label">Coming Soon</p>
      {!compact ? (
        <p className="coming-soon__copy">
          This concept demo isn’t available for listening yet. Check back soon.
        </p>
      ) : null}
    </div>
  );
}
