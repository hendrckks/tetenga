import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeFormatOptions extends Intl.DateTimeFormatOptions {
  timeZone: string;
}

const LocalTimeClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date): string => {
    const options: TimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Africa/Nairobi',
    };

    return date.toLocaleTimeString('en-US', options);
  };

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  return (
    <div className="flex items-center space-x-2 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="6"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: hours * 30 + minutes / 2 }}
          transition={{ type: 'tween', duration: 0.5 }}
          style={{ originX: '50%', originY: '50%' }}
        />
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="4"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ rotate: minutes * 6 }}
          transition={{ type: 'tween', duration: 0.5 }}
          style={{ originX: '50%', originY: '50%' }}
        />
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="2"
          strokeWidth="1"
          strokeLinecap="round"
          stroke="red"
          animate={{ rotate: seconds * 6 }}
          transition={{ type: 'tween', duration: 0.5 }}
          style={{ originX: '50%', originY: '50%' }}
        />
      </svg>
      <span className="text-sm text-white/80">
        Local time : {formatTime(time)}
      </span>
    </div>
  );
};

export default LocalTimeClock;
