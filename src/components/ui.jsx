import { CTA, SITE } from '../content/site.js';
import { IMAGES } from '../content/images.js';

export const mailto = (subject) =>
  `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}`;

export function CtaButton({ kind, variant = 'primary', label }) {
  const cta = CTA[kind];
  return (
    <a className={`btn btn--${variant}`} href={mailto(cta.subject)}>
      {label || cta.label}
    </a>
  );
}

export function Img({ slot, className = '', priority = false }) {
  const { src, alt } = IMAGES[slot];
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHead({ eyebrow, title, intro, as: Tag = 'h2' }) {
  return (
    <header className="section-head">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag>{title}</Tag>
      {intro && <p className="lede">{intro}</p>}
    </header>
  );
}

export function Hero({ data, image }) {
  return (
    <section className="hero">
      <div className="container">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <Img slot={image} className="hero__image" priority />
        <div className="hero__row">
          <div>
            <h1>{data.title}</h1>
            <p className="lede hero__sub">{data.sub}</p>
          </div>
          <aside className="hero__note">
            <p className="hero__tag">{data.tag}</p>
            <p>{data.note}</p>
          </aside>
        </div>
        <div className="hero__ctas">
          <CtaButton kind="africa" />
          <CtaButton kind="uk" variant="outline" />
        </div>
      </div>
    </section>
  );
}
