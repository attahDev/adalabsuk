import { Link } from 'react-router-dom';
import { WHO } from '../content/site.js';
import { CtaButton, Hero, Img, SectionHead } from '../components/ui.jsx';

export default function WhoWeAre() {
  const { gateway, approach, africa, uk, purpose, explore } = WHO;
  return (
    <>
      <Hero data={WHO.hero} image="heroMap" />

      <section className="band band--sky">
        <div className="container split split--gateway">
          <div>
            <SectionHead eyebrow={gateway.eyebrow} title={gateway.title} />
            <div className="direction-cards">
              {gateway.cards.map((c) => (
                <article key={c.dir} className="direction">
                  <p className="direction__dir">{c.dir}</p>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <CtaButton kind={c.cta} variant="outline" />
                </article>
              ))}
            </div>
          </div>
          <div className="cluster" aria-hidden="false">
            <Img slot="gatewayA" className="cluster__a" />
            <Img slot="gatewayB" className="cluster__b" />
            <Img slot="gatewayC" className="cluster__c" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split--head">
            <SectionHead eyebrow={approach.eyebrow} title={approach.title} intro={approach.intro} />
            <Img slot="approach" className="photo" />
          </div>
          <ul className="grid grid--3 ruled">
            {approach.pillars.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
          <p className="support-line">{approach.support}</p>
        </div>
      </section>

      <section className="band band--sun">
        <div className="container">
          <div className="split split--head">
            <SectionHead eyebrow={africa.eyebrow} title={africa.title} />
            <p className="lede">{africa.intro}</p>
          </div>
          <Img slot="sunset" className="banner banner--sun" />
          <dl className="stats">
            {africa.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="stats__note">{africa.note}</p>
        </div>
      </section>

      <section className="section band--sun-end">
        <div className="container">
          <SectionHead eyebrow={uk.eyebrow} title={uk.title} intro={uk.intro} />
          <Img slot="ukMap" className="banner" />
          <ul className="grid grid--4 tags">
            {uk.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--deep">
        <div className="container">
          <div className="split split--head">
            <SectionHead eyebrow={purpose.eyebrow} title={purpose.title} />
            <p className="lede">{purpose.body}</p>
          </div>
          <Img slot="purpose" className="banner" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title={explore.title} intro={explore.intro} />
          <Img slot="explore" className="banner" />
          <ul className="link-list">
            <li><Link to="/markets">Markets & Partners</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/markets#team">Global Team</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
