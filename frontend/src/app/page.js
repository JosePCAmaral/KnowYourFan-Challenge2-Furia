'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <img src="/logoFuria.png" alt="Furia Logo" className="logo" />
      <h1>Know Your Fan</h1>
      <Link href="/dados">
        <button>Entrar</button>
      </Link>
    </div>
  );
}