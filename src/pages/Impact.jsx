import { useState } from 'react';
import { IMPACT } from '../content/site.js';
import { CtaButton, Hero, Img, SectionHead } from '../components/ui.jsx';

function Staircase({ steps }) {
  return (
    <ol className="stairs" aria-label="Path from introduction to sustained growth">
      {steps.map((s, i) => (
        <li key={s} style={{ '--i': i, '--n': steps.length }} className={i === steps.length - 1 ? 'is-last' : ''}>
          <span className="stairs__dot" aria-hidden="true" />
          <span className="stairs__label">{s}</span>
        </li>
      ))}
    </ol>
  );
}

function Corridor({ data }) {
  const [tab, setTab] = useState('UK');
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Direction">
        {data.tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`tab ${tab === t ? 'is-active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="corridor" data-active={tab}>
        <div className="corridor__head">
          <span />
          <p className="corridor__dir corridor__dir--uk">UK → Africa</p>
          <p className="corridor__dir corridor__dir--af">Africa → UK</p>
        </div>
        {data.rows.map((r) => (
          <div key={r.label} className="corridor__row">
            <h3>{r.label}</h3>
            <p className="corridor__cell corridor__cell--uk">{r.toAfrica}</p>
            <p className="corridor__cell corridor__cell--af">{r.toUK}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Impact() {
  const { focus, path, partners, corridor, closing } = IMPACT;
  return (
    <>
      <Hero data={IMPACT.hero} image="impactHero" />

      <section className="section">
        <div className="container">
          <div className="split split--head">
            <SectionHead eyebrow={focus.eyebrow} title={focus.title} intro={focus.intro} />
            <div className="ovals" aria-hidden="false">
              <Img slot="focus1" />
              <Img slot="focus2" />
              <Img slot="focus3" />
            </div>
          </div>
          <ul className="grid grid--2 ruled">
            {focus.items.map((i) => (
              <li key={i.title}>
                <h3>{i.title}</h3>
                <p>{i.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--sky">
        <div className="container">
          <Img slot="journey" className="banner" />
          <SectionHead eyebrow={path.eyebrow} title={path.title} intro={path.intro} />
          <Staircase steps={path.steps} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split--head">
            <SectionHead eyebrow={partners.eyebrow} title={partners.title} intro={partners.intro} />
            <Img slot="partners" className="photo" />
          </div>
          <ul className="grid grid--3 ruled">
            {partners.items.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--sky">
        <div className="container">
          <Img slot="corridor" className="banner" />
          <SectionHead eyebrow={corridor.eyebrow} title={corridor.title} intro={corridor.intro} />
          <Corridor data={corridor} />
        </div>
      </section>

      <section className="band band--deep">
        <div className="container">
          <SectionHead eyebrow={closing.eyebrow} title={closing.title} intro={closing.body} />
          <div className="hero__ctas">
            <CtaButton kind="africa" />
            <CtaButton kind="uk" variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
