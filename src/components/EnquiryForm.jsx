import { useState } from 'react';
import { mailto } from './ui.jsx';

export default function EnquiryForm({ interests, subject = 'Enquiry' }) {
  const [f, setF] = useState({ name: '', org: '', email: '', interest: interests[0], message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = [`Name: ${f.name}`, `Organisation: ${f.org}`, `Email: ${f.email}`, '', f.message].join('\n');
    window.location.href = `${mailto(`${subject}: ${f.interest}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Name
        <input type="text" value={f.name} onChange={set('name')} required autoComplete="name" />
      </label>
      <label>
        Organisation
        <input type="text" value={f.org} onChange={set('org')} autoComplete="organization" />
      </label>
      <label>
        Email
        <input type="email" value={f.email} onChange={set('email')} required autoComplete="email" />
      </label>
      <label>
        I want to
        <select value={f.interest} onChange={set('interest')}>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className="form__wide">
        Message
        <textarea rows="5" value={f.message} onChange={set('message')} />
      </label>
      <div className="form__wide form__actions">
        <button type="submit" className="btn btn--primary">Send enquiry</button>
        <p>This opens your email app with the details filled in.</p>
      </div>
    </form>
  );
}
