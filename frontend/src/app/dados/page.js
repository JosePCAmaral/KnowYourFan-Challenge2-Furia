'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DadosPage() {
  const [form, setForm] = useState({ nome: '', cpf: '', endereco: '', interesses: '' });
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    await fetch('/api/dados/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    router.push('/social');
  };

  return (
    <div className="container">
      <h2>Dados Pessoais</h2>
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="cpf" placeholder="CPF" onChange={handleChange} />
      <input name="endereco" placeholder="Endereço" onChange={handleChange} />
      <input name="interesses" placeholder="Interesses" onChange={handleChange} />
      <button onClick={() => router.back()}>Voltar</button>
      <button onClick={handleSubmit}>Próximo</button>
    </div>
  );
}