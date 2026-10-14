'use client';

import { useEffect, useRef, useState, type ChangeEvent } from 'react';

export default function MantraPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const userPausedRef = useRef(false);
  const cleanupUnlockRef = useRef<(() => void) | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  const [hasAudioError, setHasAudioError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.12);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    let disposed = false;
    let playRequested = false;

    let handleUserGesture = (_event: Event) => {};

    const removeUnlockListeners = () => {
      document.removeEventListener('pointerdown', handleUserGesture);
      document.removeEventListener('keydown', handleUserGesture);
      document.removeEventListener('touchstart', handleUserGesture);

      if (cleanupUnlockRef.current === removeUnlockListeners) {
        cleanupUnlockRef.current = null;
      }
    };

    cleanupUnlockRef.current = removeUnlockListeners;

    const attemptPlayback = () => {
      if (disposed || userPausedRef.current || !audio.paused || playRequested) {
        return;
      }

      playRequested = true;
      audio.volume = volume;

      try {
        const result = audio.play();

        result
          .then(() => {
            playRequested = false;

            if (disposed) return;

            setIsPlaying(true);
            setNeedsInteraction(false);
            setHasAudioError(false);

            removeUnlockListeners();
          })
          .catch(() => {
            playRequested = false;

            if (!disposed) {
              setIsPlaying(false);
              setNeedsInteraction(true);
            }
          });
      } catch {
        playRequested = false;

        if (!disposed) {
          setIsPlaying(false);
          setNeedsInteraction(true);
        }
      }
    };

    handleUserGesture = (event: Event) => {
      const target = event.target;

      // The Om button opens the controls; other page interactions
      // provide another chance to start autoplay.
      if (target instanceof Element && target.closest('.mantra-player')) {
        return;
      }

      attemptPlayback();
    };

    audio.volume = 0.12;

    document.addEventListener('pointerdown', handleUserGesture, {
      passive: true,
    });
    document.addEventListener('keydown', handleUserGesture);
    document.addEventListener('touchstart', handleUserGesture, {
      passive: true,
    });

    // First attempt: immediately when the website loads.
    attemptPlayback();

    return () => {
      disposed = true;
      removeUnlockListeners();
    };
  }, [volume]);

  async function handleTogglePlayback() {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      userPausedRef.current = true;
      cleanupUnlockRef.current?.();

      audio.pause();

      setIsPlaying(false);
      setNeedsInteraction(false);
      return;
    }

    userPausedRef.current = false;

    try {
      audio.volume = volume;
      await audio.play();

      setIsPlaying(true);
      setNeedsInteraction(false);
      setHasAudioError(false);

      cleanupUnlockRef.current?.();
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
    <aside
      className={`mantra-player${isExpanded ? ' is-expanded' : ''}${isPlaying ? ' is-playing' : ''}`}
      aria-label="Krishna Flute audio player"
    >
      <audio
        ref={audioRef}
        src="/audio/hindu-krishna-flute.mp3"
        autoPlay
        loop
        preload="auto"
        onPlay={() => {
          setIsPlaying(true);
          setNeedsInteraction(false);
          setHasAudioError(false);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onError={() => {
          setIsPlaying(false);
          setHasAudioError(true);
        }}
      />

      {/* Mobile: only the Om icon is visible initially. */}
      <button
        type="button"
        className="mantra-compact-button"
        onClick={() => setIsExpanded(current => !current)}
        aria-label={isExpanded ? 'Close music controls' : 'Open music controls'}
        aria-expanded={isExpanded}
        title="ॐ — Music controls"
      >
        <span aria-hidden="true">ॐ</span>

        {isPlaying && <span className="mantra-playing-indicator" />}
      </button>

      {/* Full controls: desktop always, mobile after tapping Om. */}
      <div className="mantra-player-panel">
        <div className="mantra-player-symbol" aria-hidden="true">
          ॐ
        </div>

        <div className="mantra-player-info">
          <strong>Krishna Flute</strong>

          <span aria-live="polite">
            {hasAudioError
              ? 'Audio unavailable'
              : isPlaying
                ? 'Playing softly'
                : needsInteraction
                  ? 'Tap play to listen'
                  : 'Paused'}
          </span>
        </div>

        <button
          type="button"
          className="mantra-player-toggle"
          onClick={handleTogglePlayback}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Pause music' : 'Play music'}
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

          <span className="mantra-sr-only">Music volume</span>

          <input
            type="range"
            min="0"
            max="0.3"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Music volume"
          />
        </label>

        <button
          type="button"
          className="mantra-collapse-button"
          onClick={() => setIsExpanded(false)}
          aria-label="Minimize music controls"
          title="Minimize"
        >
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
