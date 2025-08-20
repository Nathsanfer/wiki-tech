import styles from "./sectionCards.module.css";

const SectionCards = ({ title, cards }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divisor}></div>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCards;
