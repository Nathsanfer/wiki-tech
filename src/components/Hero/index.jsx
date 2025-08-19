import styles from "./hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.containerInfo}>
                <h2 className={styles.subtitle}>Atividade Prática</h2>
                <h1 className={styles.title}>Mini Wiki Tech</h1>
                <h1 className={styles.title}>Pesquisa de Tecnologias</h1>
                <p className={styles.description}>Aprofundamento em conhecimentos técnicos sobre o ecossistema do Next.js e outras tecnologias de mercado.</p>
                <a
                    href="https://github.com/Nathsanfer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                >
                    <div className={styles.text}>
                        <h3 className={styles.textGithub}>Acesse meu GitHub!</h3>
                        <div className={styles.icon}>
                            <img className={styles.img} src="https://cdn-user-icons.flaticon.com/152931/152931908/1755562133433.svg?token=exp=1755559423~hmac=9e790c2faa88926cd7da39f1bcbd4e46" alt="Ícone do GitHub" />
                        </div>
                    </div>

                </a>
            </div>
            <div className={styles.containerImage}>
                <img
                    src="https://avatars.githubusercontent.com/u/158168917?v=4"
                    alt="Foto de perfil"
                    className={styles.profileImage}
                />
                <div className={styles.infoPessoal}>
                    <h3 className={styles.name}>Nathalia Santos Ferreira</h3>
                    <h4 className={styles.sala}>2TDS</h4>
                </div>
            </div>
        </div>
    )
}

export default Hero;