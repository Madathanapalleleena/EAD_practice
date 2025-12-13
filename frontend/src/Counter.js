import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render when 'count' changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // dependency array ensures it runs only when 'count' changes

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
