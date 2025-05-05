'use client';
import { useEffect, useState } from 'react';

export default function ResumoPage() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responses = await Promise.all([
        fetch('http://localhost:5000/api/dados/get'),
        fetch('http://localhost:5000/api/social/'),
        fetch('http://localhost:5000/api/atividades/'),
      ]);

      const data = await Promise.all(responses.map(res => res.json()));
      setDados({
        user: data[0],
        social: data[1],
        atividade: data[2],
        evento: data[3],
        compra: data[4],
        documento: data[5],
      });
    };

    fetchData();
  }, []);

  if (!dados) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h2>Resumo dos Dados</h2>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
      <button onClick={() => window.location.href = '/'}>Início</button>
    </div>
  );
}
