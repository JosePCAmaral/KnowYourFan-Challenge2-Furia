'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DocumentoPage() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('documento', file);

    await fetch('/api/upload/', {
      method: 'POST',
      body: formData,
    });
    router.push('/atividades');
  };

  return (
    <div className="container">
      <h2>Documento de Identificação</h2>
      <input type="file" accept="image/png" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={() => router.back()}>Voltar</button>
      <button onClick={handleSubmit}>Próximo</button>
    </div>
  );
}