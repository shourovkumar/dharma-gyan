'use client';

import { useSyncExternalStore } from 'react';

function subscribe() {
  return () => {};
}

function getYearSnapshot() {
  return String(new Date().getFullYear());
}

function getServerYearSnapshot() {
  return '';
}

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYearSnapshot, getServerYearSnapshot);

  return <>{year}</>;
}
