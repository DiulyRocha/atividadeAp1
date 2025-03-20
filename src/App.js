import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    nome: "",
    cidadeEstado: "",
    curso: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Dados informados:\nNome: ${form.nome}\nCidade/Estado: ${form.cidadeEstado}\nCurso: ${form.curso}`
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Formulário de Informações</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome: </label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Cidade/Estado: </label>
          <input
            type="text"
            name="cidadeEstado"
            value={form.cidadeEstado}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Curso: </label>
          <input
            type="text"
            name="curso"
            value={form.curso}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
