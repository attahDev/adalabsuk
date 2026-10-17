import { MARKETS } from '../content/site.js';
import { CtaButton, Hero, Img, SectionHead } from '../components/ui.jsx';

function Venn() {
  return (
    <svg className="venn" viewBox="0 0 320 300" role="img" aria-label="People, Data and Infrastructure overlap to form PDI">
      <circle cx="115" cy="100" r="85" fill="none" stroke="#22a3b5" strokeWidth="2" />
      <circle cx="205" cy="100" r="85" fill="none" stroke="#f0920a" strokeWidth="2" />
      <circle cx="160" cy="190" r="85" fill="none" stroke="#fff" strokeWidth="2" />
      <g fill="#fff" fontFamily="Sora, sans-serif" fontSize="15" fontWeight="600" textAnchor="middle">
        <text x="85" y="85">People</text>
        <text x="235" y="85">Data</text>
        <text x="160" y="145">PDI</text>
        <text x="160" y="235" fontSize="14">Infrastructure</text>
      </g>
    </svg>
  );
}

export default function MarketsPartners() {
  const { team, how, footprint, twoWay, model, next } = MARKETS;
  return (
    <>
      <Hero data={MARKETS.hero} image="marketsHero" />

      <section className="section" id="team">
        <div className="container">
          <SectionHead eyebrow={team.eyebrow} title={team.title} />
          <ul className="team">
            {team.people.map((p) => (
              <li key={p.name} className="person">
                <Img slot={p.photo} className="person__photo" />
                <h3>{p.name}</h3>
                <p className="person__role">{p.role}</p>
                {p.bio && <p className="person__bio">{p.bio}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--sky">
        <div className="container">
          <div className="split split--head">
            <div>
              <SectionHead eyebrow={how.eyebrow} title={how.title} />
              <p className="display">{how.heading}</p>
              <p className="lede">{how.intro}</p>
            </div>
            <div className="ovals">
              <Img slot="how1" />
              <Img slot="how2" />
              <Img slot="how3" />
            </div>
          </div>
          <ul className="grid grid--3 ruled">
            {how.cards.map((c) => (
              <li key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Img slot="footprint" className="banner" />
          <div className="split split--footprint">
            <div>
              <SectionHead eyebrow={footprint.eyebrow} title={footprint.title} intro={footprint.intro} />
              <p className="note">{footprint.note}</p>
              <CtaButton kind="africa" variant="outline" />
            </div>
            <div>
              {footprint.groups.map((g) => (
                <section key={g.name} className="places" aria-label={g.name}>
                  <h3>{g.name}</h3>
                  <ul>
                    {g.places.map((p) => (
                      <li key={p} className={g.accent ? 'is-accent' : ''}>{p}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band band--sky">
        <div className="container">
          <SectionHead eyebrow={twoWay.eyebrow} title={twoWay.title} intro={twoWay.intro} />
          <Img slot="twoWay" className="banner" />
          <div className="pathways">
            {twoWay.cards.map((c) => (
              <article key={c.heading} className="pathway">
                <p className="direction__dir">{c.dir}</p>
                <h3>{c.heading}</h3>
                <p>{c.why}</p>
                <p>{c.trade}</p>
                <ol className="steps">
                  {c.steps.map(([a, b]) => (
                    <li key={a}><strong>{a}:</strong> {b}</li>
                  ))}
                </ol>
                <CtaButton kind={c.cta} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--deep">
        <div className="container">
          <Img slot="model" className="banner" />
          <div className="split split--model">
            <div>
              <SectionHead eyebrow={model.eyebrow} title={model.title} intro={model.intro} />
              <p className="formula">{model.formula}</p>
              <p>{model.body}</p>
            </div>
            <Venn />
          </div>
          <dl className="pillars">
            {model.pillars.map((p) => (
              <div key={p.name}>
                <dt>{p.name}</dt>
                <dd>{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={next.eyebrow} title={next.title} intro={next.body} />
          <Img slot="next" className="banner" />
          <div className="hero__ctas hero__ctas--wrap">
            <CtaButton kind="africa" />
            <CtaButton kind="uk" variant="outline" />
            <CtaButton kind="partner" variant="outline" label="Become a partner" />
            <a className="btn btn--outline" href="#team" onClick={(e) => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Meet the team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
