'use client';

import { useEffect, useRef, useState, type ChangeEvent } from 'react';

const MANTRA_OFF_KEY = 'dharma-gyan-mantra-off';

export default function MantraPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  const [hasAudioError, setHasAudioError] = useState(false);
  const [volume, setVolume] = useState(0.12);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Respect the visitor's choice if they previously turned audio off.
    try {
      if (localStorage.getItem(MANTRA_OFF_KEY) === 'true') {
        return;
      }
    } catch {
      // Continue with the autoplay attempt if storage is unavailable.
    }

    audio.volume = 0.12;

    // Best-effort autoplay. The browser may require a user gesture.
    audio.play().catch(() => {
      setNeedsInteraction(true);
    });
  }, []);

  async function handleTogglePlayback() {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      setNeedsInteraction(true);

      // Remember that the visitor explicitly turned the mantra off.
      try {
        localStorage.setItem(MANTRA_OFF_KEY, 'true');
      } catch {
        // Playback can still be paused if storage is unavailable.
      }

      return;
    }

    try {
      audio.volume = volume;
      await audio.play();

      setIsPlaying(true);
      setNeedsInteraction(false);
      setHasAudioError(false);

      // A successful manual Play means the visitor wants to listen.
      try {
        localStorage.removeItem(MANTRA_OFF_KEY);
      } catch {
        // Playback can still work without storage.
      }
    } catch {
      setIsPlaying(false);
      setNeedsInteraction(true);
    }
  }

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    const nextVolume = Number(event.target.value);

    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  }

  return (
    <aside className="mantra-player" aria-label="Om mantra audio player">
      <audio
        ref={audioRef}
        src="/audio/om-chant.mp3"
        loop
        preload="auto"
        onPlay={() => {
          setIsPlaying(true);
          setNeedsInteraction(false);
          setHasAudioError(false);
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setHasAudioError(true);
        }}
      />

      <div className="mantra-player-symbol" aria-hidden="true">
        ॐ
      </div>

      <div className="mantra-player-info">
        <strong>Om Mantra</strong>

        <span aria-live="polite">
          {hasAudioError
            ? 'Audio unavailable'
            : isPlaying
              ? 'Playing softly'
              : needsInteraction
                ? 'Tap play to listen'
                : 'Peaceful chanting'}
        </span>
      </div>

      <button
        type="button"
        className="mantra-player-toggle"
        onClick={handleTogglePlayback}
        aria-label={isPlaying ? 'Turn mantra off' : 'Play mantra'}
        title={isPlaying ? 'Turn mantra off' : 'Play mantra'}
        disabled={hasAudioError}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M7 5h4v14H7zM15 5h4v14h-4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M8 5.8v12.4a.8.8 0 0 0 1.2.69l10-6.2a.8.8 0 0 0 0-1.38l-10-6.2A.8.8 0 0 0 8 5.8Z" />
          </svg>
        )}
      </button>

      <label className="mantra-volume-control">
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {volume === 0 ? (
            <>
              <path d="M11 5 6 9H3v6h3l5 4z" />
              <path d="m16 9 5 6m0-6-5 6" />
            </>
          ) : (
            <>
              <path d="M11 5 6 9H3v6h3l5 4z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </>
          )}
        </svg>

        <span className="mantra-sr-only">Mantra volume</span>

        <input
          type="range"
          min="0"
          max="0.3"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Mantra volume"
        />
      </label>
    </aside>
  );
}
