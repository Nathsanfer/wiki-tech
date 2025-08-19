import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import SectionText from "@/components/SectionText/indes";

export default function Framework() {
  return (
    <div>

      <Header />
      <SectionTitle
        linkImage="https://cdn-icons-png.flaticon.com/128/3906/3906805.png"
        imageAlt="Engrenagem"
        title="Frameworks"
        description="É uma .blablabla didididi dado subida canção"
      />
      <SectionText
        title="O que são Frameworks?"
        text="Frameworks são estruturas que facilitam o desenvolvimento de software, fornecendo uma base sobre a qual os desenvolvedores podem construir aplicações."
      />

    </div>
  );
}
