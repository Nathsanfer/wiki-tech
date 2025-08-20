import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import SectionText from "@/components/SectionText";
import SectionCards from "@/components/SectionCards";

export default function Framework() {

  const beneficios = [
    "Redução dos custos de desenvolvimento e lançamentos mais rápidos.",
    "Estilo de codificação coerente em todo o projeto, facilitando a colaboração entre desenvolvedores e a manutenção a longo prazo.",
    "Com componentes e bibliotecas reutilizáveis, é possível usar a base de código existente e realizar modificações simples para adaptá-la ao projeto.",
    "Alguns frameworks oferecem atualizações de segurança e melhorias contínuas.",
  ];

  const desvantagens = [
    "Estudar a estrutura, convenções e características de cada framework demanda tempo.",
    "A arquitetura pré-definida impõe certas restrições, principalmente na personalização.",
    "Alguns frameworks incluem muitas funcionalidades e componentes que podem ser desnecessários em aplicativos simples. Essa sobrecarga pode gerar maior consumo de recursos.",
  ];

  const definicao = {
    text: `Um framework, ou estrutura de trabalho, é como uma planta para desenvolver software de maneira mais rápida e eficiente. Ele define a estrutura do projeto e fornece ferramentas que podem ser usadas como blocos de construção. \n 
          O objetivo principal é poupar tempo e esforço dos desenvolvedores, permitindo o aproveitamento de soluções existentes e eliminando a necessidade de escrever códigos do zero para funções comuns e repetitivas. Isso agiliza o desenvolvimento, reduz erros e ajuda a criar um código mais limpo. Além disso, frameworks são reutilizáveis e podem ser aplicados em múltiplos projetos.`
  }

  const tipos = {
    text: `Existem diferentes tipos de frameworks, cada um voltado para um objetivo específico dentro do desenvolvimento de software. \n
          Os frameworks de desenvolvimento web são utilizados para criar sites e sistemas online. No front-end, que corresponde à interface do usuário, alguns exemplos bem conhecidos são React, Angular, Vue.js e Svelte. Já no back-end, que trata da parte do servidor, podemos destacar Django e Flask (ambos em Python), Spring Boot (em Java), Laravel (em PHP), Ruby on Rails (em Ruby) e Express.js (em Node.js). \n
          Os frameworks de desenvolvimento mobile têm foco na criação de aplicativos para celulares. Eles podem ser nativos, como SwiftUI (para iOS) e Jetpack Compose (para Android), ou multiplataforma, como React Native, Flutter, Ionic e Xamarin, que permitem desenvolver um único código para rodar em diferentes sistemas operacionais. \n
          Também existem os frameworks de desktop, voltados para aplicativos que rodam em computadores. Entre os mais utilizados estão Electron (baseado em JavaScript), Qt (em C++ ou Python), Tkinter (em Python) e WPF (em C#). \n
          Outro tipo importante são os frameworks de jogos, que dão suporte à criação de games, oferecendo recursos gráficos, físicos e de interação. Alguns exemplos são Unity (em C#), Unreal Engine (em C++), Godot (em C# ou GDScript) e Phaser (em JavaScript).`
  }

  const mercado = {
    text: `O mercado enxerga o uso de frameworks de forma muito positiva. Isso porque aumentam a produtividade, garantem padronização, mantêm os desenvolvedores atualizados com novas tecnologias, reduzem riscos (graças à documentação e suporte disponíveis) e fortalecem a segurança dos projetos.
          ⚠️ Porém, é importante sempre estar atento à dependência excessiva de um framework específico.`
  }

  return (
    <div>

      <Header />
      <SectionTitle
        linkImage="https://cdn-icons-png.flaticon.com/128/3906/3906805.png"
        imageAlt="Engrenagem"
        title="Framework e Meta-Framework"
        description="Um framework é uma estrutura pronta que oferece ferramentas, padrões e componentes para acelerar o desenvolvimento de software, evitando que o programador precise começar tudo do zero."
      />
      <SectionText
        title="O que são Frameworks?"
        text={definicao.text}
      />
      <SectionCards
        title="Benefícios"
        cards={beneficios}
      />
      <SectionCards
        title="Desvantagens"
        cards={desvantagens}
      />
      <SectionText
        title="Tipos de Frameworks"
        text={tipos.text}
      />
      <SectionText
        title="Como é visto no mercado?"
        text={mercado.text}
      />

    </div>
  );
}
