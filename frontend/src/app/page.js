'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <div className="container">
      <img src="/furia-logo.png" alt="Furia Logo" className="logo" />
      <h1>Know Your Fan</h1>
      <Link href="/dados">
        <button>Entrar</button>
      </Link>
    </div>
  );
}