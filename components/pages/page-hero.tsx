import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  note?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  note
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <Reveal className="page-hero__content">
          <span className="section-heading__eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="page-hero__actions">
            <Link className="button button-primary" href={primaryHref}>
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link className="button button-secondary" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
          {note ? <p className="page-hero__note">{note}</p> : null}
        </Reveal>

        <Reveal className="page-hero__visual" delay={120}>
          <div className="page-hero__image-shell">
            <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

