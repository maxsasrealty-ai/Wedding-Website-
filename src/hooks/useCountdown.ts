import { useEffect, useState } from 'react';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  totalSecondsRemaining: number;
}

export function useCountdown(targetIso: string): CountdownTime {
  const calculateTimeRemaining = (): CountdownTime => {
    const targetDate = new Date(targetIso).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: true,
        totalSecondsRemaining: 0,
      };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
      isPast: false,
      totalSecondsRemaining: Math.floor(difference / 1000),
    };
  };

  const [timeRemaining, setTimeRemaining] = useState<CountdownTime>(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIso]);

  return timeRemaining;
}
