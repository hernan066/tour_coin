import styles from "./section1.module.css";

export const Section1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2>¿Qué es un Tour Coin?</h2>
        <p>
          <strong>Tour coin</strong> es un token, que como un instrumento
          financiero que tiene valor y puede ser tradeado. Este fue emitido en
          una blockchain, mas específicamente en la red de Bnb. Cada token
          representa una participación en nuestra compañía o activo externos.
          Las ventajas de este planteamiento son numerosos.
        </p>

        <p>
          Como ocurre con las criptomonedas, los tokens se benefician de las
          propiedades de la blockchain en que se emiten. Entre dichas
          propiedades figuran la transparencia, una rápida liquidación
          (settlement), ausencia de tiempos de inactividad y la divisibilidad.
        </p>
        <h2 style={{ marginTop: "100px" }}>¿Que ofrecen nuestros tokens?</h2>
        <p>
          Invertir en <strong>Tour coin</strong> emitidos por nuestra empresa
          centrada en turismo, departamentos, servicios a turistas y bares en
          Celso Ramos, Brasil, ofrece varias ventajas significativas para los
          inversores.
        </p>

        <p>
          Esta inversion ofrece una oportunidad única para participar en el
          próspero sector turístico, aprovechando las ventajas de la tecnología
          blockchain y la tokenización de activos para mejorar la accesibilidad,
          transparencia y eficiencia en las transacciones financieras.
        </p>
      </div>
    </section>
  );
};
