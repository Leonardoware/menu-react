import { useEffect,useState } from 'react'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Conteudo from './components/Conteudo'
import Unidades from './components/cadastros/Unidades'
import Safras from './components/cadastros/Safras'
import Equipamentos from './components/cadastros/Equipamentos'
import UnidadesMedidas from './components/cadastros/UnidadesMedidas'
import TipoInformacao from './components/cadastros/TipoInformacao'
import Indicadores from './components/cadastros/Indicadores'
import Medicao from './components/cadastros/Medicao'
import Funcionarios from './components/cadastros/Funcionarios'
import './App.css'
import { indicadorService } from './services/indicadorService'
import VisualizarIndicador from './components/VisualizarIndicador'
import CadastroApi from './components/CadastroApi'

function App() {
  const [menuAberto, setMenuAberto] = useState(true)
  const [tela, setTela] = useState('início')
  const [indicadores, setIndicadores] = useState([])
  const [indicadorSelecionado, setIndicadorSelecionado] = useState(null)

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  async function atualizarMenu() {
      const dados = await indicadorService.listar();

      setIndicadores(Array.isArray(dados) ? dados : []);
  }

  useEffect(() => {
      atualizarMenu().catch(console.error);
  }, []);

  function selecionarIndicador(item) {
      setIndicadorSelecionado(item);
      setTela('visualizarIndicador');
  }


  return (
    <>
      <Header />

      <div className="layout">
        <MenuLateral
          aberto={menuAberto}
          setTela={setTela}
          indicadores={indicadores}
          selecionarIndicador={selecionarIndicador}
        />

        <main className="area-conteudo">
          <div className="p-3 border-bottom bg-white">
            <button
              className="btn btn-primary"
              onClick={alternarMenu}

            >
              ☰ Menu
            </button>
          </div>

          {tela === 'início' && <Conteudo />}
          {tela === 'unidades' && <Unidades />}
          {tela == 'safras' && <Safras />}
          {tela === 'equipamentos' && <Equipamentos />}
          {tela === 'unidadesMedidas' && <UnidadesMedidas />}
          {tela === 'tipoInformacao' && <TipoInformacao />}
          
          {tela === 'medicao' && <Medicao />}
          {tela === 'funcionarios' && <Funcionarios />}
          
          {tela === 'indicadores' && (
              <Indicadores
                  atualizarMenu={atualizarMenu}
              />
          )}

          {tela === 'visualizarIndicador' && (
              <VisualizarIndicador
                  indicador={indicadorSelecionado}
              />

          
          )}

          {tela === 'safras' && <CadastroApi recurso="safras" />}
          {tela === 'unidades' && <CadastroApi recurso="unidades" />}
          {tela === 'unidadesMedida' && <CadastroApi recurso="unidadesMedida" />}
          {tela === 'equipamentos' && <CadastroApi recurso="equipamentos" />}
          {tela === 'tiposInformacao' && <CadastroApi recurso="tiposInformacao" />}
          {tela === 'medicoes' && <CadastroApi recurso="medicoes" />}
        </main>
      </div>
    </>
  )
}

export default App