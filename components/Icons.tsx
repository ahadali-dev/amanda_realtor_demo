const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 } as const;

export const InstagramIcon = () => (
  <svg {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg>
);
export const TikTokIcon = () => (
  <svg {...base}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.6 2 4.2 5 4.4" /></svg>
);
export const MailIcon = () => (
  <svg {...base}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></svg>
);
export const PhoneIcon = () => (
  <svg {...base}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const CalendarIcon = () => (
  <svg {...base}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const PinIcon = () => (
  <svg {...base}><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const CheckIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10" /></svg>
);
