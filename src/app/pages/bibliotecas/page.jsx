import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import SectionText from "@/components/SectionText";
import SectionCards from "@/components/SectionCards";

export default function Biblioteca() {

  const definicao = {
    text: "Uma biblioteca de estilos é um conjunto de componentes e regras de design prontos, que ajudam a criar interfaces mais bonitas, padronizadas e responsivas sem a necessidade de escrever todo o CSS do zero."
  }

  const exemplos = [
    "Bootstrap: uma das mais antigas e populares, com grid system e componentes prontos.",
    "Tailwind CSS: baseada em classes utilitárias, altamente personalizável.",
    "Material UI (MUI): baseada no Material Design da Google, focada em React.",
    "Chakra UI: biblioteca para React, com componentes acessíveis e simples de personalizar.",
    "Bulma: leve e moderna, baseada em Flexbox, sem dependência de JavaScript."
  ];

  const escolha = {
    text: "Eu escolheria o Bootstrap, porque já conheço a biblioteca e sei como ela funciona. Ela é prática, tem uma grande quantidade de componentes prontos e facilita muito na hora de deixar o site responsivo. Além disso, a comunidade é enorme, o que significa que existem muitos tutoriais, exemplos e soluções para problemas comuns. Isso torna o desenvolvimento mais rápido e seguro, principalmente em projetos que precisam ser entregues em pouco tempo."
  }

  const beneficios = [
    "Produtividade: aceleram o desenvolvimento, pois já oferecem componentes prontos e estilos pré-definidos.",
    "Padronização: garantem um design consistente em todas as telas do projeto.",
    "Responsividade: muitas já vêm com grids e classes pensadas para funcionar em diferentes tamanhos de tela.",
    "Acessibilidade: algumas bibliotecas incluem boas práticas de acessibilidade por padrão.",
    "Comunidade e suporte: as mais populares têm documentação ampla, exemplos e ajuda da comunidade."
  ];

  const desvantagens = [
    "Dependência: o desenvolvedor pode se acostumar demais e ter dificuldade em criar estilos próprios.",
    "Sites parecidos: se não houver personalização, o projeto pode ficar com a “cara da biblioteca” (ex.: sites genéricos de Bootstrap).",
    "Peso e performance: algumas bibliotecas trazem muitos recursos que nem sempre são usados, aumentando o tamanho do projeto.",
    "Curva de aprendizado: cada biblioteca tem sua forma de trabalhar, exigindo tempo para aprender classes e convenções.",
    "Limitações na customização: pode ser difícil ou trabalhoso modificar componentes para algo muito específico fora do padrão."
  ];

  return (
    <div>

      <Header />
      <SectionTitle
        linkImage="https://cdn-icons-png.flaticon.com/128/4673/4673042.png"
        imageAlt="Formas Geométricas"
        title="Bibliotecas de Estilos"
        description="Uma biblioteca de estilos é um conjunto de ferramentas e padrões que facilita a criação de interfaces de usuário consistentes e atraentes."
      />
      <SectionText
        title="O que são Bibliotecas de Estilos?"
        text={definicao.text}
      />
      <SectionCards
        title="Exemplos"
        cards={exemplos}
      />
      <SectionText
        title="Qual eu escolheria para utilizar?"
        text={escolha.text}
      />
      <SectionCards
        title="Benefícios"
        cards={beneficios}
      />
      <SectionCards
        title="Desvantagens"
        cards={desvantagens}
      />

    </div>
  );
}
