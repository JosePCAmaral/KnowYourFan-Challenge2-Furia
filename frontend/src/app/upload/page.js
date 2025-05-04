const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('documento', file);
  
    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      console.log(data.texto);
    } catch (err) {
      console.error('Erro ao enviar documento:', err);
    }
  };  