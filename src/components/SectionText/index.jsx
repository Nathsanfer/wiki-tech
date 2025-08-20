import styles from "./sectionText.module.css";

const SectionText = ({ title, text }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.divisor}></div>
            <div className={styles.containerText}>
                {String(text).split('\n').map((paragraph, idx) => (
                    <p key={idx} className={styles.text}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}

export default SectionText;