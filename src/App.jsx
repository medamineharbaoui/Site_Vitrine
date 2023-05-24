import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Testimonials,
  Hero,
  MyForm,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />

        <CardDeal />
        <Testimonials />
        <CTA />
        <MyForm />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
