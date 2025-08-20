import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import SectionText from "@/components/SectionText";
import SectionCards from "@/components/SectionCards";

export default function Next() {

  const beneficios = [
    "Mais rápido: graças ao Turbopack, o dev roda e atualiza o projeto bem mais veloz.",
    "Atualizado: suporte ao React 19, mas ainda roda com React 18.",
    "Controle: novos recursos de cache e requisições assíncronas.",
    "Facilidade: ferramentas que ajudam a migrar, debugar e configurar.",
    "Seguro e moderno: suporte forte a TypeScript, ESLint e melhores práticas."
  ];

  const novidades = [
    "Mais rápido no desenvolvimento: o Turbopack ficou estável e deixa tudo abrir e atualizar em segundos.",
    "Suporte ao React 19: você já pode usar os recursos novos, mas ainda roda com React 18 se quiser.",
    "Cache diferente: agora as páginas e requisições não são guardadas automaticamente, o dev escolhe quando guardar.",
    "Ferramentas novas: tem uma linha de comando pra ajudar a migrar (codemod), um indicador que mostra se a rota é estática e melhorias em formulários.",
    "Configuração melhorada: suporte a TypeScript no next.config, ESLint 9 e mensagens de erro mais claras."
  ];

  const definicao = {
    text: `O Next.js 15 é a mais recente versão principal do framework React criado pela Vercel, que traz melhorias significativas na performance, experiência de desenvolvimento e na forma de lidar com renderização e caching. Ele já suporta React 19, introduz o bundler Turbopack como padrão em dev, e redesign de APIs e caching para deixar tudo mais esperto e eficiente.`
  }

  const curiosidade = {
    text: `Uma curiosidade sobre o Next.js 15 é que ele usa o Turbopack, um empacotador escrito em Rust, que é muito mais rápido que os anteriores. Outra coisa legal é que agora existe um indicador visual no modo de desenvolvimento que mostra se a rota é estática ou não, facilitando o trabalho do desenvolvedor. Além disso, surgiu a API chamada unstable_after, que permite rodar algumas tarefas depois que a resposta já foi enviada para o usuário, como registrar logs ou enviar dados para analytics, sem deixar o site mais lento.`
  }

  const empresas = {
    text: `O Next.js é usado por empresas gigantes como Apple, Netflix, Nike, Spotify e TikTok, o que mostra a confiança do mercado nessa tecnologia.`
  }

  const oportunidades = {
    text: `Ele é muito usado para criar sites e aplicações rápidas, seguras e com bom SEO. Por isso, há oportunidades em áreas como e-commerce, redes sociais, plataformas de streaming e startups de tecnologia. Também abre muitas portas para quem quer trabalhar com desenvolvimento web moderno e React.`
  }

  return (
    <div>

      <Header />
      <SectionTitle
        linkImage="https://cdn-icons-png.flaticon.com/128/3906/3906845.png"
        imageAlt="Servidor"
        title="Next.js 15"
        description="Um framework é uma estrutura pronta que oferece ferramentas, padrões e componentes para acelerar o desenvolvimento de software, evitando que o programador precise começar tudo do zero."
      />
      <SectionText
        title="O que é o Next.js 15?"
        text={definicao.text}
      />
      <SectionCards
        title="Benefícios"
        cards={beneficios}
      />
      <SectionCards
        title="Novidades da nova versão"
        cards={novidades}
      />
      <SectionText
        title="Curiosidades"
        text={curiosidade.text}
      />
      <SectionText
        title="Empresas Usuárias"
        text={empresas.text}
      />
      <SectionText
        title="Áreas de Atuação e Oportunidades"
        text={oportunidades.text}
      />

    </div>
  );
}
