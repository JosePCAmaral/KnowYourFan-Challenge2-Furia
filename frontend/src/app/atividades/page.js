import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AtividadesPage() {
  const router = useRouter();
  const [atividade, setAtividade] = useState({ nome: '', data: '', descricao: '' });
  const [evento, setEvento] = useState({ nome: '', tipo: '', data: '', organizacao: '', valor: '' });
  const [compra, setCompra] = useState({ item: '', valor: '', data: '', eventoRelacionado: '' });

  const handleSubmit = async () => {
    await fetch('/api/atividades/atividade', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(atividade),
    });
    await fetch('/api/atividades/evento', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(evento),
    });
    await fetch('/api/atividades/compra', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(compra),
    });
    router.push('/resumo');
  };

  return (
    <div className="container">
      <h2>Atividades</h2>
      <input placeholder="Nome" onChange={e => setAtividade({ ...atividade, nome: e.target.value })} />
      <input type="date" onChange={e => setAtividade({ ...atividade, data: e.target.value })} />
      <input placeholder="Descrição" onChange={e => setAtividade({ ...atividade, descricao: e.target.value })} />

      <h2>Evento</h2>
      <input placeholder="Nome" onChange={e => setEvento({ ...evento, nome: e.target.value })} />
      <input placeholder="Tipo" onChange={e => setEvento({ ...evento, tipo: e.target.value })} />
      <input type="date" onChange={e => setEvento({ ...evento, data: e.target.value })} />
      <input placeholder="Organização" onChange={e => setEvento({ ...evento, organizacao: e.target.value })} />
      <input type="number" placeholder="Valor" onChange={e => setEvento({ ...evento, valor: e.target.value })} />

      <h2>Compra</h2>
      <input placeholder="Item" onChange={e => setCompra({ ...compra, item: e.target.value })} />
      <input type="number" placeholder="Valor" onChange={e => setCompra({ ...compra, valor: e.target.value })} />
      <input type="date" onChange={e => setCompra({ ...compra, data: e.target.value })} />
      <input placeholder="Evento Relacionado" onChange={e => setCompra({ ...compra, eventoRelacionado: e.target.value })} />

      <button onClick={() => router.back()}>Voltar</button>
      <button onClick={handleSubmit}>Finalizar</button>
    </div>
  );
}