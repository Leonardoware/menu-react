import { useState } from "react";

function MenuLateral({ aberto, setTela, indicadores, selecionarIndicador }) {
  const [cadastroAberto, setCadastroAberto] = useState(false);

  function alterarCadastro() {
    setCadastroAberto(!cadastroAberto);
  }

  return (
    <aside
      className={`menu-lateral bg-dark text-white ${
        aberto ? "aberto" : "fechado"
      }`}
    >
      <h2 className="h6 text-uppercase mb-3">Menu</h2>

      <div className="d-grid gap-2">
        <button
          className="btn btn-outline-light text-start"
          onClick={() => setTela("inicio")}
        >
          Inicio
        </button>

        <button
          className="btn btn-outline-light text-start"
          onClick={alterarCadastro}
        >
          Cadastro {cadastroAberto ? "▲" : "▼"}
        </button>

        {cadastroAberto && (
          <div className="ms-3 d-grid gap-2">
            
            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("funcionarios")}
            >
              Funcionários
            </button>

            <button
              className="btn btn-sm btn-dark text-start"
              onClick={() => setTela("indicadores")}
            >
              Indicadores
            </button>

            <button onClick={() => setTela('safras')}>Safras</button>
            <button onClick={() => setTela('unidades')}>Unidades</button>
            <button onClick={() => setTela('unidadesMedida')}>Unidades de medida</button>
            <button onClick={() => setTela('equipamentos')}>Equipamentos</button>
            <button onClick={() => setTela('tiposInformacao')}>Tipos de informação</button>
            <button onClick={() => setTela('medicoes')}>Medições</button>
          </div>
        )}
      </div>
      <h6>Indicadores</h6>
      {indicadores.map((item) => (
        <button
          key={item.Id}
          className="btn btn-outline-light text-start mb-2"
          onClick={() => selecionarIndicador(item)}
        >
          {item.Nome}
        </button>
      ))}
    </aside>
  );
}

export default MenuLateral;
