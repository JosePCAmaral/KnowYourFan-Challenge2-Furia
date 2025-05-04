'use client';
import { useState } from 'react';

export default function HomePage() {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    interesses: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert('Dados enviados com sucesso!');
    } catch (err) {
      console.error('Erro ao enviar dados:', err);
    }
  };

  return (
    <main className="container">
      <h1>Cadastro Know Your Fan</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="nome" placeholder="Nome" onChange={handleChange} required />
        <input name="cpf" placeholder="CPF" onChange={handleChange} required />
        <input name="endereco" placeholder="Endereço" onChange={handleChange} required />
        <textarea name="interesses" placeholder="Interesses e eventos do último ano" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}