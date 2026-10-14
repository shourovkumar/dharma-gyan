'use client';

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';

export default function MantraPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const userPausedRef = useRef(false);
  const volumeRef = useRef(0.12);
  const cleanupUnlockRef = useRef<(() => void) | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  const [hasAudioError, setHasAudioError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.12);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Non-null reference for nested functions.
    const player: HTMLAudioElement = audio;

    let disposed = false;
    let playRequested = false;

    function attemptPlayback(target?: EventTarget | null) {
      if (
        disposed ||
        userPausedRef.current ||
        !player.paused ||
        playRequested ||
        player.error
      ) {
        return;
      }

      // Let the Play/Pause button handle its own click.
      // This prevents a click on Play from accidentally pausing the audio.
      if (
        target instanceof Element &&
        target.closest('.mantra-player-toggle')
      ) {
        return;
      }

      playRequested = true;
      player.volume = volumeRef.current;

      try {
        player
          .play()
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
    }

    function handlePointerDown(event: PointerEvent) {
      if (!event.isPrimary) return;

      // Mouse click, screen tap or pen interaction.
      attemptPlayback(event.target);
    }

    function handleKeyDown(event: KeyboardEvent) {
      // Support keyboard activation without starting audio
      // when someone is merely typing into a search field.
      if (!['Enter', ' ', 'Spacebar'].includes(event.key)) {
        return;
      }

      const target = event.target;

      if (
        target instanceof Element &&
        (
          target.closest("input, textarea, select, [contenteditable='true']") ||
          target.closest('.mantra-player-toggle')
        )
      ) {
        return;
      }

      attemptPlayback(target);
    }

    function removeUnlockListeners() {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);

      if (cleanupUnlockRef.current === removeUnlockListeners) {
        cleanupUnlockRef.current = null;
      }
    }

    cleanupUnlockRef.current = removeUnlockListeners;

    // Try autoplay immediately when the component mounts.
    player.volume = volumeRef.current;

    attemptPlayback();

    // If autoplay is blocked, retry on the first real screen interaction.
    document.addEventListener('pointerdown', handlePointerDown, {
      passive: true,
    });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      disposed = true;
      removeUnlockListeners();
    };
  }, []);

  async function handleTogglePlayback() {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      // Remember the visitor's explicit pause for this page session.
      userPausedRef.current = true;

      audio.pause();

      setIsPlaying(false);
      setNeedsInteraction(false);

      cleanupUnlockRef.current?.();

      return;
    }

    userPausedRef.current = false;

    try {
      audio.volume = volumeRef.current;

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

    volumeRef.current = nextVolume;
    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  }

  function handlePlayerPointerDown(event: ReactPointerEvent<HTMLElement>) {
    // Keep expanded panel interactions from closing it accidentally.
    event.stopPropagation();
  }

  function handlePlayerKeyDown(event: ReactKeyboardEvent<HTMLElement>) {
    event.stopPropagation();
  }

  return (
    <aside
      className={`mantra-player${isExpanded ? ' is-expanded' : ''}${
        isPlaying ? ' is-playing' : ''
      }`}
      aria-label="Krishna Flute audio player"
      onPointerDown={handlePlayerPointerDown}
      onKeyDown={handlePlayerKeyDown}
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
          setNeedsInteraction(false);
        }}
      />

      {/* Compact Om button */}
      <button
        type="button"
        className="mantra-compact-button"
        onClick={() => setIsExpanded((current) => !current)}
        aria-label={
          isExpanded ? 'Close music controls' : 'Open music controls'
        }
        aria-expanded={isExpanded}
        title="ॐ — Music controls"
      >
        <span aria-hidden="true">ॐ</span>

        {isPlaying && <span className="mantra-playing-indicator" />}
      </button>

      {/* Expanded controls */}
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
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 5h4v14H7zM15 5h4v14h-4z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
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
