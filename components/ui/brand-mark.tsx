type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-mark ${compact ? "compact" : ""}`}>
      <span className="brand-mark__symbol">EP</span>
      <div className="brand-mark__text">
        <strong>Eluwa Prime</strong>
        <span>Global</span>
      </div>
    </div>
  );
}

