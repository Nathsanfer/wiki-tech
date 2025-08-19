import styles from "./sectionPages.module.css";

const SectionPages = () => {
    return (
        <div className={styles.container}>
          <h2 className={styles.title}>Descubra mais aqui!</h2>
            <div className={styles.sectionLinks}>
                <a href="/pages/framework">Framework e Meta-framework</a>
                <a href="/pages/bibliotecas">Bibliotecas de Estilos</a>
                <a href="/pages/next">Next.js 15</a>
                <a href="/pages/especiais">Arquivos especiais do App Router e raiz do projeto</a>
            </div>
        </div>
    )
}

export default SectionPages;