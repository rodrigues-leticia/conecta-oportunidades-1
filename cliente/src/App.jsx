import { useState } from 'react';
import './App.css';

const oportunidades = [
  {
    id: 1,
    tipo: 'Emprego',
    titulo: 'Desenvolvedor(a) Júnior',
    empresa: 'Empresa Exemplo',
    local: 'São Paulo - SP',
    modalidade: 'Híbrido',
    categoria: 'Tecnologia da Informação',
    descricao: 'Oportunidade para profissionais que desejam iniciar sua carreira em desenvolvimento de software.'
  },
  {
    id: 2,
    tipo: 'Estágio',
    titulo: 'Estágio em Suporte de TI',
    empresa: 'Tech Solutions',
    local: 'Remoto',
    modalidade: 'Remoto',
    categoria: 'Tecnologia da Informação',
    descricao: 'Atuação no suporte técnico, atendimento aos usuários e manutenção de sistemas.'
  },
  {
    id: 3,
    tipo: 'Curso',
    titulo: 'Introdução à Programação',
    empresa: 'Plataforma de Capacitação',
    local: 'Online',
    modalidade: 'Online',
    categoria: 'Tecnologia da Informação',
    descricao: 'Aprenda os fundamentos da programação e desenvolva suas primeiras aplicações.'
  },
  {
    id: 4,
    tipo: 'Emprego',
    titulo: 'Assistente Administrativo',
    empresa: 'Organização Exemplo',
    local: 'Campo Grande - MS',
    modalidade: 'Presencial',
    categoria: 'Administração',
    descricao: 'Vaga para auxiliar nas rotinas administrativas e organização de documentos.'
  }
];

function App() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Todos');
  const [selecionada, setSelecionada] = useState(null);

  const filtradas = oportunidades.filter((vaga) => {
    const termo = busca.toLowerCase();

    const correspondeBusca =
      vaga.titulo.toLowerCase().includes(termo) ||
      vaga.empresa.toLowerCase().includes(termo) ||
      vaga.categoria.toLowerCase().includes(termo);

    const correspondeFiltro =
      filtro === 'Todos' || vaga.tipo === filtro;

    return correspondeBusca && correspondeFiltro;
  });

  return (
    <div className="site">
      <header className="header">
        <a href="#" className="logo">
          <span className="logo-icon">CO</span>
          <span>Conecta <strong>Oportunidades</strong></span>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a href="#oportunidades" className="header-button">
          Encontrar oportunidades
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">SEU FUTURO COMEÇA AQUI</span>

            <h1>
              Conectando você a
              <span> novas oportunidades.</span>
            </h1>

            <p>
              Encontre vagas de emprego, estágios e cursos de
              capacitação em um só lugar. Seu próximo passo
              profissional começa aqui!
            </p>

            <a href="#oportunidades" className="hero-button">
              Explorar oportunidades →
            </a>

            <div className="hero-stats">
              <div>
                <strong>Empregos</strong>
                <span>Novas possibilidades</span>
              </div>
              <div>
                <strong>Estágios</strong>
                <span>Primeiras experiências</span>
              </div>
              <div>
                <strong>Cursos</strong>
                <span>Mais conhecimento</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle">
              <div className="art-card">
                <span className="art-icon">✦</span>
                <h3>Seu talento merece oportunidades.</h3>
                <p>Descubra novos caminhos para sua carreira.</p>
                <div className="art-line"></div>
                <div className="art-line short"></div>
                <span className="art-check">✓</span>
              </div>
            </div>
          </div>
        </section>

        <section className="search-section" id="oportunidades">
          <div className="section-heading">
            <span className="eyebrow">ENCONTRE SEU CAMINHO</span>
            <h2>Explore oportunidades</h2>
            <p>Pesquise e encontre algo que combine com você.</p>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Pesquisar vagas, cursos ou empresas..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="filters">
            {['Todos', 'Emprego', 'Estágio', 'Curso'].map((item) => (
              <button
                key={item}
                className={filtro === item ? 'filter active' : 'filter'}
                onClick={() => setFiltro(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="results-heading">
            <h3>Oportunidades disponíveis</h3>
            <span>{filtradas.length} resultados</span>
          </div>

          <div className="opportunities-grid">
            {filtradas.map((vaga) => (
              <article className="opportunity-card" key={vaga.id}>
                <div className="card-top">
                  <span className="type">{vaga.tipo}</span>
                  <span className="card-star">✧</span>
                </div>

                <h3>{vaga.titulo}</h3>
                <p className="company">{vaga.empresa}</p>

                <div className="details">
                  <span>⌖ {vaga.local}</span>
                  <span>◷ {vaga.modalidade}</span>
                </div>

                <p className="description">{vaga.descricao}</p>

                <button
                  className="details-button"
                  onClick={() => setSelecionada(vaga)}
                >
                  Ver detalhes →
                </button>
              </article>
            ))}
          </div>

          {filtradas.length === 0 && (
            <p className="empty">
              Nenhuma oportunidade encontrada. Tente outra pesquisa.
            </p>
          )}
        </section>

        <section className="about" id="sobre">
          <span className="eyebrow">SOBRE O PROJETO</span>
          <h2>Oportunidades que transformam futuros.</h2>
          <p>
            O Conecta Oportunidades é uma iniciativa que busca
            facilitar o acesso ao mercado de trabalho e à
            capacitação profissional, conectando pessoas a
            novas possibilidades.
          </p>
        </section>
      </main>

      <footer>
        <div className="logo footer-logo">
          <span className="logo-icon">CO</span>
          <span>Conecta <strong>Oportunidades</strong></span>
        </div>
        <p>© 2026 Conecta Oportunidades. Todos os direitos reservados.</p>
      </footer>

      {selecionada && (
        <div className="modal-overlay" onClick={() => setSelecionada(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelecionada(null)}>
              ×
            </button>
            <span className="type">{selecionada.tipo}</span>
            <h2>{selecionada.titulo}</h2>
            <h4>{selecionada.empresa}</h4>
            <p>{selecionada.descricao}</p>
            <p><strong>Local:</strong> {selecionada.local}</p>
            <p><strong>Modalidade:</strong> {selecionada.modalidade}</p>
            <button className="details-button" onClick={() => setSelecionada(null)}>
              Fechar detalhes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;