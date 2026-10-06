function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/** Parse API / ISO draw timestamps (space or `T` separator, optional seconds). */
export function parseLotteryDateTime(value: string): Date | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  let normalized = trimmed;
  if (/^\d{4}-\d{2}-\d{2} /.test(trimmed)) {
    normalized = trimmed.replace(" ", "T");
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    normalized = `${trimmed}T12:00:00`;
  } else if (!trimmed.includes("T") && !trimmed.includes(" ")) {
    normalized = `${trimmed}T12:00:00`;
  }

  const d = new Date(normalized);
  return Number.isNaN(d.getTime()) ? null : d;
}

function hasExplicitTime(value: string): boolean {
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return false;
  }
  return /[ T]\d{1,2}:\d{2}/.test(trimmed) || /T\d/.test(trimmed);
}

export function formatTimeHHmm(date: Date): string {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

function formatIsoDate(date: Date): string {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

/** Draw table / latest draw: `YYYY-MM-DD HH:mm` when a time is present. */
export function formatDrawDate(isoOrDate: string): string {
  const d = parseLotteryDateTime(isoOrDate);
  if (!d) {
    return isoOrDate;
  }
  const datePart = formatIsoDate(d);
  if (!hasExplicitTime(isoOrDate)) {
    return datePart;
  }
  return `${datePart} ${formatTimeHHmm(d)}`;
}

/** Next draw / jackpot close: locale date with `HH:mm` time. */
export function formatDateTimeDisplay(isoOrDate: string): string {
  const d = parseLotteryDateTime(isoOrDate);
  if (!d) {
    return isoOrDate;
  }
  const datePart = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(d);
  if (!hasExplicitTime(isoOrDate)) {
    return datePart;
  }
  return `${datePart}, ${formatTimeHHmm(d)}`;
}
