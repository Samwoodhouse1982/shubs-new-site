'use client';

import { useState, useCallback } from 'react';
import FadeIn from '@/components/FadeIn';

interface Article {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

interface Props {
  articles: Article[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ShubstackArticles({ articles }: Props) {
  const [list, setList] = useState(articles);
  const [shuffled, setShuffled] = useState(false);

  const handleShuffle = useCallback(() => {
    setList((prev) => shuffleArray(prev));
    setShuffled(true);
  }, []);

  const handleReset = useCallback(() => {
    setList(articles);
    setShuffled(false);
  }, [articles]);

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <FadeIn className="flex items-center gap-3">
          <div className="h-px w-8 bg-[var(--sq-amber)]" />
          <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: 'var(--font-dm-mono)' }}>
            Shubstack, by Dr Shubs Upadhyay
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <button
            onClick={shuffled ? handleReset : handleShuffle}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs border border-[var(--sq-ink-22)] text-[var(--sq-muted)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
            title={shuffled ? 'Restore original order' : 'Discover a random article'}
          >
            {shuffled ? '↺ Reset' : '⇄ Shuffle'}
          </button>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((article, i) => (
          <FadeIn key={article.title} delay={i * 60}>
            <a href={article.href} target="_blank" rel="noopener noreferrer" className="block border border-[var(--sq-ink-8)] rounded-sm p-8 flex flex-col gap-5 h-full hover:border-[var(--sq-amber)] transition-colors duration-200">
              <p className="text-sm text-[var(--sq-muted)] tracking-widest" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                {article.date}
              </p>
              <h2 className="text-xl lg:text-2xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
                {article.title}
              </h2>
              <p className="text-sm text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {article.excerpt}
              </p>
            </a>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
