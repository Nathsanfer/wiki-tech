import styles from "./page.module.css";

import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionPages from "../components/SectionPages";

export default function Home() {
  return (
    <div>

      <Header />
      <Hero />
      <SectionPages />

    </div>
  );
}
