let usuarios = []; // Simulação de banco em memória

exports.cadastrarPerfil = (req, res) => {
  const { nome, cpf, endereco, interesses } = req.body;

  if (!nome || !cpf || !endereco) {
    return res.status(400).json({ mensagem: 'Campos obrigatórios ausentes.' });
  }

  const novoUsuario = { nome, cpf, endereco, interesses };
  usuarios.push(novoUsuario);

  console.log('Novo perfil cadastrado:', novoUsuario);
  res.status(201).json({ mensagem: 'Perfil cadastrado com sucesso!', usuario: novoUsuario });
};