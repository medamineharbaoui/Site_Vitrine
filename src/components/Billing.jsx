import { freeboxpro } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={freeboxpro}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        FreeBox Pro <br /> Ultra Performante <br /> Ultra Pro.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mt-10`} />
      </div>
    </div>
  </section>
);

export default Billing;
