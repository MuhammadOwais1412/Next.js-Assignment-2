import style from "./hero-sec.module.css"
const HeroSection = () => {
    return(
        <section className={style.hero}>
            <h1 className={style.heading}>Welcome to Hero section</h1>
            <h2 className={style.heading}>Empowering Web Development with Next.js</h2>
            <h3 className={style.heading}>Unlock the potential of faster, more efficient web applications using the power of Next.js.</h3>
            <p className={style.para}>
                Next.js is the go-to framework for developers building high-performance, scalable web applications. With its intuitive architecture, 
                built-in features like server-side rendering and static site generation, it allows you to create seamless, modern web experiences.
            </p>
        </section>
        
    )
}

export default HeroSection