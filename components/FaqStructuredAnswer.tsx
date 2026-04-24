'use client';

import { Fragment } from 'react';
import { cn } from '@/lib/utils';

const URL_SPLIT_RE = /(https?:\/\/[^\s<]+)/gi;

function renderTextWithLinks(text: string) {
  const parts = text.split(URL_SPLIT_RE);
  return parts.map((part, j) => {
    if (/^https?:\/\//i.test(part)) {
      return (
        <a
          key={j}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline decoration-blue-600/40 underline-offset-2 hover:text-blue-800"
        >
          {part}
        </a>
      );
    }
    return <Fragment key={j}>{part}</Fragment>;
  });
}

/**
 * Vykreslí odpoveď FAQ: sekcie oddelené tromi odsekmi (\n\n\n),
 * v každej sekcii nadpis a text oddelené jedným prázdnym riadkom (\n\n).
 * Jednoduchý text bez štruktúry zostane jedným odsekom.
 * Reťazce https://… v odsekoch sa vykreslia ako odkazy.
 */
export default function FaqStructuredAnswer({
  text,
  className,
  paragraphClassName,
  titleClassName,
}: {
  text: string;
  /** Wrapper (napr. text-sm text-brand-gray-700) */
  className?: string;
  /** Telo odseku */
  paragraphClassName?: string;
  /** Nadpisy sekcií */
  titleClassName?: string;
}) {
  const sections = text.split(/\n\n\n/).map((s) => s.trim()).filter(Boolean);

  return (
    <div className={cn('space-y-5', className)}>
      {sections.map((section, i) => {
        const parts = section.split(/\n\n/);
        if (parts.length === 1) {
          return (
            <p
              key={i}
              className={cn('leading-relaxed text-gray-700', paragraphClassName)}
            >
              {renderTextWithLinks(parts[0])}
            </p>
          );
        }
        const title = parts[0].trim();
        const body = parts.slice(1).join('\n\n').trim();
        return (
          <div key={i} className="space-y-2">
            <p className={cn('font-semibold text-gray-900', titleClassName)}>{title}</p>
            <p className={cn('leading-relaxed text-gray-700', paragraphClassName)}>
              {renderTextWithLinks(body)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
