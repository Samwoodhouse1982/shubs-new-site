'use client';

import { useState } from 'react';

interface VideoEntry {
  id: string;
  title: string;
  label?: string;
}

const videos: VideoEntry[] = [
  {
    id: '0aJVT-T88Jw',
    title: 'Dr Shubs Upadhyay — Featured Talk',
    label: 'Featured',
  },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const video = videos[current];

  return (
    <div className="flex flex-col gap-4">
      {/* Video embed */}
      <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[var(--sq-ink-8)] bg-black">
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Title + nav */}
      <div className="flex items-center justify-between gap-4">
        <p
          className="text-sm text-[var(--sq-muted)] leading-snug flex-1"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          {video.label && (
            <span
              className="text-xs text-[var(--sq-amber)] tracking-widest uppercase mr-3"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              {video.label}
            </span>
          )}
          {video.title}
        </p>

        {videos.length > 1 && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setCurrent((c) => (c - 1 + videos.length) % videos.length)}
              className="w-8 h-8 flex items-center justify-center border border-[var(--sq-ink-22)] text-[var(--sq-muted)] hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200 rounded-sm text-sm"
              aria-label="Previous video"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              ←
            </button>
            <span
              className="text-xs text-[var(--sq-muted)]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              {current + 1}/{videos.length}
            </span>
            <button
              onClick={() => setCurrent((c) => (c + 1) % videos.length)}
              className="w-8 h-8 flex items-center justify-center border border-[var(--sq-ink-22)] text-[var(--sq-muted)] hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200 rounded-sm text-sm"
              aria-label="Next video"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Dot indicators */}
      {videos.length > 1 && (
        <div className="flex items-center gap-2 justify-center">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === current
                  ? 'bg-[var(--sq-amber)] w-4'
                  : 'bg-[var(--sq-ink-22)] hover:bg-[var(--sq-muted)]'
              }`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
