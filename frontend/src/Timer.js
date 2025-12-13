import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  // useEffect sets up a timer when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // empty dependency array = run once on mount

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}
