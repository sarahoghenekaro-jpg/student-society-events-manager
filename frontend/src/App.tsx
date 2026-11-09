import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage('Backend not reachable'));
  }, []);

  return <h1>{message}</h1>;
}