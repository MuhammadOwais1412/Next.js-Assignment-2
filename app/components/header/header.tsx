import style from "./header.module.css"
import Link from "next/link"
 const Header = () => {
    return (
        <nav className={style.nav}>
            <h1 className={style.h1}>My Next App</h1>
            <ul className={style.ul}>                
                <li className={style.li}><Link href="#" className={style.link}>Home</Link></li>
                <li className={style.li}><Link href="#" className={style.link}>About</Link></li>
                <li className={style.li}><Link href="#" className={style.link}>Contact</Link></li>
                <li className={style.li}><Link href="#" className={style.link}>Services</Link></li>
            </ul>
        </nav>
        
    )
}

export default Header