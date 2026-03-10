'use client';

import { useState, FormEvent } from 'react';
import {
  getAvailableDates,
  getTimeSlots,
  formatMonthYear,
  getCalendarDays,
} from '@/lib/booking-utils';

const SERVICE_OPTIONS = [
  'Select a service...',
  'Landscaping Design',
  'Lawn Care & Maintenance',
  'Snow Removal',
  'Hardscaping',
  'Not Sure / Multiple Services',
];

type Business = {
  name: string;
  brandColor: string;
  slug: string;
};

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BookingClient({ business }: { business: Business }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const brandColor = business.brandColor || '#2563eb';

  const availableDates = getAvailableDates(viewDate.year, viewDate.month);
  const timeSlots = getTimeSlots();
  const calendarDays = getCalendarDays(viewDate.year, viewDate.month);

  const goPrevMonth = () => {
    setViewDate((prev) => {
      if (prev.month === 0) return { year: prev.year - 1, month: 11 };
      return { year: prev.year, month: prev.month - 1 };
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const goNextMonth = () => {
    setViewDate((prev) => {
      if (prev.month === 11) return { year: prev.year + 1, month: 0 };
      return { year: prev.year, month: prev.month + 1 };
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateClick = (day: number | null) => {
    if (!day || !availableDates.has(day)) return;
    setSelectedDate(new Date(viewDate.year, viewDate.month, day));
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      businessSlug: business.slug,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: (formData.get('service') as string) || '',
      message: (formData.get('message') as string) || '',
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
    };

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/booking', {
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
      setSelectedDate(null);
      setSelectedTime(null);
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  /* Form input styles: dark text on light bg, visible borders, visible placeholders - works in light & dark mode */
  const inputClass =
    'w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-[#1a1a1a] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:border-[var(--brand)] focus:ring-[var(--brand)] transition-colors dark:bg-white dark:border-gray-400 dark:text-[#1a1a1a] dark:placeholder-[#6b7280]';
  const labelClass =
    'block text-gray-300 font-medium mb-2 dark:text-gray-300';

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${brandColor}20` }}
        >
          <svg
            className="w-8 h-8"
            style={{ color: brandColor }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-display text-3xl font-bold text-white mb-3">Booking Request Sent!</h2>
        <p className="text-gray-400 mb-6">
          We&apos;ll confirm your appointment soon. Check your email for details.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="px-6 py-3 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: brandColor }}
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  const showForm = selectedDate && selectedTime;

  return (
    <div className="max-w-4xl mx-auto" style={{ ['--brand' as string]: brandColor }}>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
          {business.name}
        </h1>
        <p className="text-xl text-gray-400">Book an Appointment</p>
      </div>

      {/* Calendar card */}
      <div className="bg-[#1a1a1a] rounded-[2rem] p-6 lg:p-8 border border-white/10 shadow-xl mb-8">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={goPrevMonth}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Previous month"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="font-display text-2xl font-bold text-white">
            {formatMonthYear(viewDate.year, viewDate.month)}
          </h2>
          <button
            type="button"
            onClick={goNextMonth}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Next month"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {WEEKDAY_LABELS.map((label) => (
            <div
              key={label}
              className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-1"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="aspect-square" />;
            }
            const isAvailable = availableDates.has(day);
            const date = new Date(viewDate.year, viewDate.month, day);
            const isSelected =
              selectedDate?.getDate() === day &&
              selectedDate?.getMonth() === viewDate.month &&
              selectedDate?.getFullYear() === viewDate.year;

            return (
              <button
                key={day}
                type="button"
                onClick={() => handleDateClick(day)}
                disabled={!isAvailable}
                className={`
                  aspect-square rounded-xl text-sm font-medium transition-all
                  ${!isAvailable ? 'text-gray-600 cursor-not-allowed opacity-50' : ''}
                  ${isAvailable && !isSelected ? 'text-gray-300 hover:bg-white/10 hover:text-white' : ''}
                  ${isSelected ? 'text-white shadow-lg' : ''}
                `}
                style={
                  isSelected
                    ? {
                        backgroundColor: brandColor,
                      }
                    : undefined
                }
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots - show when date selected */}
      {selectedDate && (
        <div className="bg-[#1a1a1a] rounded-[2rem] p-6 lg:p-8 border border-white/10 shadow-xl mb-8">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Select a time for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </h3>
          <div className="flex flex-wrap gap-2">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeClick(time)}
                  className={`
                    px-4 py-2.5 rounded-xl font-medium text-sm transition-all
                    ${isSelected ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}
                  `}
                  style={isSelected ? { backgroundColor: brandColor } : undefined}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Booking form - show when date & time selected */}
      {showForm && (
        <div className="bg-[#1a1a1a] rounded-[2rem] p-6 lg:p-8 border border-white/10 shadow-xl">
          <h3 className="font-display text-xl font-bold text-white mb-2">Your Details</h3>
          <p className="text-gray-400 mb-6">
            {selectedDate?.toLocaleDateString('en-US')} at {selectedTime}
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={labelClass}>Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Smith"
                className={inputClass}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className={inputClass}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone *</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="(616) 555-0123"
                className={inputClass}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="service" className={labelClass}>Service</label>
              <select
                id="service"
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
              <label htmlFor="message" className={labelClass}>Service Description</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about your project..."
                className={`${inputClass} resize-none`}
                disabled={status === 'loading'}
              />
            </div>

            {status === 'error' && (
              <div className="rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-400 text-sm">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-full font-semibold text-lg text-white hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ backgroundColor: brandColor }}
            >
              {status === 'loading' ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                'Confirm Booking'
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
