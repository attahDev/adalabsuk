import { Link } from 'react-router-dom';
import { PARTNERS } from '../content/site.js';
import { CtaButton, Hero, SectionHead } from '../components/ui.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';

export default function Partners() {
  const { types, logos, why, enquire } = PARTNERS;
  return (
    <>
      <Hero data={PARTNERS.hero} image="partnersHero">
        <CtaButton kind="partner" label="Become a partner" />
        <a className="btn btn--outline" href="#logos">See our partners</a>
      </Hero>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={types.eyebrow} title={types.title} intro={types.intro} />
          <ul className="grid grid--3 ruled types">
            {types.items.map((t) => (
              <li key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--sky" id="logos">
        <div className="container">
          <SectionHead eyebrow={logos.eyebrow} title={logos.title} intro={logos.intro} />
          <ul className="logo-wall">
            {logos.items.map((l) => (
              <li key={l.name}>
                <img src={l.src} alt={l.name} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={why.eyebrow} title={why.title} />
          <div className="pathways pathways--flat">
            {why.cards.map((c) => (
              <article key={c.title} className="direction">
                <p className="direction__dir">{c.dir}</p>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
          <dl className="stats stats--4">
            {why.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band band--deep" id="enquire">
        <div className="container split split--form">
          <div>
            <SectionHead eyebrow={enquire.eyebrow} title={enquire.title} intro={enquire.intro} />
            <p className="form__alt">
              Looking for the people behind the platform? <Link to="/markets#team">Meet the team</Link>.
            </p>
          </div>
          <EnquiryForm interests={enquire.interests} subject="Partnership enquiry" />
        </div>
      </section>
    </>
  );
}
