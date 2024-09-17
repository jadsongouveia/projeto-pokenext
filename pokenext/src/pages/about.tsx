import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia at quibusdam vel velit. Iste eum facere recusandae similique quos magnam consequatur ea quidem explicabo, voluptatibus temporibus perferendis amet fuga.</p>
            <Image src="/images/charizard.png" 
            width="200" 
            height="200" 
            alt="Charizard" />
        </div>
    )
}