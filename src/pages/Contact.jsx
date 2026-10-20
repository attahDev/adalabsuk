import { CONTACT, OFFICES, SITE } from '../content/site.js';
import { SectionHead } from '../components/ui.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';

export default function Contact() {
  const uk = OFFICES.find((o) => o.uk);
  return (
    <>
      <section className="band band--deep contact">
        <div className="container split split--form">
          <div>
            <SectionHead eyebrow={CONTACT.eyebrow} title={CONTACT.title} intro={CONTACT.intro} as="h1" />
            <address className="contact__uk">
              <p className="contact__label">UK office</p>
              <p>{uk.lines.join(', ')}</p>
              <p>{uk.city}, {uk.country}</p>
            </address>
            <ul className="socials" aria-label="Adanian Labs on social media">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm interests={CONTACT.interests} subject="Contact" />
        </div>
      </section>

      <section className="section" id="offices">
        <div className="container">
          <SectionHead eyebrow={CONTACT.offices.eyebrow} title={CONTACT.offices.title} intro={CONTACT.offices.intro} />
          <ul className="grid grid--3 ruled offices">
            {OFFICES.map((o) => (
              <li key={o.city}>
                <h3>{o.city}, {o.country}</h3>
                <address>
                  {o.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </address>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
