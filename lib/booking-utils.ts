/**
 * Mock availability - in production this would come from an API.
 * Business hours: Mon-Fri 8 AM - 5 PM
 */
const WEEKDAY_START = 8; // 8 AM
const WEEKDAY_END = 17; // 5 PM
const SLOT_DURATION_MINUTES = 30;

export function getAvailableDates(year: number, month: number): Set<number> {
  const available = new Set<number>();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ...
    // Weekdays only (1-5 = Mon-Fri)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date >= today) {
        available.add(day);
      }
    }
  }
  return available;
}

export function getTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = WEEKDAY_START; h < WEEKDAY_END; h++) {
    for (let m = 0; m < 60; m += SLOT_DURATION_MINUTES) {
      const period = h >= 12 ? 'PM' : 'AM';
      const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
      const minStr = m === 0 ? '00' : String(m);
      slots.push(`${hour12}:${minStr} ${period}`);
    }
  }
  return slots;
}

export function formatMonthYear(year: number, month: number): string {
  return new Date(year, month).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function getCalendarDays(year: number, month: number): (number | null)[] {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay(); // 0 = Sunday
  const daysInMonth = last.getDate();

  const days: (number | null)[] = [];
  // Pad start with null for days before month starts
  for (let i = 0; i < startPad; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }
  return days;
}
