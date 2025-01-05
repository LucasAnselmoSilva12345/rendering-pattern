import { Header } from './components/header';
import { Content } from './components/content';
import { Title } from './components/title';

import './app.css';

export function App() {
  return (
    <main>
      <Header />
      <section className="app-section">
        <Title />
        <iframe src="https://embed.figma.com/board/TteFcWqnj1EKHTUIHcgd4U/SSR-vs-SPA?node-id=0-1&embed-host=share"></iframe>

        <div className="app-section-content">
          <Content text="SSR (Server-Side Rendering) e SPA (Single Page Application) são duas abordagens diferentes para o desenvolvimento de aplicações web modernas, cada uma com seus próprios benefícios e desafios. SSR refere-se ao processo em que a renderização do conteúdo de uma página web é feita no servidor antes de ser enviada para o navegador, enquanto SPA é uma técnica em que toda a aplicação é carregada em uma única página e as atualizações subsequentes são feitas dinamicamente, sem recarregar a página inteira." />
          <Content text="No SSR, o servidor processa o conteúdo HTML da aplicação e o envia ao cliente completamente renderizado, o que melhora o tempo de carregamento inicial e a performance em termos de SEO (Search Engine Optimization), já que os motores de busca conseguem indexar o conteúdo da página facilmente. Essa abordagem também é vantajosa em dispositivos de baixa potência ou redes lentas, pois o cliente precisa fazer menos trabalho para exibir o conteúdo. No entanto, SSR pode aumentar a carga no servidor, o que pode ser um ponto negativo em aplicações de grande escala." />
          <Content text="Por outro lado, uma SPA carrega todo o conteúdo da aplicação de uma só vez no navegador e faz atualizações dinâmicas conforme o usuário navega, o que proporciona uma experiência de usuário rápida e fluida, semelhante à de uma aplicação desktop. As SPAs são conhecidas por seu desempenho excelente em interações subsequentes, mas o tempo de carregamento inicial pode ser maior, além de exigir mais cuidado com SEO e acessibilidade, já que o conteúdo não está disponível de imediato para os motores de busca. Portanto, a escolha entre SSR e SPA depende dos requisitos específicos do projeto, como a necessidade de SEO, performance e experiência do usuário." />
        </div>
      </section>
    </main>
  );
}
