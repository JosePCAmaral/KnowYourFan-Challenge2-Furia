'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SocialPage() {
  const [form, setForm] = useState({ twitter: '', instagram: '', twitch: '', outro: '' });
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = async () => {
    const outroUrl = form.outro;

    if (outroUrl) {
      const res = await fetch('http://localhost:5000/api/validate/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: outroUrl }),
      });

      const data = await res.json();
      if (!data.valid) return alert('URL inválida no campo "Outro".');
    }

    await fetch('http://localhost:5000/api/social/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    router.push('/upload');
  };

  return (
    <div className="container">
      <h2>Redes Sociais</h2>
      <input name="twitter" placeholder="Twitter" onChange={handleChange} />
      <input name="instagram" placeholder="Instagram" onChange={handleChange} />
      <input name="twitch" placeholder="Twitch" onChange={handleChange} />
      <input name="outro" placeholder="Outro" onChange={handleChange} />
      <button onClick={() => router.back()}>Voltar</button>
      <button onClick={validate}>Próximo</button>
    </div>
  );
}