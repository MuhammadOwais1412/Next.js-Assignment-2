import Footer from "@/components/footer/footer"
import styles from "./about.module.css"
const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <section className={styles.intro}>
            <h1>About Us</h1>
            <p>We are a design-focused agency specializing in creating pixel-perfect websites that are modern and responsive.</p>
            <p className={styles.tagline}>
              We believe in the power of simplicity and functionality combined with aesthetics.
            </p>

            <ul className={styles.servicesList}>
              <li>Responsive Web Design</li>
              <li>User Experience (UX) Optimization</li>
              <li>Custom Development Solutions</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>

  );
};

export default AboutPage
