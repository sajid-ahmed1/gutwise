// GutWise sign-up page
// File: src/app/signup/page.tsx

'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // simulate user session check
  const isLoggedIn = false; // replace with real auth logic

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard'); // or your main app page
    }
  }, [isLoggedIn, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle signup logic here
    console.log({ email, password, username });
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Let&apos;s Start Your Journey</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 bg-blue-50 p-6 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 rounded border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Let&apos;s Start Your Journey
        </button>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
        </p>
      </form>
    </main>
  );
}
