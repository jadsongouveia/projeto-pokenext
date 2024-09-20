import Link from "next/link"
import Image from "next/image"

import  styles from '../src/styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" 
                width="25"
                height="25"
                alt="Pokenext"/>
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}