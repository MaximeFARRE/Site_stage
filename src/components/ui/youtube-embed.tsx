"use client";

import { useState } from "react";

type YoutubeEmbedProps = {
  url: string;
  title: string;
};

function extractYoutubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?\s]+)/);
  return match ? match[1] : null;
}

export default function YoutubeEmbed({ url, title }: YoutubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const id = extractYoutubeId(url);

  if (!id) return null;

  const thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

  if (playing) {
    return (
      <div className="overflow-hidden rounded-xl border border-[var(--border)]">
        <div className="relative aspect-video">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Lire la vidéo : ${title}`}
      className="group relative block w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]"
    >
      {/* Miniature YouTube */}
      <div className="relative aspect-video">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt={`Aperçu vidéo : ${title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/25 transition-colors duration-200 group-hover:bg-black/15" />

      {/* Bouton play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-200 group-hover:scale-110">
          <svg
            className="ml-1 h-6 w-6 text-[var(--foreground)]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
