const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' };

const GLYPHS = {
  LinkedIn: (
    <>
      <rect x="4.5" y="9.5" width="3" height="10" fill="currentColor" />
      <circle cx="6" cy="5.8" r="1.8" fill="currentColor" />
      <path d="M10.5 9.5h2.8v1.4c.6-1 1.7-1.7 3.2-1.7 2.8 0 3.5 1.8 3.5 4.3v6h-3v-5.3c0-1.2-.2-2.2-1.5-2.2s-1.9 1-1.9 2.3v5.2h-3z" fill="currentColor" />
    </>
  ),
  X: <path d="M5 5l14 14M19 5L5 19" {...stroke} strokeWidth={2.3} />,
  Instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="4" {...stroke} />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </>
  ),
  Facebook: (
    <path d="M13.6 21v-7.6h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8v3h2.6V21z" fill="currentColor" />
  ),
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" {...stroke} />
      <path d="M10 9.3v5.4l4.7-2.7z" fill="currentColor" />
    </>
  ),
  Telegram: (
    <>
      <path d="M21 4 3 11l6 2.2L11 19l3-3.5L18.5 19z" {...stroke} />
      <path d="M9 13.2 21 4" {...stroke} />
    </>
  ),
};

export default function SocialIcon({ label }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      {GLYPHS[label]}
    </svg>
  );
}
