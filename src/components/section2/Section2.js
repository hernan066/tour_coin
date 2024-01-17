import styles from "./section2.module.css";

const Card = () => {
  return (
    <article className={styles.card}>
      <h3>Tokenización de Activos Tangibles</h3>
      <p>
        Nuestra empresa tokeniza activos tangibles, como propiedades, servicios
        turísticos y establecimientos comerciales. Esto permite a los inversores
        acceder a inversiones en el próspero sector del turismo en Celso Ramos,
        Brasil, de una manera más accesible y diversificada.
      </p>
    </article>
  );
};
export const Section2 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg_wrapper}>
        <div className={styles.bg}></div>
      </div>
      <div className={styles.cards_container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
