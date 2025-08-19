import styles from "./sectionPages.module.css";

const SectionPages = () => {
    return (
        <div className={styles.container}>
          <h2 className={styles.title}>Descubra mais aqui!</h2>
            <div className={styles.sectionLinks}>
                <a href="#">Framework e Meta-framework</a>
                <a href="#">Bibliotecas de Estilos</a>
                <a href="#">Next.js 15</a>
                <a href="#">Arquivos especiais do App Router e raiz do projeto</a>
            </div>
        </div>
    )
}

export default SectionPages;