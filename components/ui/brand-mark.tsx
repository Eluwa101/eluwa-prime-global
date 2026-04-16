import Image from "next/image";
import { imagery } from "@/data/site-content";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-mark ${compact ? "compact" : ""}`}>
      <span className="brand-mark__symbol brand-mark__symbol--image">
        <Image
          src={imagery.logo}
          alt="Eluwa Prime Global logo"
          width={64}
          height={64}
          sizes={compact ? "42px" : "52px"}
        />
      </span>
      <div className="brand-mark__text">
        <strong>Eluwa Prime</strong>
        <span>Global</span>
      </div>
    </div>
  );
}
