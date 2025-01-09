import styles from "./intro.module.css"

const Intro = () => {
    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <section className={styles.intro}>
                    <h1>Welcome to Pixel Perfect Design</h1>
                    <p>This is a clean, modern design made with pixel-perfect precision.</p>
                    <p className={styles.subText}>
                        Our designs are created with attention to detail and optimized for a perfect user experience.
                    </p>
                    <button className={styles.ctaButton}>Learn More</button>
                </section>
            </main>
        </div>

    )
}

export default Intro