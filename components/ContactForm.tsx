'use client';

import { useState, FormEvent } from 'react';

const SERVICE_OPTIONS = [
  'Select a service...',
  'Landscaping Design',
  'Lawn Care & Maintenance',
  'Snow Removal',
  'Hardscaping',
  'Not Sure / Multiple Services',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const service = (formData.get('service') as string) || '';
    const typedMessage = (formData.get('message') as string) || '';
    const smsConsent = formData.get('sms_consent') === 'on';

    const message = [service ? `Service: ${service}` : '', typedMessage]
      .filter(Boolean)
      .join('\n\n');

    const payload = {
      businessSlug: 'aesthetic-gardener',
      name,
      phone,
      email,
      message,
      smsConsent,
    };

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('https://www.alignandacquire.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  /* Dark text on light bg, visible borders, visible placeholders - works in light & dark mode */
  const inputClass =
    'w-full px-6 py-4 rounded-2xl border-2 border-gray-300 bg-white text-[#1a1a1a] placeholder-[#6b7280] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors dark:bg-white dark:border-gray-400 dark:text-[#1a1a1a] dark:placeholder-[#6b7280]';
  const labelClass = 'block text-gray-300 font-medium mb-2';

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-accent-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-3">
          Thank You!
        </h3>
        <p className="text-gray-300 max-w-md mx-auto">
          Your message has been sent. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-accent-light hover:text-accent font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className={labelClass}>Name *</label>
        <input
          type="text"
          name="name"
          required
          placeholder="John Smith"
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className={labelClass}>Email *</label>
        <input
          type="email"
          name="email"
          required
          placeholder="john@example.com"
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className={labelClass}>Phone *</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="(616) 555-0123"
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className={labelClass}>Service Type</label>
        <select
          name="service"
          className={inputClass}
          disabled={status === 'loading'}
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt === SERVICE_OPTIONS[0] ? '' : opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
          disabled={status === 'loading'}
        />
      </div>
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="sms_consent"
            required
            disabled={status === 'loading'}
            className="mt-1.5 w-4 h-4 rounded border-2 border-gray-400 bg-white text-accent focus:ring-accent focus:ring-offset-0 focus:border-accent cursor-pointer dark:bg-white dark:border-gray-500"
          />
          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            By checking this box and providing your phone number, you consent to receive SMS messages from Align and Acquire. Message frequency may vary. Standard message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.
          </span>
        </label>
      </div>
      {status === 'error' && (
        <div className="rounded-2xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-400 text-sm">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
