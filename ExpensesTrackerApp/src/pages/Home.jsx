
import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold">Welcome, {user?.email}</h1>
      <p className="mt-2">This is your dashboard ✨</p>
    </div>
  );
}
