import Footer from "@/components/footer/footer";
import styles from "./contact.module.css";

const ContactPage = () => {
    return (
        <div>

            <div className={styles.container}>
                <main className={styles.mainContent}>
                    <section className={styles.intro}>
                        <h1>Contact Us</h1>
                        <p>If you have any questions or would like to work with us, feel free to get in touch!</p>

                        <form className={styles.contactForm}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Your message" required></textarea>

                            <button type="submit" className={styles.ctaButton}>Send Message</button>
                        </form>
                    </section>
                </main>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ContactPage
