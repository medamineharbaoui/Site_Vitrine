import { freepro5g } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="product" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Mobile free Pro 5G <br /> en simple clic.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Besoin d’un ou de plusieurs forfaits mobiles supplémentaires ? Avec
        Mobile Free Pro, profitez du forfait mobile 5G à un prix imbattable
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={freepro5g} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
