/** Texto relativo em pt-BR ("há 3 meses"), calculado por meses de calendário como o widget do Google. */
export function timeAgo(isoDate: string, now: Date = new Date()): string {
  const date = new Date(isoDate);
  let months =
    (now.getUTCFullYear() - date.getUTCFullYear()) * 12 + (now.getUTCMonth() - date.getUTCMonth());
  if (now.getUTCDate() < date.getUTCDate()) months -= 1;

  const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'always' });
  if (months >= 12) return rtf.format(-Math.floor(months / 12), 'year');
  if (months >= 1) return rtf.format(-months, 'month');

  const days = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 86_400_000));
  if (days >= 7) return rtf.format(-Math.floor(days / 7), 'week');
  return rtf.format(-days, 'day');
}

const LONG_REVIEW_LENGTH = 110;

/** Avaliações longas aparecem cortadas em 3 linhas, com o link "Leia mais". */
export function isLongReview(text: string): boolean {
  return text.length > LONG_REVIEW_LENGTH;
}
